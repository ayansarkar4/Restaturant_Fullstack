const Hero = () => {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-green-50 via-orange-50 to-green-100 overflow-hidden">
      {/* Decorative SVG Wave */}
      <svg
        className="absolute top-0 left-0 w-full h-48 text-green-100"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="currentColor" fillOpacity="1" d="M0,128L48,122.7C96,117,192,107,288,122.7C384,139,480,181,576,186.7C672,192,768,160,864,133.3C960,107,1056,85,1152,85.3C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 pt-24">
        {/* Hero Image */}
        <div className="flex-shrink-0">
          <img
            src="./hero1.png"
            alt="Signature Dish"
            className="w-80 h-80 object-cover rounded-full shadow-2xl border-8 border-white"
          />
        </div>
        {/* Text Content */}
        <div className="text-center md:text-left max-w-lg space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-green-700 leading-tight drop-shadow-md">
            Welcome to <span className="text-orange-500">Taste Haven</span>
          </h1>
          <p className="text-xl text-green-800">
            Savor the flavors of our chef’s signature dishes, crafted with passion from the freshest local ingredients. Experience dining reimagined.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
            <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-orange-400 text-white rounded-full font-semibold shadow-lg hover:from-green-600 hover:to-orange-500 transition">
              View Menu
            </button>
            <button className="px-8 py-3 bg-white text-green-700 border border-green-500 rounded-full font-semibold shadow hover:bg-green-50 transition">
              Book a Table
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Leaf/Herb SVG */}
      <svg
        className="absolute bottom-0 right-0 w-48 h-48 opacity-20"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M32 2C17 14 2 32 32 62C62 32 47 14 32 2Z"
          fill="#34D399"
        />
      </svg>
    </section>
  );
};
export default Hero;