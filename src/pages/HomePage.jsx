import React from 'react';
import HeroSection from '../components/HeroSection';
import ImpactStats from '../components/ImpactStats';
import ImpactSection from '../components/ImpactSection';
import Gallery from '../components/Gallery';
import SocialMediaFeed from '../components/SocialMediaFeed';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ImpactStats />
      <ImpactSection />
      <Gallery />
      <SocialMediaFeed />
      <ContactForm />
      <Footer />
    </>
  );
};

export default HomePage;