import React from "react";

const stats = [
  { value: "14", label: "Restaurants" },
  { value: "8+", label: "Years Experience" },
  { value: "20", label: "Chefs" },
  { value: "200+", label: "Signature Dishes" },
];

const Stats = () => {
  return (
    <section
      id="stats"
      className="relative py-24 bg-gradient-to-l from-orange-50 via-green-50 to-orange-100 overflow-hidden"
    >
      {/* Decorative SVG */}
      <svg
        className="absolute top-0 left-0 w-full h-24 text-green-100"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          fillOpacity="1"
          d="M0,160L60,154.7C120,149,240,139,360,154.7C480,171,600,213,720,218.7C840,224,960,192,1080,170.7C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="relative group">
            <img
              src="./other.png" // Replace with your image
              alt="Our Story"
              className="w-96 h-96 object-cover rounded-3xl shadow-2xl border-8 border-white group-hover:scale-105 transition duration-300"
            />
            {/* Decorative overlay */}
            <div className="absolute -inset-4 rounded-3xl border-4 border-orange-200 opacity-60 group-hover:scale-110 transition"></div>
          </div>
        </div>
        {/* Right: Content */}
        <div className="md:w-1/2 w-full flex flex-col items-start">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4 drop-shadow-md">
            Discover <span className="text-orange-500">Our Story</span>
          </h2>
          <p className="text-lg text-green-900 mb-8">
            From humble beginnings to a culinary destination, Taste Haven blends tradition, creativity, and heartfelt hospitality. Our journey is defined by passion, innovation, and the joy of sharing unforgettable meals.
          </p>
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 w-full mb-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white bg-opacity-90 rounded-xl shadow flex flex-col items-center py-6 hover:bg-orange-50 transition"
              >
                <span className="text-3xl font-extrabold text-orange-500 mb-1">{stat.value}</span>
                <span className="text-green-700 text-sm font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
          <button className="mt-2 px-8 py-3 bg-gradient-to-r from-green-500 to-orange-400 text-white rounded-full font-semibold shadow-lg hover:from-green-600 hover:to-orange-500 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Decorative Bottom SVG */}
      <svg
        className="absolute bottom-0 right-0 w-32 h-32 opacity-20"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M32 2C17 14 2 32 32 62C62 32 47 14 32 2Z"
          fill="#FBBF24"
        />
      </svg>
    </section>
  );
};

export default Stats;
