const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-tl from-orange-50 via-green-50 to-orange-100 overflow-hidden"
    >
      {/* Decorative SVG Wave */}
      <svg
        className="absolute top-0 left-0 w-full h-32 text-orange-100"
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

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 pt-16">
        {/* About Image */}
        <div className="flex-shrink-0">
          <img
            src="./about.png"
            alt="About Our Restaurant"
            className="w-64 h-64 object-cover rounded-3xl shadow-xl border-8 border-white"
          />
        </div>
        {/* Text Content */}
        <div className="text-center md:text-left max-w-lg space-y-5">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 leading-tight drop-shadow-md">
            About <span className="text-orange-500">Taste Haven</span>
          </h2>
          <p className="text-lg text-green-900">
            At Taste Haven, we believe every meal is a celebration. Our culinary
            team blends tradition and innovation, using locally sourced, fresh
            ingredients to craft dishes that delight the senses.
          </p>
          <p className="text-md text-green-700">
            Whether you’re here for a family gathering or a romantic dinner, our
            warm ambiance and attentive service promise an experience to
            remember. Join us and discover why Taste Haven is your home for
            unforgettable flavors.
          </p>
        </div>
      </div>

      {/* Decorative Herb/Leaf SVG */}
      <svg
        className="absolute bottom-0 left-0 w-40 h-40 opacity-20"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path d="M32 2C17 14 2 32 32 62C62 32 47 14 32 2Z" fill="#FBBF24" />
      </svg>
    </section>
  );
};
export default About;
