// src/pages/Treatments.jsx
import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { FaTooth, FaCheckCircle, FaUserMd } from 'react-icons/fa';
import treatmentBg from '../assets/hospital.jpg'; // use your image path
import doctorImg from '../assets/doc1.avif'; // doctor image

const treatments = [
  'Dental Implants',
  'Root Canal Treatment',
  'Tooth Whitening',
  'Metal & Ceramic Braces',
  'Cosmetic Fillings',
  'Wisdom Tooth Extraction',
  'Full Dentures',
  'Laser Dentistry',
  'Digital Smile Design',
  'Child Dental Care',
];

const Treatments = () => {
  return (
    <div className="pt-6 pb-20 px-4 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-60 rounded-xl overflow-hidden shadow-lg mb-8"
      >
        <img
          src={treatmentBg}
          alt="Treatment banner"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold tracking-wide">Our Dental Treatments</h1>
        </div>
      </motion.div>

      {/* Treatment List */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-800 flex items-center gap-2">
          <FaTooth /> We Offer:
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-base">
          {treatments.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-md hover:bg-blue-50 transition"
            >
              <FaCheckCircle className="text-green-500" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Main Doctor Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="bg-white shadow-xl rounded-xl p-6 md:flex gap-6 items-center"
      >
        <img
          src={doctorImg}
          alt="Main Doctor"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-200 mx-auto md:mx-0"
        />
        <div className="text-center md:text-left mt-4 md:mt-0">
          <h3 className="text-xl font-bold text-blue-900 mb-1 flex items-center gap-2 justify-center md:justify-start">
            <FaUserMd className="text-blue-700" />
            Dr. Rajesh Kumar, MDS
          </h3>
          <p className="text-gray-600 mb-2">Chief Dental Surgeon | 15+ Years Experience</p>
          <p className="text-gray-700">
            "With a passion for painless procedures and a commitment to patient comfort, I ensure every treatment
            is done with precision and care. From implants to cosmetic enhancements, your smile is in expert hands."
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Treatments;
