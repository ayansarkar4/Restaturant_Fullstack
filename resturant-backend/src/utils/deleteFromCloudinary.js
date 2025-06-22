import { v2 as cloudinary } from "cloudinary";
import ApiError from "../utils/ApiError.js";

const deleteFromCloudinary = async (imageUrl) => {
  if (!imageUrl) {
    return new ApiError(400, "Image URL is required");
  }

  try {
    const publicId = imageUrl.split("/").pop().split(".")[0];

    await cloudinary.uploader.destroy(publicId);
  } catch (err) {
    return new ApiError(
      500,
      "Something went wrong while deleting image from cloudinary",
      [],
      err.stack
    );
  }
};

export default deleteFromCloudinary;
