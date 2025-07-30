import React from 'react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      {/* Contact Form Component */}
      <ContactForm />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;