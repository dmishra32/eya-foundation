import React from "react";

const ImpactSection = () => {
  const initiatives = [
    {
      title: "Blood Donation Drives",
      tagline: "Even You Are… Someone’s Lifesaver.",
      stats: "445+ Units Collected | Thalassemia Patients & Emergency Cases Helped",
      icon: (
        <svg className="w-10 h-10 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4m0 0l2 2m-2-2l-2 2" />
        </svg>
      ),
    },
    {
      title: "Slum Birthday Celebrations",
      tagline: "Even You Are… Someone’s Reason to Smile.",
      stats: "150+ Birthdays Celebrated | Gifts, Meals, Joy Shared",
      icon: (
        <svg className="w-10 h-10 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      ),
    },
    {
      title: "Sanitation Worker Outreach",
      tagline: "Those who work for us deserve to be celebrated like us.",
      stats: "Diwali Kits Distributed Annually | Sweets, Clothes, Lamps",
      icon: (
        <svg className="w-10 h-10 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M12 8v8m-4-4h8" />
        </svg>
      ),
    },
    {
      title: "Support for LGBTQIA+",
      tagline: "Value-based support and inclusive opportunities.",
      stats: "Awareness Drives | Dignity First Approach",
      icon: (
        <svg className="w-10 h-10 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8m-4-4h8" />
        </svg>
      ),
    },
  ];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0F4C81] mb-12">Our Initiatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {initiatives.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#F7941D]">
              <div className="flex items-start space-x-4">
                <div>{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F4C81] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 italic mb-2">{item.tagline}</p>
                  <p className="text-xs text-gray-500">{item.stats}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;