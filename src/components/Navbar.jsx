import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'mission', 'impact', 'causes', 'gallery', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "ABOUT" },
    { href: "#mission", label: "MISSION" },
    { href: "#impact", label: "IMPACT" },
    { href: "#causes", label: "CAUSES" },
    { href: "#gallery", label: "GALLERY" },
    { href: "#contact", label: "CONTACT" }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-white/20 backdrop-blur-2xl shadow-2xl border-b border-white/20' 
          : 'bg-white/10 backdrop-blur-xl shadow-xl border-b border-white/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo Section - Compact & Clean */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                {/* Logo with fallback */}
                <img 
                  src="/assets/logo.png" 
                  alt="Eya Foundation"
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback if logo doesn't load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback logo */}
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-blue-600 rounded-lg items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 hidden">
                  <span className="text-white font-bold text-xs">E</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-orange-500 group-hover:text-blue-600 transition-colors duration-300">
                  Eya Foundation
                </span>
              </div>
            </div>

            {/* Desktop Navigation - Clean Single Line */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`group relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? 'text-blue-600 bg-white/20 shadow-lg backdrop-blur-sm'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-white/10'
                  }`}
                >
                  <span className="whitespace-nowrap">
                    {item.label}
                  </span>
                  {/* Active indicator */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ${
                    activeSection === item.href.slice(1) ? 'w-8' : 'w-0 group-hover:w-6'
                  }`}></div>
                </button>
              ))}
            </div>

            {/* CTA Buttons - Compact */}
            <div className="hidden md:flex items-center space-x-2">
              <button className="group relative px-5 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <span className="relative z-10 text-sm whitespace-nowrap">
                  DONATE
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              
              <button className="group px-5 py-2 border border-blue-500/50 text-blue-600 hover:bg-blue-500 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/10">
                <span className="relative z-10 text-sm whitespace-nowrap">
                  JOIN US
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 text-gray-700 hover:text-blue-600 hover:bg-white/10 rounded-lg transition-all duration-300 backdrop-blur-sm"
              >
                <div className="w-6 h-6 relative">
                  <span className={`absolute bg-current transition-all duration-300 rounded-full ${
                    menuOpen ? 'rotate-45 translate-y-0 w-6 h-0.5' : 'rotate-0 -translate-y-2 w-6 h-0.5'
                  }`} style={{top: menuOpen ? '50%' : '25%', transformOrigin: 'center'}}></span>
                  <span className={`absolute bg-current transition-all duration-300 w-6 h-0.5 rounded-full ${
                    menuOpen ? 'opacity-0' : 'opacity-100'
                  }`} style={{top: '50%'}}></span>
                  <span className={`absolute bg-current transition-all duration-300 rounded-full ${
                    menuOpen ? '-rotate-45 translate-y-0 w-6 h-0.5' : 'rotate-0 translate-y-2 w-6 h-0.5'
                  }`} style={{top: menuOpen ? '50%' : '75%', transformOrigin: 'center'}}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Enhanced Glass Effect */}
        <div className={`lg:hidden transition-all duration-500 ease-out ${
          menuOpen 
            ? 'max-h-screen opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4'
        } overflow-hidden`}>
          <div className="bg-white/20 backdrop-blur-2xl border-t border-white/20 shadow-2xl">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="group w-full flex items-center justify-between px-4 py-3 text-left rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  style={{animationDelay: `${index * 50}ms`}}
                >
                  <span className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                    {item.label}
                  </span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2 border-t border-white/20">
                <button className="w-full px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg shadow-lg">
                  DONATE
                </button>
                <button className="w-full px-4 py-3 border border-blue-500/50 text-blue-600 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-colors backdrop-blur-sm bg-white/10">
                  JOIN US
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
