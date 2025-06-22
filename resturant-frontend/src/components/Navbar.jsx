import React, { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const storedAvatar = localStorage.getItem("avatar");
    if (storedAvatar) setAvatar(storedAvatar);
  }, []);

  // Dropdown outside click handler
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    setAvatar(null);
    setShowDropdown(false);
  };

  return (
    <nav className="w-full sticky top-0 z-30 bg-gradient-to-r from-green-50 via-green-100 to-orange-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20 relative">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-10 bg-gradient-to-b from-green-400 via-orange-300 to-green-600 rounded-full shadow-lg"></span>
          <span className="text-2xl font-extrabold text-green-600 tracking-wide">
            Taste Haven
          </span>
        </div>
        {/* Nav Links */}
        <div
          className={`
            ${mobileMenuOpen ? "flex" : "hidden"}
            md:flex flex-col md:flex-row items-center gap-4
            absolute md:static top-20 left-0 w-full md:w-auto
            bg-white md:bg-transparent p-4 md:p-0 transition-all duration-300
            z-40
          `}
        >
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-orange-500 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-orange-500 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-orange-500 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="dishes"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-orange-500 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Dishes
          </ScrollLink>
          <ScrollLink
            to="member"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-orange-500 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Member
          </ScrollLink>
          
          <ScrollLink
            to="stats"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-orange-500 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Stats
          </ScrollLink>

        </div>
        {/* Right Side: Reserve (desktop), Avatar/Login, Mobile Menu */}
        <div className="flex items-center gap-2 relative">
          <ScrollLink
            to="reserve"
            smooth={true}
            duration={500}
            className="hidden lg:flex px-6 py-2 bg-gradient-to-r from-green-500 to-orange-400 text-white rounded-full font-bold shadow hover:from-green-600 hover:to-orange-500 transition cursor-pointer"
          >
            Reserve
          </ScrollLink>
          <span className="hidden md:inline-block w-px h-6 bg-green-200 mx-1"></span>
          {/* Avatar with Dropdown or Login Button */}
          {avatar ? (
            <div className="relative" ref={dropdownRef}>
              <img
                src={avatar}
                alt="User Avatar"
                className="w-12 h-12 rounded-full border-2 border-green-400 object-cover cursor-pointer"
                onClick={() => setShowDropdown((prev) => !prev)}
                title="Profile"
              />
              {/* Dropdown */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-green-200 rounded-lg shadow-lg py-2 z-50 animate-fade-in">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-green-50 font-semibold transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-2 border-2 border-green-400 text-green-700 bg-white rounded-full font-bold shadow-sm hover:bg-green-50 hover:border-orange-400 hover:text-orange-500 transition"
            >
              Login
            </button>
          )}
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-green-100 transition"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <svg
              className="w-7 h-7 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
