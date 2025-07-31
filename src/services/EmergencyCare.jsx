import React, { useState } from 'react';
import { FaTooth, FaAmbulance, FaFirstAid, FaBone } from 'react-icons/fa';

const EmergencyCare = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const data = [
    {
      icon: <FaAmbulance className="text-white text-2xl" />,
      title: 'Same-Day Emergency Appointments',
      shortDesc: 'Dental emergencies require prompt attention. Indira Dental Clinic reserves time for emergency patients.',
      fullDesc:
        'Dental emergencies require prompt attention. Indira Dental Clinic reserves time in our daily schedule for emergency patients, allowing Dr. Rockson Samuel to provide same-day care for severe toothaches, broken teeth, knocked-out teeth, lost fillings or crowns, and other urgent dental issues.',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: <FaTooth className="text-white text-2xl" />,
      title: 'Toothache Relief',
      shortDesc: 'Severe toothaches can be debilitating. Dr. Rockson Samuel diagnoses the cause of dental pain.',
      fullDesc:
        'Severe toothaches can be debilitating. Dr. Rockson Samuel diagnoses the cause of dental pain and provides appropriate treatment to alleviate discomfort, whether it’s due to infection, decay, fracture, or other issues. Our priority is to relieve your pain quickly and address the underlying problem to prevent recurrence.',
      color: 'from-red-500 to-red-700'
    },
    {
      icon: <FaFirstAid className="text-white text-2xl" />,
      title: 'Dental Trauma Treatment',
      shortDesc: 'Accidents happen, and dental injuries require immediate attention.',
      fullDesc:
        'Accidents happen, and dental injuries require immediate attention. Dr. Rockson Samuel treats various types of dental trauma, including chipped, cracked, or knocked-out teeth, as well as injuries to the soft tissues of the mouth. Quick action can often save damaged teeth and prevent complications.',
      color: 'from-green-500 to-green-700'
    },
    {
      icon: <FaBone className="text-white text-2xl" />,
      title: 'Bone Grafting',
      shortDesc: 'Restores jaw bone volume lost due to tooth extraction or injury.',
      fullDesc:
        "Bone grafting procedures restore jaw bone volume and density that may have been lost due to tooth extraction, gum disease, or injury. This treatment is often necessary before dental implant placement to ensure there's adequate bone to support the implant. Dr. Rockson Samuel uses advanced techniques and materials to promote successful bone regeneration.",
      color: 'from-purple-500 to-purple-700'
    }
  ];

  const toggleReadMore = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-rose-700 mb-12">Emergency Dental Care</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br ${item.color}`}>
                {item.icon}
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">{item.title}</h2>
            </div>

            <p className="text-gray-700 mb-3">
              {expandedIndex === index ? item.fullDesc : item.shortDesc}
            </p>

            <button
              onClick={() => toggleReadMore(index)}
              className={`inline-block mt-2 text-white font-medium px-5 py-2 rounded-md bg-gradient-to-r ${item.color} hover:brightness-110 transition`}
            >
              {expandedIndex === index ? 'Show less' : 'Read more'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmergencyCare;
