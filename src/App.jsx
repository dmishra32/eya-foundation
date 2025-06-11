import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ImpactSection from "./components/ImpactSection.jsx";
import Gallery from "./components/Gallery.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";

function App() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <Navbar />
      <Hero />
      <ImpactSection />
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;