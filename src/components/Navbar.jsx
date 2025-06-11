import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-[#0F4C81]">Eyaa Foundation</div>
      <div className="hidden md:flex space-x-8 text-sm uppercase tracking-wider text-[#0F4C81]">
        <a href="#hero" className="hover:text-[#F7941D] transition-colors">Home</a>
        <a href="#impact" className="hover:text-[#F7941D] transition-colors">Impact</a>
        <a href="#gallery" className="hover:text-[#F7941D] transition-colors">Gallery</a>
        <a href="#contact" className="hover:text-[#F7941D] transition-colors">Join Us</a>
      </div>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-[#0F4C81]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
      {menuOpen && (
        <div className="absolute top-16 right-6 p-4 bg-white rounded-lg shadow-lg flex flex-col space-y-4 md:hidden">
          <a href="#hero" className="text-[#0F4C81] hover:text-[#F7941D]" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#impact" className="text-[#0F4C81] hover:text-[#F7941D]" onClick={() => setMenuOpen(false)}>Impact</a>
          <a href="#gallery" className="text-[#0F4C81] hover:text-[#F7941D]" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#contact" className="text-[#0F4C81] hover:text-[#F7941D]" onClick={() => setMenuOpen(false)}>Join Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;