import React, { useState } from 'react';
import { FaTooth, FaProcedures, FaBone } from 'react-icons/fa';

const treatments = [
  {
    title: "Tooth Extractions",
    shortText:
      "While we always aim to preserve natural teeth, extractions are sometimes necessary due to severe decay, infection, crowding, or damage.",
    fullText:
      "While we always aim to preserve natural teeth, extractions are sometimes necessary due to severe decay, infection, crowding, or damage. Dr. Rockson Samuel performs both simple and surgical extractions with a gentle approach, prioritizing patient comfort and providing detailed aftercare instructions for optimal healing.",
    icon: <FaProcedures className="text-red-600" size={48} />,
  },
  {
    title: "Wisdom Teeth Removal",
    shortText:
      "Wisdom teeth (third molars) often cause problems when they don't have enough space to emerge properly.",
    fullText:
      "Wisdom teeth (third molars) often cause problems when they don't have enough space to emerge properly. Dr. Rockson Samuel evaluates wisdom teeth development with X-rays and performs extractions when necessary to prevent pain, infection, damage to adjacent teeth, and other complications associated with impacted wisdom teeth.",
    icon: <FaTooth className="text-blue-600" size={48} />,
  },
  {
    title: "Bone Grafting",
    shortText:
      "Bone grafting restores jaw bone volume and density lost due to tooth extraction, gum disease, or injury.",
    fullText:
      "Bone grafting procedures restore jaw bone volume and density that may have been lost due to tooth extraction, gum disease, or injury. This treatment is often necessary before dental implant placement to ensure there's adequate bone to support the implant. Dr. Rockson Samuel uses advanced techniques and materials to promote successful bone regeneration.",
    icon: <FaBone className="text-green-600" size={48} />,
  },
];

const OralSurgery = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        Oral Surgery
      </h1>

      {treatments.map((treatment, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-start bg-gray-50 rounded-lg shadow-md p-6 mb-8 gap-6"
        >
          <div className="flex-shrink-0">{treatment.icon}</div>

          <div className="flex-grow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              {treatment.title}
            </h2>
            <p className="text-gray-700 mb-3">
              {expandedIndex === index ? treatment.fullText : treatment.shortText}
            </p>
            <button
              onClick={() => toggleReadMore(index)}
              className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
            >
              {expandedIndex === index ? "Read less" : "Read more"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OralSurgery;
