import React, { useState } from 'react';
import { FaTooth, FaRedo, FaSyringe } from 'react-icons/fa';

const treatments = [
  {
    title: "Scaling and Root Planing",
    shortText:
      "This deep cleaning procedure removes plaque and tartar from below the gumline...",
    fullText:
      "This deep cleaning procedure removes plaque and tartar from below the gumline and smooths the tooth roots to help gums reattach to teeth. It's the primary non-surgical treatment for gum disease, effectively addressing inflammation and preventing disease progression when performed by Dr. Rockson Samuel and our skilled hygienists.",
    icon: <FaTooth size={30} className="text-red-600" />
  },
  {
    title: "Gum Disease Treatment",
    shortText:
      "We offer comprehensive treatment for all stages of gum disease (gingivitis and periodontitis)...",
    fullText:
      "We offer comprehensive treatment for all stages of gum disease (gingivitis and periodontitis). Dr. Rockson Samuel develops personalized treatment plans that may include professional cleanings, medications, advanced non-surgical techniques, and in some cases, surgical interventions to restore gum health and prevent tooth loss.",
    icon: <FaRedo size={30} className="text-red-600" />
  },
   {
    title: "Gum Recession Treatment",
    shortText:
      "Gum recession exposes tooth roots, leading to sensitivity and increased risk of decay...",
    fullText:
      "Gum recession exposes tooth roots, leading to sensitivity and increased risk of decay. Dr. Rockson Samuel offers treatments to address recession, including gum grafting procedures that cover exposed roots, thicken the gum tissue, and improve both the health and appearance of your smile.",
       icon: <FaSyringe size={30} className="text-red-600" />
  },  
];

const PerioDontics = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 bg-gradient-to-b from-white via-slate-50 to-white rounded-xl shadow-md">
      <h1 className="text-4xl font-bold text-center text-red-700 mb-10">Periodontics</h1>

      {treatments.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 mb-8 flex flex-col md:flex-row gap-6 items-start"
        >
          <div className="mt-1">{item.icon}</div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{item.title}</h2>
            <p className="text-gray-600 mb-2">
              {expandedIndex === index ? item.fullText : item.shortText}
            </p>
            <button
              onClick={() => toggleReadMore(index)}
              className="mt-2 inline-block px-5 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition duration-200"
            >
              {expandedIndex === index ? 'Show less' : 'Read more'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PerioDontics;
