import React, { useState, useEffect, useRef } from "react";

const InitiativesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const initiatives = [
    {
      title: "Blood Donation Drives",
      tagline: "Even You Are… Someone's Lifesaver.",
      stats: "445+ Units Collected | Thalassemia Patients & Emergency Cases Helped",
      icon: "🩸",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-600"
    },
    {
      title: "Slum Birthday Celebrations",
      tagline: "Even You Are… Someone's Reason to Smile.",
      stats: "150+ Birthdays Celebrated | Gifts, Meals, Joy Shared",
      icon: "🎂",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      textColor: "text-pink-600"
    },
    {
      title: "Education Support",
      tagline: "Even You Are… Someone's Future Builder.",
      stats: "200+ Students Supported | Books, Supplies, Mentorship Provided",
      icon: "📚",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-600"
    },
    {
      title: "Food Distribution",
      tagline: "Even You Are… Someone's Hunger Relief.",
      stats: "1000+ Meals Served | Nutritious Food Packages for Families",
      icon: "🍽️",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-300",
      textColor: "text-amber-700"
    },
    {
      title: "Sanitation Worker Outreach",
      tagline: "Those who work for us deserve to be celebrated like us.",
      stats: "Diwali Kits Distributed Annually | Sweets, Clothes, Lamps",
      icon: "🧹",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-300",
      textColor: "text-emerald-700"
    },
    {
      title: "Support for LGBTQIA+",
      tagline: "Value-based support and inclusive opportunities.",
      stats: "Awareness Drives | Dignity First Approach",
      icon: "🏳️‍🌈",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-600"
    },
  ];

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

  return (
    <section 
      ref={sectionRef}
      id="impact" 
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-10 w-36 h-36 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-4">
            Our Initiatives
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Transforming communities through targeted action and unwavering commitment to social change
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((item, index) => (
            <div
              key={index}
              className={`group relative ${item.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 ${item.borderColor} ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold ${item.textColor} mb-3 group-hover:text-opacity-90 transition-colors duration-300`}>
                  {item.title}
                </h3>

                {/* Tagline */}
                <p className="text-gray-700 italic mb-4 text-sm leading-relaxed font-medium">
                  "{item.tagline}"
                </p>

                {/* Stats */}
                <p className="text-xs text-gray-600 leading-relaxed mt-4">
                  {item.stats}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

export default InitiativesSection;