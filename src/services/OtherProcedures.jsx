import React from 'react';
import { motion } from 'framer-motion';

import otherProceduresImg from '../assets/hospital.jpg';

// Replace with your own image or local asset
// const otherProceduresImg = "https://source.unsplash.com/800x600/?dental,clinic";

const OtherProcedures = () => {
  return (
    <motion.div
      className="max-w-5xl mx-auto p-8 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-2xl shadow-2xl text-gray-900"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h1
        className="text-4xl font-extrabold mb-6 text-center text-indigo-700"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        🦷 Other Dental Procedures
      </motion.h1>

      <motion.img
        src={otherProceduresImg}
        alt="Other Dental Procedures"
        className="w-full h-64 object-cover rounded-xl shadow-lg mb-8 mx-auto"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
      />

      <motion.p
        className="text-lg max-w-3xl mx-auto text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        We provide a range of additional dental treatments designed to maintain and improve your oral health beyond traditional procedures. 
        From periodontal therapy to oral cancer screenings, our experienced team is here for your comprehensive care.
      </motion.p>

      <motion.ul
        className="list-disc pl-6 max-w-3xl mx-auto space-y-3 text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <li>Periodontal (gum) therapy and maintenance</li>
        <li>Oral cancer screenings</li>
        <li>TMJ disorder evaluation and treatment</li>
        <li>Night guards and mouth guards</li>
        <li>Emergency dental care</li>
      </motion.ul>

      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a
          href="/appointment"
          className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition duration-300"
        >
          Book a Consultation
        </a>
      </motion.div>
    </motion.div>
  );
};

export default OtherProcedures;
