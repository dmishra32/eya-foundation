import React from "react";

const JoinMissionForm = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-r from-[#51C4D3]/10 to-[#F7941D]/10 p-8 md:p-12 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20">
          <h2 className="text-3xl font-bold text-center text-[#0F4C81] mb-8">Join the Mission</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7941D] transition" required />
              <input type="email" placeholder="Email Address" className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7941D] transition" required />
            </div>
            <textarea rows="4" placeholder="Why do you want to join?" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7941D] transition" required></textarea>
            <button className="w-full p-4 bg-gradient-to-r from-[#0F4C81] to-[#F7941D] text-white rounded-lg hover:from-[#0d3f6b] hover:to-[#e7831c] shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinMissionForm;