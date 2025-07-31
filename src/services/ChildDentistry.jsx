import React from 'react';
import { motion } from 'framer-motion';

// Replace with your local image if available:
import childDentistryImg from '../assets/child.jpeg';

// const childDentistryImg = "https://source.unsplash.com/800x600/?child,dentist";

const ChildDentistry = () => {
  return (
    <motion.div
      className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-pink-200 via-yellow-200 to-green-200 rounded-xl shadow-lg text-gray-800"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h1
        className="text-4xl font-extrabold mb-6 text-center text-purple-700"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        🧸 Gentle Child Dentistry Care
      </motion.h1>

      <motion.img
        src={childDentistryImg}
        alt="Child Dentistry"
        className="rounded-xl w-full h-64 object-cover shadow-xl mb-8 mx-auto"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
      />

      <motion.p
        className="text-lg leading-relaxed max-w-3xl mx-auto text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        We specialize in creating a positive dental experience for children. Our kid-friendly team ensures your child feels comfortable, relaxed, and well-cared for during every visit.
      </motion.p>

      <motion.ul
        className="list-disc pl-6 max-w-3xl mx-auto text-base space-y-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <li>Comprehensive dental checkups and cleanings</li>
        <li>Fluoride treatments & sealants for cavity prevention</li>
        <li>Friendly approach to dental education & habits</li>
        <li>Early orthodontic evaluations</li>
        <li>Comfort-focused treatments in a fun environment</li>
      </motion.ul>

      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a
          href="/appointment"
          className="inline-block px-8 py-3 bg-purple-600 text-white rounded-full font-semibold shadow-md hover:bg-purple-700 transition duration-300"
        >
          Book Your Child’s Appointment
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ChildDentistry;
