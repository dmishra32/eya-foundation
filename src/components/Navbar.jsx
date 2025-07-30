import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT" },
    { path: "/causes", label: "CAUSES" },
    { path: "/gallery", label: "GALLERY" },
    { path: "/contact", label: "CONTACT" },
  ];

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? "bg-white/20 backdrop-blur-2xl shadow-2xl border-b border-white/20"
            : "bg-white/10 backdrop-blur-xl shadow-xl border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <div className="relative">
                <img
                  src="/assets/logo.png"
                  alt="Eya Foundation"
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-blue-600 rounded-lg items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 hidden">
                  <span className="text-white font-bold text-xs">E</span>
                </div>
              </div>
              <div className="block">
                <span className="text-xl font-bold text-orange-500 group-hover:text-blue-600 transition-colors duration-300">
                  Eya Foundation
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`group relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    location.pathname === item.path
                      ? "text-blue-600 bg-white/20 shadow-lg backdrop-blur-sm"
                      : "text-gray-700 hover:text-blue-600 hover:bg-white/10"
                  }`}
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                  <div
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ${
                      location.pathname === item.path
                        ? "w-8"
                        : "w-0 group-hover:w-6"
                    }`}
                  ></div>
                </Link>
              ))}
            </div>

            {/* CTA Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <Link
                to="/donate"
                onClick={closeMobileMenu}
                className="group relative px-5 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 text-sm whitespace-nowrap">
                  DONATE
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>

              <Link
                to="/join"
                onClick={closeMobileMenu}
                className="group px-5 py-2 border border-blue-500/50 text-blue-600 hover:bg-blue-500 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/10"
              >
                <span className="relative z-10 text-sm whitespace-nowrap">
                  JOIN US
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button - **KEY CHANGES ARE HERE** */}
            <div className="flex items-center justify-end lg:hidden flex-grow">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                // Ensure the button itself is a flex container and centers its content
                className="p-2 text-gray-700 hover:text-blue-600 hover:bg-white/10 rounded-lg transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
                aria-label="Toggle mobile menu"
              >
                {/* This div now uses flexbox to center its children (the spans) */}
                <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                  {/* Top bar - Removed 'absolute' and 'style' props */}
                  <span
                    className={`bg-current transition-all duration-300 rounded-full w-6 h-0.5 ${
                      menuOpen
                        ? "rotate-45 translate-y-[0.3125rem]" // Adjust translate-y to move towards center
                        : ""
                    }`}
                  ></span>
                  {/* Middle bar - Removed 'absolute' and 'style' props */}
                  <span
                    className={`bg-current transition-all duration-300 w-6 h-0.5 rounded-full ${
                      menuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  {/* Bottom bar - Removed 'absolute' and 'style' props */}
                  <span
                    className={`bg-current transition-all duration-300 rounded-full w-6 h-0.5 ${
                      menuOpen
                        ? "-rotate-45 -translate-y-[0.3125rem]" // Adjust translate-y to move towards center
                        : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden transition-all duration-500 ease-out ${
            menuOpen
              ? "max-h-screen opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4"
          } overflow-hidden`}
        >
          <div className="bg-white/20 backdrop-blur-2xl border-t border-white/20 shadow-2xl">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`group w-full flex items-center justify-between px-4 py-3 text-left rounded-lg transition-all duration-300 backdrop-blur-sm ${
                    location.pathname === item.path
                      ? "bg-white/20 text-blue-600"
                      : "hover:bg-white/10 text-gray-700 hover:text-blue-600"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="font-semibold transition-colors">
                    {item.label}
                  </span>
                  <svg
                    className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2 border-t border-white/20">
                <Link
                  to="/donate"
                  onClick={closeMobileMenu}
                  className="w-full px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg shadow-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 block text-center"
                >
                  DONATE
                </Link>

                <Link
                  to="/join"
                  onClick={closeMobileMenu}
                  className="w-full px-4 py-3 border border-blue-500/50 text-blue-600 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-colors backdrop-blur-sm bg-white/10 block text-center"
                >
                  JOIN US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="h-16"></div>
    </>
  );
};

export default Navbar;