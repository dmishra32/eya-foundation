import React from "react";

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0F4C81] mb-12">Join the Movement</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Full Name" className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7941D]" required />
            <input type="email" placeholder="Email Address" className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7941D]" required />
          </div>
          <textarea placeholder="Your Message" rows="5" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7941D]" required></textarea>
          <button
            type="submit"
            className="w-full px-6 py-4 bg-[#0F4C81] text-white font-semibold rounded-lg shadow hover:bg-opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;