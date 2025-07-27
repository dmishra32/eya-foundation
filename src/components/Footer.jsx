import React from 'react';

const Footer = () => {
  // SVG Icons
  const FacebookIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348S9.746 16.988 8.449 16.988zM12.017 7.729c-2.35 0-4.258 1.908-4.258 4.258s1.908 4.258 4.258 4.258s4.258-1.908 4.258-4.258S14.367 7.729 12.017 7.729zM19.391 6.4c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1S19.943 6.4 19.391 6.4z"/>
    </svg>
  );

  const YoutubeIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );

  const MailIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  const MapPinIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <img 
                  src="/assets/logo.png" 
                  alt="Eyaa Foundation Logo" 
                  className="h-12 w-12 mr-3 rounded-lg"
                />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Eyaa Foundation
                </h2>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                EVERYTHING YOU ARE
              </p>
            </div>
            
            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/people/EYA-Foundation/61550911210486/?mibextid=wwXIfr&rdid=ax3jH385PpjMcU9o&share_url=https://www.facebook.com/share/1GQRWpdJiT/?mibextid%3DwwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-slate-800 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <FacebookIcon />
                </a>
                <a 
                  href="https://www.instagram.com/eya_foundation_jsr?igsh=NWcwYmU4azhqcHVq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-slate-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <InstagramIcon />
                </a>
                <a 
                  href="https://youtube.com/@eyafoundation?si=EnhaScKhj3Hp3e66"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-slate-800 hover:bg-red-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-500/25"
                >
                  <YoutubeIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Contact Details */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-emerald-600 transition-colors duration-300">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Phone</p>
                    <a href="tel:+919905556360" className="text-white hover:text-emerald-400 transition-colors">
                      +91 99055 56360
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 group">
                  <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                    <MailIcon />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <a href="mailto:contact@eyaafoundation.org" className="text-white hover:text-blue-400 transition-colors">
                      contact@eyaafoundation.org
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Visit Us</h3>
              <div className="flex items-start space-x-3 group cursor-pointer">
                <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-orange-600 transition-colors duration-300">
                  <div className="text-orange-400 group-hover:text-white transition-colors">
                    <MapPinIcon />
                  </div>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Address</p>
                  <address className="text-white not-italic leading-relaxed group-hover:text-orange-400 transition-colors">
                    H6/61, Outer Circle Road<br />
                    South Park, Bistupur<br />
                    Jamshedpur, JH - 831001<br />
                    India
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Eyaa Foundation. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;