import React from 'react';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const GalleryPage = () => {
  return (
    <div className="min-h-screen">
      {/* Gallery Component */}
      <Gallery />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GalleryPage;