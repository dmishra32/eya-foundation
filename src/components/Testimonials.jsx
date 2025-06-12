import React from "react";

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#0F4C81] mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: "Rajesh", role: "Volunteer", quote: "Being part of Eyaa has changed my life." },
            { name: "Shreya", role: "Beneficiary", quote: "Your birthday celebration made me feel special." }
          ].map((t, i) => (
            <div key={i} className="bg-white p-6 rounded shadow">
              <p className="italic">"{t.quote}"</p>
              <p className="mt-4 font-semibold">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;