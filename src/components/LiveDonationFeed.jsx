import React from "react";

const LiveDonationFeed = () => {
  const donations = [
    { name: "Ananya Sharma", amount: "$50", date: "2 mins ago" },
    { name: "Rohan Mehta", amount: "$100", date: "5 mins ago" },
    { name: "Priya Nair", amount: "$75", date: "10 mins ago" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#0F4C81] mb-8">Live Donation Feed</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {donations.map((d, i) => (
            <div key={i} className="bg-white p-4 rounded shadow text-center">
              <p className="font-semibold">{d.name}</p>
              <p className="text-green-600 font-bold">{d.amount}</p>
              <p className="text-xs text-gray-500">{d.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveDonationFeed;