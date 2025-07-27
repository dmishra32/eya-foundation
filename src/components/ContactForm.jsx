import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactOptions = [
    {
      icon: "💬",
      label: "WhatsApp",
      value: "+91 99055 56360",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      hoverBg: "hover:bg-green-100",
      action: () => window.open("https://wa.me/919905556360", "_blank")
    },
    {
      icon: "📸",
      label: "Instagram DM",
      value: "@eya_foundation_jsr",
      color: "from-pink-400 to-purple-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      hoverBg: "hover:bg-pink-100",
      action: () => window.open("https://www.instagram.com/eya_foundation_jsr", "_blank")
    },
    {
      icon: "📞",
      label: "Phone Call",
      value: "+91 99055 56360",
      color: "from-sky-300 to-sky-500",
      bgColor: "bg-sky-50",
      borderColor: "border-sky-200",
      hoverBg: "hover:bg-sky-100",
      action: () => window.open("tel:+919905556360")
    },
    {
      icon: "📧",
      label: "Email",
      value: "contact@eyafoundation.org",
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      hoverBg: "hover:bg-orange-100",
      action: () => window.open("mailto:contact@eyafoundation.org")
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            Reach out to us. We are here to help you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Options */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Connect With Us</h3>
            
            {/* Contact Buttons */}
            <div className="space-y-5">
              {contactOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={option.action}
                  className={`w-full group relative overflow-hidden ${option.bgColor} ${option.borderColor} ${option.hoverBg} rounded-3xl p-6 border-2 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl active:scale-95`}
                  style={{
                    background: `linear-gradient(135deg, ${option.bgColor.replace('bg-', '').replace('-50', '')}, white)`,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                  }}
                >
                  <div className="flex items-center space-x-5">
                    <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${option.color} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <span className="text-2xl filter drop-shadow-sm">{option.icon}</span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="font-bold text-slate-800 group-hover:text-slate-900 transition-colors text-lg mb-1">
                        {option.label}
                      </h4>
                      <p className="text-slate-600 group-hover:text-slate-700 transition-colors font-medium">
                        {option.value}
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <span className="text-2xl">→</span>
                    </div>
                  </div>
                  
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${option.color} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-3xl`}></div>
                  
                  {/* Shine effect */}
                  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 group-hover:left-full transition-all duration-700 transform skew-x-12"></div>
                </button>
              ))}
            </div>

            {/* Address Card */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 shadow-xl border-2 border-slate-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.02] group">
              <div className="flex items-start space-x-5">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-500 to-slate-700 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <span className="text-2xl filter drop-shadow-sm">📍</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-3 text-lg group-hover:text-slate-900 transition-colors">Our Address</h4>
                  <p className="text-slate-600 leading-relaxed font-medium group-hover:text-slate-700 transition-colors">
                    H6/61, Outer Circle Road<br />
                    South Park, Bistupur<br />
                    Jamshedpur, JH-831001<br />
                    India
                  </p>
                </div>
              </div>
              {/* Shine effect */}
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 group-hover:left-full transition-all duration-700 transform skew-x-12"></div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-10 border border-slate-200 overflow-hidden group">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-50 -translate-y-20 translate-x-20 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-100 to-yellow-100 rounded-full opacity-50 translate-y-16 -translate-x-16 group-hover:scale-110 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-slate-800 mb-10 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Quick Contact Form</h3>
            
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      className="w-full px-6 py-5 bg-gradient-to-r from-slate-50 to-slate-100 border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:bg-white focus:shadow-lg transition-all duration-300 outline-none text-slate-800 font-medium placeholder-slate-400 hover:shadow-md hover:border-slate-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-focus-within:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      className="w-full px-6 py-5 bg-gradient-to-r from-slate-50 to-slate-100 border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:bg-white focus:shadow-lg transition-all duration-300 outline-none text-slate-800 font-medium placeholder-slate-400 hover:shadow-md hover:border-slate-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-focus-within:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      className="w-full px-6 py-5 bg-gradient-to-r from-slate-50 to-slate-100 border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:bg-white focus:shadow-lg transition-all duration-300 outline-none text-slate-800 font-medium placeholder-slate-400 hover:shadow-md hover:border-slate-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-focus-within:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  <div className="relative group">
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Your Address"
                      className="w-full px-6 py-5 bg-gradient-to-r from-slate-50 to-slate-100 border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:bg-white focus:shadow-lg transition-all duration-300 outline-none text-slate-800 font-medium placeholder-slate-400 hover:shadow-md hover:border-slate-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-focus-within:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows="6"
                    className="w-full px-6 py-5 bg-gradient-to-r from-slate-50 to-slate-100 border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:bg-white focus:shadow-lg transition-all duration-300 outline-none text-slate-800 font-medium placeholder-slate-400 resize-none hover:shadow-md hover:border-slate-300"
                  ></textarea>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-focus-within:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none"></div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white font-bold py-6 px-8 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 group active:scale-95"
                  style={{
                    boxShadow: '0 0 40px rgba(59, 130, 246, 0.4)'
                  }}
                >
                  <span className="relative z-10 text-xl flex items-center justify-center">
                    <span>Submit Now</span>
                  </span>
                  
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Shine effect */}
                  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 group-hover:left-full transition-all duration-700 transform skew-x-12"></div>
                  
                  {/* Pulse effect */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-2xl animate-pulse"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;