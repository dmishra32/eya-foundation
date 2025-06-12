import React, { useState, useEffect, useRef } from "react";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const heroRef = useRef(null);
  const glassCardRef = useRef(null);
  const bgRef = useRef(null);

  // Enhanced background images with better variety
  const backgrounds = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&h=900&fit=crop",
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1600&h=900&fit=crop"
  ];

  // Enhanced text content
  const slides = [
    {
      title: "Everything You Are",
      subtitle: "A youth-driven movement for social impact.",
      accent: "Transform Lives"
    },
    {
      title: "Empowering Communities",
      subtitle: "Join us in making a difference today.",
      accent: "Create Change"
    },
    {
      title: "Building Tomorrow",
      subtitle: "Together we can achieve the impossible.",
      accent: "Unite Forward"
    }
  ];

  const currentSlide = slides[activeIndex];

  // Enhanced parallax effect with smooth mouse tracking
  const handleMouseMove = (e) => {
    if (!heroRef.current || !glassCardRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Enhanced parallax with rotation and depth
    const offsetX = ((x - centerX) / centerX) * 20;
    const offsetY = ((y - centerY) / centerY) * 20;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    glassCardRef.current.style.transform = `
      translate3d(${offsetX}px, ${offsetY}px, 0) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg)
      scale(1.02)
    `;
  };

  const resetTransform = () => {
    if (glassCardRef.current) {
      glassCardRef.current.style.transform = 'translate3d(0, 0, 0) rotateX(0) rotateY(0) scale(1)';
    }
  };

  // Enhanced slide change with proper timing
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % backgrounds.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000); // Changed to 5 seconds for better UX

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden cursor-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
    >
      {/* Enhanced Background with zoom effect */}
      <div className="absolute inset-0 z-0">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            ref={index === activeIndex ? bgRef : null}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-2000 ease-out ${
              index === activeIndex 
                ? 'opacity-100 scale-110' 
                : 'opacity-0 scale-100'
            }`}
            style={{
              backgroundImage: `url(${bg})`,
              transform: index === activeIndex ? 'scale(1.1)' : 'scale(1)',
              animation: index === activeIndex ? 'zoomOut 5s ease-out' : 'none'
            }}
          />
        ))}
      </div>

      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />

      {/* Animated particles */}
      <div className="absolute inset-0 z-15">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      {/* Enhanced Glass Card */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div
          ref={glassCardRef}
          className={`
            text-center max-w-4xl mx-auto p-8 md:p-12
            backdrop-blur-xl bg-white/10 
            rounded-3xl border border-white/20
            shadow-2xl shadow-black/50
            transition-all duration-500 ease-out
            transform-gpu perspective-1000
            ${isTransitioning ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'}
          `}
          style={{
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)'
          }}
        >
          {/* Accent text */}
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-teal-400 text-black font-bold text-sm rounded-full shadow-lg">
              {currentSlide.accent}
            </span>
          </div>

          {/* Main title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
            {currentSlide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light leading-relaxed drop-shadow-lg">
            {currentSlide.subtitle}
          </p>

          {/* Enhanced buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black font-bold rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-yellow-500/50 active:scale-95 overflow-hidden">
              <span className="relative z-10">Donate Now</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
            
            <button className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-400 hover:from-teal-400 hover:to-teal-300 text-black font-bold rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-teal-500/50 active:scale-95 overflow-hidden">
              <span className="relative z-10">Take Action</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {backgrounds.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-white scale-125 shadow-lg' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <a 
        href="#impact" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 group"
      >
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-white/80 text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Scroll Down
          </span>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </a>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes zoomOut {
          0% { transform: scale(1.1); }
          100% { transform: scale(1.15); }
        }
        
        .cursor-none {
          cursor: none;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;