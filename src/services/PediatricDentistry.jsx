import React, { useState } from 'react';
import { FaChild, FaTooth, FaSmile, FaTeethOpen } from 'react-icons/fa';

const treatments = [
  {
    icon: <FaChild className="text-pink-500 text-5xl" />,
    title: "Children's Dental Check-ups",
    brief:
      "Regular dental check-ups are essential for children's oral health.",
    details:
      "Dr. Rockson Samuel creates a positive, comfortable environment for young patients, helping them develop good dental habits early. These visits include gentle cleanings, examinations, fluoride treatments when appropriate, and education on proper brushing and flossing techniques.",
    color: "bg-pink-500 hover:bg-pink-600",
  },
  {
    icon: <FaTooth className="text-yellow-500 text-5xl" />,
    title: "Dental Sealants for Children",
    brief:
      "Dental sealants provide a protective barrier on children's molars.",
    details:
      "Dental sealants prevent food particles and bacteria from settling in deep grooves of molars. This quick, painless procedure is highly effective in preventing childhood cavities and is typically recommended as soon as permanent molars erupt.",
    color: "bg-yellow-500 hover:bg-yellow-600",
  },
  {
    icon: <FaSmile className="text-green-500 text-5xl" />,
    title: "Pediatric Dental Fillings",
    brief:
      "Prompt treatment for cavities in children to prevent further decay.",
    details:
      "Dr. Rockson Samuel uses tooth-colored fillings that blend naturally with children's teeth while effectively restoring their function. Our gentle approach helps make the experience positive and stress-free for young patients.",
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    icon: <FaTeethOpen className="text-indigo-500 text-5xl" />,
    title: "Early Orthodontic Evaluation",
    brief:
      "Recommended by age 7 to catch orthodontic issues early.",
    details:
      "The American Association of Orthodontists recommends children have their first orthodontic evaluation by age 7. These early assessments allow Dr. Rockson Samuel to identify potential issues with jaw growth and emerging teeth before they become serious, potentially reducing the need for extensive treatment later.",
    color: "bg-indigo-500 hover:bg-indigo-600",
  },
];

const PediatricDentistry = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 bg-gradient-to-b from-white via-slate-50 to-white rounded-xl shadow-md">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-10">Pediatric Dentistry</h1>

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
              <p className="text-gray-600 transition-all duration-200 ease-in-out">
                {item.details}
              </p>
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

export default PediatricDentistry;
