import React from 'react';
import { FaShieldAlt, FaTint, FaRegGrinStars, FaAppleAlt } from 'react-icons/fa';

const PreventiveDentistry = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 bg-gradient-to-b from-white via-slate-50 to-white rounded-xl shadow-md">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-10">Preventive Dentistry</h1>

      {/* Dental Sealants */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 flex flex-col md:flex-row gap-6 items-start">
        <div className="text-green-600 text-5xl">
          <FaShieldAlt />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Dental Sealants</h2>
          <p className="text-gray-600 mb-2">
            Dental sealants are thin, protective coatings applied to the chewing surfaces of back teeth (molars and premolars) to prevent decay. 
            They effectively seal the deep grooves where food particles and bacteria can hide, reducing cavity risk by up to 80%.
          </p>
          <p className="text-gray-600">
            This quick, painless procedure is especially beneficial for children and teenagers.
          </p>
          <button className="mt-4 inline-block px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200">
            Read more
          </button>
        </div>
      </div>

      {/* Fluoride Treatments */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 flex flex-col md:flex-row gap-6 items-start">
        <div className="text-blue-500 text-5xl">
          <FaTint />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Fluoride Treatments</h2>
          <p className="text-gray-600 mb-2">
            Professional fluoride treatments strengthen tooth enamel and help prevent decay. The concentrated fluoride solution is applied to the teeth 
            for several minutes, providing significantly more protection than what's available in toothpaste or tap water.
          </p>
          <p className="text-gray-600">
            Dr. Rockson Samuel may recommend fluoride treatments for patients at higher risk for cavities.
          </p>
          <button className="mt-4 inline-block px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
            Read more
          </button>
        </div>
      </div>

      {/* Custom Mouthguards */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 flex flex-col md:flex-row gap-6 items-start">
        <div className="text-purple-500 text-5xl">
          <FaRegGrinStars />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Custom Mouthguards</h2>
          <p className="text-gray-600 mb-2">
            We create custom-fitted mouthguards to protect your teeth during sports activities and to prevent damage from teeth grinding (bruxism) during sleep.
            Unlike over-the-counter options, our custom mouthguards provide superior protection, comfort, and durability.
          </p>
          <p className="text-gray-600">
            They ensure optimal protection for your smile.
          </p>
          <button className="mt-4 inline-block px-5 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-200">
            Read more
          </button>
        </div>
      </div>

      {/* Nutritional Counseling */}
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6 items-start">
        <div className="text-orange-500 text-5xl">
          <FaAppleAlt />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Nutritional Counseling</h2>
          <p className="text-gray-600 mb-2">
            Your diet significantly impacts your oral health. Dr. Rockson Samuel provides personalized nutritional guidance to help you make informed 
            choices that support healthy teeth and gums.
          </p>
          <p className="text-gray-600">
            We'll discuss how different foods and beverages affect your oral health and recommend dietary adjustments to prevent decay and other dental issues.
          </p>
          <button className="mt-4 inline-block px-5 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-200">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreventiveDentistry;
