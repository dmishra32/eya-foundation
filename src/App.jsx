import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ImpactSection from "./components/ImpactSection";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ImpactStats from "components/ImpactStats";
import SocialMediaFeed from "components/SocialMediaFeed";

function App() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <Navbar />
      <HeroSection />  {/* ✅ New Hero Section Added Here */}
      {/* Rest of your sections */}
      <ImpactStats />
      <ImpactSection />
      <Gallery />
      <SocialMediaFeed />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;