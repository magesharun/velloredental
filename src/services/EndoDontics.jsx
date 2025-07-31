import React, { useState } from 'react';
import { FaTooth, FaRedo, FaSyringe } from 'react-icons/fa';

const treatments = [
  {
    icon: <FaTooth className="text-red-600 text-5xl" />,
    title: "Root Canal Therapy",
    brief:
      "Root canal therapy saves teeth that would otherwise need extraction due to infection or inflammation of the pulp.",
    details:
      " Using advanced techniques and effective anesthesia, Dr. Rockson Samuel removes the infected pulp, cleans and shapes the canal system, and seals the space to prevent reinfection, preserving your natural tooth and relieving pain.",
    color: "bg-red-600 hover:bg-red-700",
  },
  {
    icon: <FaRedo className="text-yellow-600 text-5xl" />,
    title: "Endodontic Retreatment",
    brief:
      "If a previous root canal treatment fails to heal properly or develops new problems, endodontic retreatment may be necessary.",
    details:
      " Dr. Rockson Samuel reopens the tooth, removes the previous filling material, addresses the problem areas, and places new filling material to restore the tooth's health and function.",
    color: "bg-yellow-500 hover:bg-yellow-600",
  },
  {
    icon: <FaSyringe className="text-purple-600 text-5xl" />,
    title: "Apicoectomy",
    brief:
      "When conventional root canal therapy isn't sufficient to save a tooth, an apicoectomy may be performed.",
    details:
      " This minor surgical procedure removes the tip of the tooth's root and places a filling to seal the root end. Dr. Rockson Samuel performs this procedure to treat persistent inflammation or infection in the bony area around the end of your tooth.",
    color: "bg-purple-600 hover:bg-purple-700",
  },
];

const Endodontics = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 bg-gradient-to-b from-white via-slate-50 to-white rounded-xl shadow-md">
      <h1 className="text-4xl font-bold text-center text-red-700 mb-10">Endodontics</h1>

      {treatments.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 mb-8 flex flex-col md:flex-row gap-6 items-start"
        >
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
              {expandedIndex === index ? 'Show less' : 'Read more'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Endodontics;
