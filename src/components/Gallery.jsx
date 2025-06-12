import React, { useState, useEffect, useRef } from "react";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const allImages = [
    { id: 1, src: "https://picsum.photos/seed/gallery1/400", alt: "Blood Donation Drive", caption: "Saving Lives Together" },
    { id: 2, src: "https://picsum.photos/seed/gallery2/400", alt: "Birthday Celebration", caption: "Spreading Joy & Smiles" },
    { id: 3, src: "https://picsum.photos/seed/gallery3/400", alt: "Education Support", caption: "Building Future Leaders" },
    { id: 4, src: "https://picsum.photos/seed/gallery4/400", alt: "Food Distribution", caption: "Nourishing Communities" },
    { id: 5, src: "https://picsum.photos/seed/gallery5/400", alt: "Sanitation Workers", caption: "Honoring Our Heroes" },
    { id: 6, src: "https://picsum.photos/seed/gallery6/400", alt: "LGBTQIA+ Support", caption: "Embracing Diversity" },
    { id: 7, src: "https://picsum.photos/seed/gallery7/400", alt: "Community Outreach", caption: "Together We Grow" },
    { id: 8, src: "https://picsum.photos/seed/gallery8/400", alt: "Volunteer Team", caption: "Hearts That Care" },
    { id: 9, src: "https://picsum.photos/seed/gallery9/400", alt: "Impact Stories", caption: "Lives Transformed" },
    { id: 10, src: "https://picsum.photos/seed/gallery10/400", alt: "Community Event", caption: "Making Memories" }
  ];

  // Get current 4 images to display
  const getCurrentImages = () => {
    const images = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % allImages.length;
      images.push(allImages[index]);
    }
    return images;
  };

  // Auto-cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allImages.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [allImages.length]);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <section 
      ref={sectionRef}
      id="gallery" 
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-orange-50 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-orange-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent mb-4">
            Our Story in Pictures
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Moments that matter, memories that inspire
          </p>
        </div>

        {/* Gallery Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white/90 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group shadow-lg border border-gray-200"
          >
            <svg className="w-6 h-6 text-gray-700 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white/90 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group shadow-lg border border-gray-200"
          >
            <svg className="w-6 h-6 text-gray-700 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {getCurrentImages().map((image, index) => (
              <div
                key={`${image.id}-${currentIndex}`}
                className={`group relative aspect-square rounded-2xl overflow-hidden ${
                  isVisible ? 'animate-fade-in-scale' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium leading-tight">
                      {image.caption}
                    </p>
                  </div>
                </div>

                {/* Polaroid effect */}
                <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-300 rounded-2xl"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {allImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-blue-500 to-orange-500 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-fade-in-scale {
          animation: fade-in-scale 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Gallery;