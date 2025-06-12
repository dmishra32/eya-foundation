import React, { useState, useEffect, useRef, useMemo } from "react";

const ImpactStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({});
  const sectionRef = useRef(null);

  const stats = useMemo(() => [
    { 
      number: 445, 
      suffix: "+", 
      label: "Units Donated",
      icon: "🎁",
      description: "Food packages distributed",
      color: "from-blue-500 to-blue-700",
      textColor: "text-blue-600"
    },
    { 
      number: 150, 
      suffix: "+", 
      label: "Birthdays Celebrated",
      icon: "🎉",
      description: "Joy brought to children",
      color: "from-pink-500 to-pink-700",
      textColor: "text-pink-600"
    },
    { 
      number: 100, 
      suffix: "%", 
      label: "Sanitation Kits Delivered",
      icon: "🧴",
      description: "Complete hygiene coverage",
      color: "from-emerald-500 to-emerald-700",
      textColor: "text-emerald-600"
    },
    { 
      number: 10000, 
      suffix: "+", 
      label: "People Reached",
      icon: "👨‍👩‍👧‍👦",
      description: "Lives touched & improved",
      color: "from-red-500 to-red-700",
      textColor: "text-red-600"
    }
  ], []);

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

  // Animate numbers when visible
  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let start = 0;
        const increment = stat.number / 50;
        const timer = setInterval(() => {
          start += increment;
          if (start >= stat.number) {
            start = stat.number;
            clearInterval(timer);
          }
          setAnimatedValues(prev => ({
            ...prev,
            [index]: Math.floor(start)
          }));
        }, 30);
      });
    }
  }, [isVisible, stats]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Every number represents lives touched, smiles created, and hope restored through our collective efforts
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/50 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon with better styling */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                {stat.icon}
              </div>

              {/* Number with explicit color class */}
              <div className="mb-3">
                <span className={`text-4xl md:text-5xl font-black ${stat.textColor}`}>
                  {stat.number >= 1000 
                    ? formatNumber(animatedValues[index] || 0)
                    : (animatedValues[index] || 0)
                  }
                  <span className={stat.textColor}>{stat.suffix}</span>
                </span>
              </div>

              {/* Label */}
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {stat.description}
              </p>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Border gradient effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}></div>
            </div>
          ))}
        </div>


      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ImpactStats;