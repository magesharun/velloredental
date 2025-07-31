import React, { useState } from 'react';
import { FaSmile, FaTooth, FaMagic, FaGrinStars } from 'react-icons/fa';

const treatments = [
  {
    icon: <FaSmile className="text-pink-600 text-5xl" />,
    title: "Professional Teeth Whitening",
    brief: "Our professional teeth whitening treatments provide dramatic results that are far superior to over-the-counter products.",
    details: " Dr. Rockson Samuel offers both in-office whitening for immediate results and take-home kits for gradual whitening at your convenience. These safe, effective treatments can brighten your smile by several shades.",
    color: "bg-pink-600 hover:bg-pink-700",
  },
  {
    icon: <FaTooth className="text-yellow-500 text-5xl" />,
    title: "Porcelain Veneers",
    brief: "Porcelain veneers are thin, custom-made shells that cover the front surface of teeth to improve their appearance.",
    details: " They're an excellent solution for discolored, worn, chipped, or misaligned teeth. Dr. Rockson Samuel designs each veneer to complement your facial features and create a naturally beautiful smile.",
    color: "bg-yellow-500 hover:bg-yellow-600",
  },
  {
    icon: <FaMagic className="text-indigo-500 text-5xl" />,
    title: "Dental Bonding",
    brief: "Dental bonding uses tooth-colored composite resin to repair chipped, cracked, or discolored teeth.",
    details: " It also closes small gaps and reshapes irregular teeth. This affordable, minimally invasive procedure can typically be completed in a single visit, instantly enhancing your smile's appearance.",
    color: "bg-indigo-500 hover:bg-indigo-600",
  },
  {
    icon: <FaGrinStars className="text-rose-500 text-5xl" />,
    title: "Smile Makeovers",
    brief: "A smile makeover combines multiple cosmetic procedures to completely transform your smile.",
    details: " Dr. Rockson Samuel creates a personalized treatment plan that may include whitening, veneers, crowns, implants, and more to help you achieve the smile you’ve always dreamed of.",
    color: "bg-rose-500 hover:bg-rose-600",
  },
];

const CosmeticDentistry = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 bg-gradient-to-b from-white via-slate-50 to-white rounded-xl shadow-md">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-10">Cosmetic Dentistry</h1>

      {treatments.map((item, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-8 flex flex-col md:flex-row gap-6 items-start">
          <div>{item.icon}</div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{item.title}</h2>
            <p className="text-gray-600 mb-2">{item.brief}</p>
            {expandedIndex === index && (
              <p className="text-gray-600 transition-all duration-200 ease-in-out">{item.details}</p>
            )}
            <button
              onClick={() => toggleReadMore(index)}
              className={`mt-4 inline-block px-5 py-2 text-white rounded-md transition duration-200 ${item.color}`}
            >
              {expandedIndex === index ? "Show less" : "Read more"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CosmeticDentistry;
