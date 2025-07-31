import React, { useState } from 'react';
import { FaTooth, FaCrown, FaTeethOpen, FaTeeth } from 'react-icons/fa';
import { GiToothbrush } from 'react-icons/gi'; // ✅ Correct icon

const treatments = [
  {
    title: 'Tooth-Colored Fillings',
    icon: <FaTooth className="text-4xl text-teal-600" />,
    brief:
      'Our composite resin fillings match the natural color of your teeth, providing a virtually invisible restoration for cavities.',
    details:
      'Unlike traditional amalgam fillings, these tooth-colored fillings bond directly to the tooth structure, requiring less removal of healthy tooth material and providing added strength and support.',
  },
  {
    title: 'Dental Crowns',
    icon: <FaCrown className="text-4xl text-yellow-500" />,
    brief:
      'Dental crowns are custom-made caps that cover damaged or weakened teeth to restore their shape, size, strength, and appearance.',
    details:
      'Dr. Rockson Samuel uses high-quality materials including porcelain, ceramic, and zirconia to create natural-looking crowns that blend seamlessly with your smile while providing exceptional durability.',
  },
  {
    title: 'Dental Bridges',
    icon: <FaTeethOpen className="text-4xl text-blue-500" />,
    brief:
      'Dental bridges replace missing teeth by spanning the gap with artificial teeth anchored to adjacent natural teeth or implants.',
    details:
      'These fixed prosthetics restore your smile, improve chewing and speaking ability, maintain facial structure, and prevent remaining teeth from shifting out of position.',
  },
  {
    title: 'Dental Implants',
    icon: <GiToothbrush className="text-4xl text-purple-600" />, // ✅ Fixed
    brief:
      'Dental implants provide the most natural-looking and functioning replacement for missing teeth.',
    details:
      'These titanium posts are surgically placed in the jawbone to serve as artificial tooth roots, supporting crowns, bridges, or dentures. Implants preserve bone structure, prevent facial sagging, and can last a lifetime with proper care.',
  },
  {
    title: 'Dentures',
    icon: <FaTeeth className="text-4xl text-rose-500" />,
    brief:
      'We offer full and partial dentures to replace multiple missing teeth. Our modern dentures are custom-crafted for optimal fit and natural appearance.',
    details:
      'Dr. Rockson Samuel works closely with patients to ensure their dentures function properly and enhance their quality of life through improved speaking, eating, and smiling.',
  },
];

const RestorativeDentistry = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetails = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 bg-gradient-to-b from-white via-slate-50 to-white rounded-xl shadow-md">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">
        Restorative Dentistry
      </h1>

      {treatments.map((treatment, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 mb-6 transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div>{treatment.icon}</div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-1">{treatment.title}</h2>
              <p className="text-gray-600">{treatment.brief}</p>

              {openIndex === index && (
                <p className="text-gray-600 mt-2">{treatment.details}</p>
              )}

              <button
                onClick={() => toggleDetails(index)}
                className="mt-4 inline-block px-4 py-2 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
              >
                {openIndex === index ? 'Show less' : 'Read more'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestorativeDentistry;
