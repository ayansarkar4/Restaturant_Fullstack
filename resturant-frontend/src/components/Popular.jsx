import React from "react";

const dishes = [
  { src: "./dinner1.png", name: "Grilled Salmon" },
  { src: "./dinner2.png", name: "Classic Pasta" },
  { src: "./dinner3.png", name: "Veggie Delight" },
  { src: "./dinner4.png", name: "Spicy Curry" },
  { src: "./dinner5.png", name: "Sizzling Steak" },
  { src: "./dinner6.png", name: "Fresh Salad" },
];

const Popular = () => {
  return (
    <section
      id="dishes"
      className="relative py-24 bg-gradient-to-bl from-orange-50 via-green-50 to-orange-100 overflow-hidden"
    >
      {/* Decorative Top SVG */}
      <svg
        className="absolute top-0 left-0 w-full h-20 text-orange-100"
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

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-green-800 mb-14 drop-shadow-md">
          Popular <span className="text-orange-500">Dishes</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dishes.map((dish, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white bg-opacity-90 rounded-2xl shadow-lg p-4 transition hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={dish.src}
                alt={dish.name}
                className="w-56 h-56 object-cover rounded-xl mb-4 border-4 border-green-100 shadow"
              />
              <span className="text-lg font-semibold text-green-700">{dish.name}</span>
            </div>
          ))}
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

export default Popular;
