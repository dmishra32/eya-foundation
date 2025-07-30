import React, { useState, useEffect } from 'react';
import { Heart, Users, Lightbulb, Award, Quote } from 'lucide-react';

const OurStorySection = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  const timelineSteps = [
    {
      icon: Heart,
      title: "Grandmother's Wisdom",
      description: "Inspired by grandmother's teachings about compassion and community service",
      year: "Early Life",
      color: "from-pink-500 to-red-600"
    },
    {
      icon: Users,
      title: "COVID-19 Service",
      description: "Stepping up during the pandemic to serve communities in need",
      year: "2020-2021",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Lightbulb,
      title: "Peer Inspiration",
      description: "Colleagues and friends joining the mission of collective impact",
      year: "2022",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Award,
      title: "EYA Foundation",
      description: "Officially founded to create lasting change in communities",
      year: "May 2023",
      color: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Quote Section with Background Image */}
      <section 
        id="hero-quote"
        data-animate
        className={`relative py-16 px-4 overflow-hidden transition-all duration-1000 ${
          isVisible['hero-quote'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://files.globalgiving.org/pfil/24366/pict_featured_jumbo.jpg?t=1466455225000" 
            alt="Community service background"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/23 via-white/10 to-white/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/1 to-white/10\"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-teal-600 rounded-2xl shadow-xl">
              <Quote className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-700 bg-clip-text text-transparent mb-6 leading-tight">
            How It Started: The Spark of Compassion
          </h1>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-100/50 to-teal-100/50 rounded-3xl blur-xl opacity-60"></div>
            <blockquote className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-2xl border border-white/50">
              <p className="text-xl md:text-3xl font-serif text-gray-800 leading-relaxed italic">
                "If you want to grow big, think bigger—and first, think about the welfare of others."
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Founder's Story Split Section */}
      <section 
        id="founder-story"
        data-animate
        className={`py-16 px-4 transition-all duration-1000 delay-300 ${
          isVisible['founder-story'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium text-sm">
                <Heart className="w-4 h-4 mr-2" />
                Our Beginning
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                From Engineer to 
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"> Change Maker</span>
              </h2>
              
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p className="leading-relaxed">
                  Deepak Mishra's journey began in the corridors of Tata Steel, where as an engineer, he witnessed the power of systematic thinking and collaborative effort. But it was his grandmother's timeless wisdom about serving others that planted the seeds of transformation.
                </p>
                
                <p className="leading-relaxed">
                  When the COVID-19 pandemic struck, Deepak didn't retreat—he stepped forward. What started as individual acts of kindness during the crisis soon became a movement, as colleagues and friends were inspired to join this mission of compassion.
                </p>
                
                <p className="leading-relaxed font-medium text-gray-800">
                  On May 22, 2023, this collective spirit crystallized into the EYA Foundation—a platform where every voice matters and every act of service creates ripples of positive change.
                </p>
              </div>

              {/* Author Signature Section - Now integrated here */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  {/* Profile Image Container */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-200 to-teal-200 p-0.5 shadow-lg">
                      <div className="w-full h-full rounded-full bg-white overflow-hidden">
                        {/* Image Implementation - Replace src with actual image path */}
                        <img 
                          src="https://tse4.mm.bing.net/th/id/OIP.KrvJvTs84NkLbttu0tNGeQHaHa?pid=Api&P=0&h=180" 
                          alt="Deepak Mishra - Founder"
                          className="w-full h-full object-cover rounded-full"
                          onError={(e) => {
                            // Fallback if image fails to load
                            e.target.style.display = 'none';
                            const fallback = e.target.parentNode.querySelector('.fallback-avatar');
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        {/* Fallback content */}
                        <div className="fallback-avatar w-full h-full bg-gradient-to-br from-blue-500 to-teal-600 items-center justify-center text-white font-bold text-lg hidden">
                          DM
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Author Info */}
                  <div className="flex-1">
                    <div className="text-xl font-bold bg-gradient-to-r from-gray-700 to-blue-700 bg-clip-text text-transparent" 
                         style={{ fontFamily: 'cursive' }}>
                      Deepak Mishra
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span className="font-medium">Founder, EYA Foundation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Foundation Image Section */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-2 shadow-xl border border-white/50">
                <div className="aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-inner">
                  {/* Foundation Image Implementation */}
                  <img 
                    src="/api/placeholder/600/450" 
                    alt="EYA Foundation - Community Impact"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.style.display = 'none';
                      const fallback = e.target.parentNode.querySelector('.fallback-foundation');
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Fallback content */}
                  <div className="fallback-foundation w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 flex-col items-center justify-center text-center p-8 hidden">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">EYA Foundation</h3>
                    <p className="text-gray-600 text-sm">Empowering communities through compassionate action</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Component */}
      <section 
        id="timeline"
        data-animate
        className={`py-16 px-4 bg-gradient-to-br from-white to-blue-50/30 transition-all duration-1000 delay-500 ${
          isVisible['timeline'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey of <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every great movement begins with a single step. Here's how our story unfolded.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line - hidden on mobile, visible on desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-200 transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {timelineSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    {/* Mobile timeline connector */}
                    {index < timelineSteps.length - 1 && (
                      <div className="md:hidden absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-blue-200 to-indigo-200"></div>
                    )}
                    
                    <div className="group cursor-pointer">
                      <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <div className={`absolute -inset-1 bg-gradient-to-br ${step.color.replace('from-', 'from-').replace('to-', 'to-')}/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-300`}></div>
                        
                        <div className="relative">
                          <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                              {step.year}
                            </span>
                          </div>
                          
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStorySection;