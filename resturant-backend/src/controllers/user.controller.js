// ===== Imports =====
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
import deleteFromCloudinary from "../utils/deleteFromCloudinary.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

// ===== Utility Functions =====

// Generate access and refresh tokens for a user
const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(400, "Access token and refresh token not generated");
  }
};

// ===== Controllers =====

// --- Register User ---
const registerUser = asyncHandler(async (req, res, next) => {
  const { fullName, email, password } = req.body;

  // Basic validation
  if ([fullName, email, password].some(field => !field?.trim())) {
    throw new ApiError(400, "All fields are required");
  }

  if (!email.includes("@")) {
    throw new ApiError(400, "Email is not valid");
  }

  // Check if user already exists
  const normalizedEmail = email.toLowerCase();
  const existedUser = await User.findOne({ email: normalizedEmail });
  if (existedUser) {
    throw new ApiError(409, "User already exists with this email");
  }

  // Check for avatar file
  const avatarLocalPath = req.files?.avatar?.[0]?.path;
  if (!avatarLocalPath) {
    throw new ApiError(400 , "avatar is required")
  }

  // Upload avatar to Cloudinary
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  if (!avatar?.url) {
    throw new ApiError(500, "Failed to upload avatar to Cloudinary");
  }

  // Create user
  const user = await User.create({
    fullName,
    email: normalizedEmail,
    password,
    avatar: avatar.url
  });

  // Select user data without password and refreshToken
  const createdUser = await User.findById(user._id).select("-password -refreshToken");
  if (!createdUser) {
    throw new ApiError(500, "User creation failed");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "User created successfully"));
});

// --- Login User ---
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email?.trim()) {
    throw new ApiError(400, "Email is required");
  }

  const normalizedEmail = email.toLowerCase();
  const user = await User.findOne({ email: normalizedEmail });
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, "password is incorrect");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);
  const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

  const options = {
    httpOnly: true,
    secure: true
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(
      200,
      { user: loggedInUser, accessToken, refreshToken },
      "Login successful"
    ));
});

// --- Update User Avatar ---
const updateUserAvatar = asyncHandler(async (req, res) => {
  const avatarLocalPath = req.file?.path;
  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  const currentUser = await User.findById(req.user._id);
  if (!currentUser) {
    throw new ApiError(404, "User not found");
  }

  // Upload new avatar
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  if (!avatar?.url) {
    throw new ApiError(500, "Failed to upload avatar");
  }

  // Update user avatar
  const updatedUser = await User.findByIdAndUpdate(
    req.user._id,
    { $set: { avatar: avatar.url } },
    { new: true }
  ).select("-password");

  // Delete old avatar from Cloudinary
  if (currentUser.avatar) {
    deleteFromCloudinary(currentUser.avatar);
  }

  return res
    .status(200)
    .json(new ApiResponse(200, updatedUser, "Avatar updated successfully"));
});

// ===== Exports =====
export { registerUser, loginUser, updateUserAvatar };
