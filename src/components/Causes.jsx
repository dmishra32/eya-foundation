import React, { useState, useEffect } from 'react';
import {
  Heart,
  Droplets,
  UtensilsCrossed,
  Cake,
  ShowerHead,
  GraduationCap,
  Users,
  TreePine,
  Baby,
  Shield,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const CausesPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    // Inject comprehensive CSS for 3D card flips
    const styleId = 'card-flip-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        /* 3D Card Flip Styles */
        .flip-card {
          background-color: transparent;
          perspective: 1000px;
          height: 288px; /* 18rem = 72 * 4px */
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s ease-in-out;
          transform-style: preserve-3d;
        }
        
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 1rem;
          overflow: hidden;
        }
        
        .flip-card-front {
          background-color: #ffffff;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(229, 231, 235, 1);
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
          color: white;
        }
        
        .flip-card:hover .flip-card-front {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
        }
        
        /* Image hover effects */
        .flip-card:hover .card-image {
          transform: scale(1.05);
        }
        
        .card-image {
          transition: transform 0.5s ease-out;
        }
        
        /* Arrow animation */
        .flip-card:hover .arrow-animate {
          transform: translateX(4px);
        }
        
        .arrow-animate {
          transition: transform 0.3s ease-out;
        }
        
        /* Gradient backgrounds */
        .bg-emerald-gradient { background: linear-gradient(135deg, #10b981, #14b8a6, #059669); }
        .bg-rose-gradient { background: linear-gradient(135deg, #f43f5e, #dc2626, #ec4899); }
        .bg-orange-gradient { background: linear-gradient(135deg, #f97316, #f59e0b, #eab308); }
        .bg-purple-gradient { background: linear-gradient(135deg, #8b5cf6, #7c3aed, #6366f1); }
        .bg-pink-gradient { background: linear-gradient(135deg, #ec4899, #f43f5e, #dc2626); }
        .bg-cyan-gradient { background: linear-gradient(135deg, #06b6d4, #14b8a6, #3b82f6); }
        .bg-green-gradient { background: linear-gradient(135deg, #22c55e, #10b981, #14b8a6); }
        .bg-indigo-gradient { background: linear-gradient(135deg, #6366f1, #8b5cf6, #7c3aed); }
        .bg-lime-gradient { background: linear-gradient(135deg, #84cc16, #22c55e, #10b981); }
        .bg-yellow-gradient { background: linear-gradient(135deg, #eab308, #f97316, #dc2626); }
        .bg-violet-gradient { background: linear-gradient(135deg, #7c3aed, #8b5cf6, #ec4899); }
      `;
      document.head.appendChild(style);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const causes = [
    {
      id: 1,
      title: "Cleanliness Drive",
      icon: ShowerHead,
      image: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
      description: "Community cleaning initiatives to maintain hygiene and environmental wellness in local neighborhoods.",
      impact: "150+ locations cleaned",
      category: "Environment",
      gradientClass: "bg-emerald-gradient",
      stats: {beneficiaries: "5K+" }
    },
    {
      id: 2,
      title: "Blood Donation",
      icon: Droplets,
      image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=500&h=300&fit=crop",
      description: "Life-saving blood donation drives connecting donors with those in critical need of blood transfusions.",
      impact: "500+ units donated",
      category: "Healthcare",
      gradientClass: "bg-rose-gradient",
      stats: { beneficiaries: "1.2K+" }
    },
    {
      id: 3,
      title: "Food Donation",
      icon: UtensilsCrossed,
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&h=300&fit=crop",
      description: "Providing nutritious meals to underprivileged families and individuals facing food insecurity.",
      impact: "10,000+ meals served",
      category: "Nutrition",
      gradientClass: "bg-orange-gradient",
      stats: { beneficiaries: "3K+" }
    },
    {
      id: 4,
      title: "Birthday Celebrations",
      icon: Cake,
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&h=300&fit=crop",
      description: "Bringing joy to underprivileged children by celebrating their birthdays with cakes, gifts, and love.",
      impact: "200+ birthdays celebrated",
      category: "Joy & Happiness",
      gradientClass: "bg-purple-gradient",
      stats: {  beneficiaries: "500+" }
    },
    {
      id: 5,
      title: "Birthday Meals",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      description: "Special meal distributions on birthdays, ensuring no child goes hungry on their special day.",
      impact: "300+ special meals",
      category: "Celebration",
      gradientClass: "bg-pink-gradient",
      stats: { beneficiaries: "750+" }
    },
    {
      id: 6,
      title: "Sanitation Programs",
      icon: ShowerHead,
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=300&fit=crop",
      description: "Implementing hygiene and sanitation facilities in underserved communities for better health outcomes.",
      impact: "50+ facilities built",
      category: "Public Health",
      gradientClass: "bg-cyan-gradient",
      stats: { beneficiaries: "8K+" }
    },
    {
      id: 7,
      title: "School Kit Distribution",
      icon: GraduationCap,
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=500&h=300&fit=crop",
      description: "Providing essential educational supplies to students from economically disadvantaged backgrounds.",
      impact: "1,000+ kits distributed",
      category: "Education",
      gradientClass: "bg-green-gradient",
      stats: { beneficiaries: "2.5K+" }
    },
    {
      id: 8,
      title: "Marginalized Communities",
      icon: Users,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=300&fit=crop",
      description: "Comprehensive support programs for marginalized communities including skill development and empowerment.",
      impact: "25+ communities supported",
      category: "Social Justice",
      gradientClass: "bg-indigo-gradient",
      stats: { beneficiaries: "10K+" }
    },
    {
      id: 9,
      title: "Tree Plantation",
      icon: TreePine,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop",
      description: "Environmental conservation through large-scale tree plantation drives for a greener tomorrow.",
      impact: "5,000+ trees planted",
      category: "Environment",
      gradientClass: "bg-lime-gradient",
      stats: {  beneficiaries: "Future Gen" }
    },
    {
      id: 10,
      title: "Orphanage Visits",
      icon: Baby,
      image: "https://images.unsplash.com/photo-1544776527-0aea4eb501fe?w=500&h=300&fit=crop",
      description: "Regular visits to orphanages providing emotional support, educational assistance, and recreational activities.",
      impact: "15+ orphanages supported",
      category: "Child Welfare",
      gradientClass: "bg-yellow-gradient",
      stats: {  beneficiaries: "800+" }
    },
    {
      id: 11,
      title: "Old Age Home Care",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1581579185333-0b4ea44da1b1?w=500&h=300&fit=crop",
      description: "Caring for elderly residents through companionship, healthcare support, and recreational programs.",
      impact: "12+ homes visited regularly",
      category: "Elder Care",
      gradientClass: "bg-violet-gradient",
      stats: {  beneficiaries: "650+" }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-yellow-300/10 to-green-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-40 h-40 bg-gradient-to-br from-lime-300/10 to-emerald-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-28 h-28 bg-gradient-to-br from-teal-300/10 to-cyan-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero Section (UI changed, same content) */}
      {/* HERO SECTION with inspirational quote style */}
      <section
        id="hero-quote"
        data-animate
        className={`relative py-20 px-4 transition-all duration-1000 overflow-hidden ${
          isVisible['hero-quote'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://www.theasianschool.net/blog/wp-content/uploads/2023/07/Underprivileged-Kids-Education.jpg"
            alt="Hero background"
            className="w-full h-full object-cover"
            onError={(e) => (e.target.style.display = 'none')}
          />
          {/* Overlay gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/10 to-white/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/20"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-teal-600 rounded-2xl shadow-xl">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-700 bg-clip-text text-transparent mb-6 leading-tight">
            United for a Cause, Inspired by Compassion
          </h1>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-100/50 to-teal-100/50 rounded-3xl blur-xl opacity-60"></div>
            <blockquote className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-2xl border border-white/50">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed italic font-serif">
                "Real change begins when we come together for something greater than ourselves."
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Causes Cards Section */}
      <section
        id="causes-grid"
        data-animate
        className={`py-16 px-4 transition-all duration-1000 ${
          isVisible['causes-grid'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{animationDelay: '300ms'}}
      >
        <div className="max-w-7xl mx-auto">
          {/* Causes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {causes.map((cause, index) => {
              const Icon = cause.icon;

              return (
                <div
                  key={cause.id}
                  className="flip-card"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                  onMouseEnter={() => setHoveredCard(cause.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flip-card-inner">
                    {/* Front of Card */}
                    <div className="flip-card-front">
                      <div className="relative h-full overflow-hidden">
                        <img
                          src={cause.image}
                          alt={cause.title}
                          className="card-image w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            const fallback = e.target.parentNode.querySelector('.image-fallback');
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        
                        {/* Fallback */}
                        <div className={`image-fallback w-full h-full ${cause.gradientClass} items-center justify-center hidden`}>
                          <Icon className="w-16 h-16 text-white" />
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-4 right-4 z-10">
                          <span className="text-xs font-semibold text-white bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            {cause.category}
                          </span>
                        </div>

                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        {/* Title at Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className={`w-10 h-10 ${cause.gradientClass} rounded-xl flex items-center justify-center shadow-lg`}>
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white drop-shadow-lg">
                              {cause.title}
                            </h3>
                          </div>
                          <div className="flex items-center text-white/90 text-sm font-medium">
                            <span>Hover to learn more</span>
                            <ArrowRight className="arrow-animate w-4 h-4 ml-2" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Back of Card */}
                    <div className={`flip-card-back ${cause.gradientClass}`}>
                      <div className="p-6 h-full flex flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-xs font-semibold bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                            {cause.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-3 text-left">
                          {cause.title}
                        </h3>

                        {/* Description */}
                        <p className="text-white/90 text-sm leading-relaxed mb-4 flex-1 text-left">
                          {cause.description}
                        </p>

                        <div className="border-t border-white/20 pt-4">
                          <div className="grid grid-cols-1 gap-2">
                            <div>
                              <div className="text-xs text-white/70 mb-1">Impact</div>
                              <div className="text-sm font-bold">{cause.impact}</div>
                            </div>
                            <div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col lg:flex-row items-center gap-6 p-8 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/40 shadow-2xl max-w-4xl">
              <div className="text-center lg:text-left flex-1">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Ready to Make a Difference?
                </h3>
                <p className="text-gray-600 text-lg">
                  Join thousands of volunteers creating positive change in communities worldwide
                </p>
              </div>
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 via-green-500 to-teal-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3 group">
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Join Our Mission</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CausesPage;
