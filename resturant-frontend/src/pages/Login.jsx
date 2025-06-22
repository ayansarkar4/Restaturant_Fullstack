import React from "react";
import { handleError, handleSuccess } from "../Utils.jsx";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://restaturant-fullstack-1.onrender.com/api/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (result.success) {
        handleSuccess(result.message);
        const {
          accessToken,
          user: { fullName, avatar },
        } = result.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("user", fullName);
        localStorage.setItem("avatar", avatar);
        setTimeout(() => {
          window.location.href = "/success";
        }, 1000); // 1 second delay before redirect
      } else {
        console.log("Login failed:", result.message);
        handleError(result.message);
      }
    } catch (error) {
      console.log("Network error:", error.message);
      handleError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 via-green-100 to-orange-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 relative">
        {/* Accent Bar */}
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-green-400 via-orange-300 to-green-600 rounded-full shadow-lg"></span>
        <h2 className="text-3xl font-extrabold text-green-600 text-center mb-6 tracking-wide">
          Welcome Back
        </h2>
        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-green-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 rounded-full border-2 border-green-200 focus:border-orange-400 outline-none transition"
              placeholder="you@email.com"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <div>
            <label className="block text-green-700 font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 rounded-full border-2 border-green-200 focus:border-orange-400 outline-none transition"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 mt-2 bg-gradient-to-r from-green-500 to-orange-400 text-white font-bold rounded-full shadow-lg transition ${loading ? "opacity-60 cursor-not-allowed" : "hover:from-green-600 hover:to-orange-500"}`}
          >
            {loading ? "Logging In..." : "Log In"}
          </button>
        </form>
        <div className="text-center mt-6 text-green-600">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="font-bold text-orange-500 hover:underline"
          >
            Sign up
          </a>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
