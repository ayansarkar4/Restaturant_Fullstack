import React, { useRef, useState } from "react";
import { handleError, handleSuccess } from "../Utils.jsx";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // <-- Loading state
  const fileInputRef = useRef();
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle avatar file selection
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
      setAvatarFile(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const url = "https://restaturant-fullstack.onrender.com/api/v1/users/register";
      const data = new FormData();
      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("password", formData.password);
      if (avatarFile) {
        // Only append avatar if a file is selected
        data.append("avatar", avatarFile);
      }

      const response = await fetch(url, {
        method: "POST",
        body: data, // Content-Type header is NOT set here
      });

      const result = await response.json();
      if (response.ok) {
        setTimeout(() => {
          navigate("/login");
        }, 1000);
        handleSuccess(result.message || "Signup successful!");

        setAvatarFile(null);
        setAvatarPreview(null);
      } else {
        handleError(result.message || "Signup failed!");
      }
    } catch (error) {
      handleError(error.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 via-green-100 to-orange-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 relative">
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-green-400 via-orange-300 to-green-600 rounded-full shadow-lg"></span>
        <h2 className="text-3xl font-extrabold text-green-600 text-center mb-6 tracking-wide">
          Create your account
        </h2>
        <form
          className="space-y-5"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          {/* Avatar Upload */}
          <div className="flex flex-col items-center mb-6">
            <div
              className="relative w-24 h-24 rounded-full bg-green-100 border-4 border-green-300 flex items-center justify-center shadow cursor-pointer hover:border-orange-300 transition"
              onClick={() => fileInputRef.current.click()}
              tabIndex={0}
              role="button"
              aria-label="Upload avatar"
            >
              {avatarPreview ? (
                <img
                  src={avatarPreview}
                  alt="Avatar Preview"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <svg
                  className="w-12 h-12 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              )}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={handleAvatarChange}
                name="avatar"
              />
              <span className="absolute bottom-0 right-0 bg-orange-400 text-white text-xs rounded-full px-2 py-0.5 shadow">
                Edit
              </span>
            </div>
            <span className="mt-2 text-sm text-green-500">Upload Avatar</span>
          </div>
          <div>
            <label
              className="block text-green-700 font-semibold mb-1"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full px-4 py-2 rounded-full border-2 border-green-200 focus:border-orange-400 outline-none transition"
              placeholder="Your Name"
              onChange={handleChange}
              value={formData.fullName}
              disabled={loading}
            />
          </div>
          <div>
            <label
              className="block text-green-700 font-semibold mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded-full border-2 border-green-200 focus:border-orange-400 outline-none transition"
              placeholder="you@email.com"
              onChange={handleChange}
              value={formData.email}
              disabled={loading}
            />
          </div>
          <div>
            <label
              className="block text-green-700 font-semibold mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 rounded-full border-2 border-green-200 focus:border-orange-400 outline-none transition"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            className={`w-full py-3 mt-2 bg-gradient-to-r from-green-500 to-orange-400 text-white font-bold rounded-full shadow-lg transition ${
              loading
                ? "opacity-60 cursor-not-allowed"
                : "hover:from-green-600 hover:to-orange-500"
            }`}
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
          <ToastContainer />
        </form>
        <div className="text-center mt-6 text-green-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-bold text-orange-500 hover:underline"
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
