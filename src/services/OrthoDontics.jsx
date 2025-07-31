import React, { useState } from 'react';
import { FaTeeth, FaTooth, FaSmileBeam, FaRegGrin } from 'react-icons/fa';

const treatments = [
  {
    icon: <FaTeeth className="text-blue-600 text-5xl" />,
    title: "Traditional Braces",
    brief:
      "Traditional metal braces remain one of the most effective orthodontic treatments for correcting misaligned teeth and jaw issues.",
    details:
      " Today's braces are smaller, more comfortable, and more efficient than ever before. Dr. Rockson Samuel provides personalized treatment plans to achieve optimal results for patients of all ages.",
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    icon: <FaTooth className="text-purple-600 text-5xl" />,
    title: "Ceramic Braces",
    brief:
      "Ceramic braces function like traditional braces but use clear or tooth-colored brackets that blend with your teeth.",
    details:
      " This popular option provides the effectiveness of metal braces with improved aesthetics, making them ideal for image-conscious teens and adults seeking orthodontic treatment.",
    color: "bg-purple-600 hover:bg-purple-700",
  },
  {
    icon: <FaSmileBeam className="text-teal-600 text-5xl" />,
    title: "Clear Aligners",
    brief:
      "Clear aligners offer a nearly invisible way to straighten teeth without metal brackets or wires.",
    details:
      " These custom-made, removable trays gradually shift teeth into proper alignment while allowing you to eat, brush, and floss normally. Dr. Rockson Samuel provides clear aligner therapy for suitable candidates seeking a discreet orthodontic solution.",
    color: "bg-teal-600 hover:bg-teal-700",
  },
  {
    icon: <FaRegGrin className="text-orange-500 text-5xl" />,
    title: "Retainers",
    brief:
      "Retainers are essential for maintaining the results of orthodontic treatment.",
    details:
      " These custom-made devices prevent teeth from shifting back to their original positions. Dr. Rockson Samuel provides fixed and removable retainers, along with detailed instructions for wear and care to ensure your beautiful smile lasts a lifetime.",
    color: "bg-orange-500 hover:bg-orange-600",
  },
];

const Orthodontics = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 bg-gradient-to-b from-white via-slate-50 to-white rounded-xl shadow-md">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">Orthodontics</h1>

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

export default Orthodontics;
