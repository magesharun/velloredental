import React from 'react';
import { motion } from 'framer-motion';

// Replace with your own image if available:
import surgeriesImg from '../assets/surgery.jpeg';

// const surgeriesImg = "https://source.unsplash.com/800x600/?dental,surgery";

const Surgeries = () => {
  return (
    <motion.div
      className="max-w-5xl mx-auto p-8 bg-white rounded-xl shadow-xl text-gray-900"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h1
        className="text-4xl font-bold mb-6 text-center text-red-700"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        🦷 Expert Dental Surgeries
      </motion.h1>

      <motion.img
        src={surgeriesImg}
        alt="Dental Surgeries"
        className="w-full h-64 object-cover rounded-lg shadow-md mb-8 mx-auto"
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
        Our dental surgery specialists provide safe and effective treatments for complex oral health issues. 
        Whether you need tooth extractions, wisdom teeth removal, or jaw surgery, we ensure comfort and optimal results.
      </motion.p>

      <motion.ul
        className="list-disc pl-6 max-w-3xl mx-auto space-y-3 text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <li>Wisdom teeth extraction with minimal discomfort</li>
        <li>Dental implant surgeries</li>
        <li>Oral and maxillofacial surgeries</li>
        <li>Bone grafting and sinus lifts</li>
        <li>Emergency surgical care</li>
      </motion.ul>

      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a
          href="/appointment"
          className="inline-block px-8 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition duration-300"
        >
          Schedule a Consultation
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Surgeries;
