import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home after 2.5 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-orange-50 to-green-100">
      <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center">
        {/* Checkmark Icon */}
        <div className="mb-6">
          <svg
            className="w-20 h-20 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#ECFDF5"/>
            <path
              d="M8 12l3 3 5-5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-green-700 mb-2">Login Successful!</h2>
        <p className="text-green-800 mb-6 text-center">
          Welcome back! You will be redirected to the home page shortly.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-gradient-to-r from-green-500 to-orange-400 text-white rounded-full font-semibold shadow hover:from-green-600 hover:to-orange-500 transition"
        >
          Go to Home Now
        </button>
      </div>
    </section>
  );
};

export default Success;
