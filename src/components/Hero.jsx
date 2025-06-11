import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-r from-[#0F4C81] to-[#51C4D3] text-white overflow-hidden">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">Everything You Are</h1>
        <p className="text-xl md:text-2xl mb-8">A youth-driven movement for social impact</p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-[#F7941D] text-white font-semibold rounded-full shadow-lg hover:bg-opacity-90 transition transform hover:scale-105"
        >
          Join Our Movement
        </a>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;