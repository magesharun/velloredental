import React from 'react';
import { FaTooth, FaSmile, FaXRay, FaHeartbeat } from 'react-icons/fa';

const GeneralDentistry = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 bg-gradient-to-b from-white via-slate-50 to-white rounded-xl shadow-md">
      <h1 className="text-4xl font-bold text-center text-teal-700 mb-10">General Dentistry Services</h1>

      {/* Comprehensive Dental Exams */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 flex flex-col md:flex-row gap-6 items-start">
        <div className="text-teal-600 text-5xl">
          <FaTooth />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Comprehensive Dental Exams</h2>
          <p className="text-gray-600 mb-2">
            Our thorough dental examinations include a detailed assessment of your teeth, gums, jaw, and oral tissues. 
            Dr. Rockson Samuel uses advanced diagnostic tools to detect issues early, helping to prevent more serious problems.
          </p>
          <p className="text-gray-600">
            Regular exams are the foundation of good oral health and allow us to create personalized treatment plans.
          </p>
          <button className="mt-4 inline-block px-5 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-200">
            Read more
          </button>
        </div>
      </div>

      {/* Professional Teeth Cleaning */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 flex flex-col md:flex-row gap-6 items-start">
        <div className="text-yellow-500 text-5xl">
          <FaSmile />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Professional Teeth Cleaning</h2>
          <p className="text-gray-600 mb-2">
            Professional dental cleanings remove plaque and tartar buildup that regular brushing and flossing can't reach.
            Our skilled hygienists use specialized instruments to clean all surfaces of your teeth, polish them to remove stains, 
            and provide personalized oral hygiene instructions to help maintain your smile between visits.
          </p>
          <button className="mt-4 inline-block px-5 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-200">
            Read more
          </button>
        </div>
      </div>

      {/* Digital X-Rays */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 flex flex-col md:flex-row gap-6 items-start">
        <div className="text-indigo-500 text-5xl">
          <FaXRay />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Digital X-Rays</h2>
          <p className="text-gray-600 mb-2">
            Our state-of-the-art digital X-ray technology provides detailed images with significantly less radiation than traditional X-rays.
            These images help Dr. Rockson Samuel diagnose issues that aren't visible during a visual examination, such as cavities between teeth, 
            bone loss, impacted teeth, and abnormalities beneath the gum line.
          </p>
          <button className="mt-4 inline-block px-5 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition duration-200">
            Read more
          </button>
        </div>
      </div>

      {/* Oral Cancer Screening */}
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6 items-start">
        <div className="text-rose-500 text-5xl">
          <FaHeartbeat />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Oral Cancer Screening</h2>
          <p className="text-gray-600 mb-2">
            Early detection of oral cancer significantly improves treatment outcomes.
            During your regular check-up, Dr. Rockson Samuel performs a comprehensive oral cancer screening, examining your mouth, throat, face,
            and neck for signs of abnormalities or suspicious lesions that might indicate precancerous or cancerous conditions.
          </p>
          <button className="mt-4 inline-block px-5 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition duration-200">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneralDentistry;
