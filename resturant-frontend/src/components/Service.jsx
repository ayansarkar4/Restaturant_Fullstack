const services = [
  {
    title: "Dine-In Experience",
    description:
      "Relax in our welcoming dining room and enjoy attentive service with every meal. Perfect for family gatherings, date nights, or celebrations.",
    icon: (
      <svg className="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
    accent: "from-orange-400 to-orange-200",
  },
  {
    title: "Takeaway & Delivery",
    description:
      "Order your favorites for pickup or delivery and enjoy Taste Haven at home. Fast, fresh, and always delicious.",
    icon: (
      <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 7h18M3 7l1.5 9a2 2 0 002 2h11a2 2 0 002-2L21 7M16 10a4 4 0 01-8 0"></path>
      </svg>
    ),
    accent: "from-green-400 to-green-200",
  },
  {
    title: "Catering & Events",
    description:
      "Let us make your next event memorable with custom menus and seamless service, tailored for any occasion.",
    icon: (
      <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 8c-3.31 0-6 2.69-6 6v4h12v-4c0-3.31-2.69-6-6-6z"></path>
        <circle cx="12" cy="4" r="2"></circle>
      </svg>
    ),
    accent: "from-orange-500 to-yellow-200",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-br from-green-50 via-orange-50 to-green-100 overflow-hidden">
      {/* Decorative Top SVG */}
      <svg
        className="absolute top-0 left-0 w-full h-20 text-green-100"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="currentColor" fillOpacity="1" d="M0,96L80,122.7C160,149,320,203,480,197.3C640,192,800,128,960,117.3C1120,107,1280,149,1360,170.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-green-800 mb-14 drop-shadow-md">
          Our <span className="text-orange-500">Services</span>
        </h2>
        <div className="flex flex-col gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col md:flex-row items-center md:items-stretch bg-white bg-opacity-90 rounded-2xl shadow-xl overflow-hidden transition hover:scale-[1.02] hover:shadow-2xl ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              style={{
                marginLeft: idx % 2 === 1 ? "auto" : undefined,
                marginRight: idx % 2 === 0 ? "auto" : undefined,
                maxWidth: "900px",
              }}
            >
              {/* Accent Bar */}
              <div
                className={`hidden md:block w-2 bg-gradient-to-b ${service.accent}`}
              />
              {/* Icon and Content */}
              <div className="flex flex-col md:flex-row items-center md:items-center w-full">
                <div className="flex-shrink-0 flex items-center justify-center p-6">
                  <div className="rounded-full bg-gradient-to-br from-white to-green-50 shadow-md p-4">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6 text-center md:text-left flex-1">
                  <h3 className="text-2xl font-semibold text-green-700 mb-2">{service.title}</h3>
                  <p className="text-green-800">{service.description}</p>
                </div>
              </div>
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
          fill="#34D399"
        />
      </svg>
    </section>
  );
};

export default Services;
