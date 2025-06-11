import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0F4C81] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Eyaa Foundation</h3>
            <p className="text-sm mt-2 opacity-80">Youth-driven initiatives for a better tomorrow.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-[#F7941D]">Facebook</a>
            <a href="#" className="text-white hover:text-[#F7941D]">Instagram</a>
            <a href="#" className="text-white hover:text-[#F7941D]">LinkedIn</a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-400 text-sm text-center opacity-70">
          © {new Date().getFullYear()} Eyaa Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;