import React from "react";

const Footer = () => (
  <footer id="footer" className="bg-gradient-to-r from-green-50 via-orange-50 to-green-100 border-t border-green-100 ">
    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
      {/* Branding */}
      <div className="flex items-center gap-2">
        <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-orange-400 flex items-center justify-center shadow-lg">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="text-white">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
            <path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <span className="text-xl font-extrabold text-green-700">Taste Haven</span>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col items-center md:items-end gap-1">
        <span className="text-green-700 text-sm">123 Foodie Lane, City</span>
        <span className="text-green-700 text-sm">+880 1234-567890</span>
        <span className="text-green-700 text-sm">info@tastehaven.com</span>
      </div>
    </div>
    <div className="py-4 text-center text-green-600 text-sm border-t border-green-100">
      &copy; {new Date().getFullYear()} Taste Haven. All rights reserved.
    </div>
  </footer>
);

export default Footer;
