import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { FaUserMd, FaTooth, FaSmileBeam, FaHandsHelping } from 'react-icons/fa';

const features = [
  {
    title: 'Expert Doctors',
    description: '15+ years of combined experience',
    icon: <FaUserMd size={50} className="text-blue-600 mb-4" />,
    link: '/ourteam',
  },
  {
    title: 'Modern Equipment',
    description: 'Latest dental technology & tools',
    icon: <FaTooth size={50} className="text-blue-600 mb-4" />,
    link: '/equipments',
  },
  {
    title: 'Painless Treatments',
    description: 'Advanced pain management',
    icon: <FaSmileBeam size={50} className="text-blue-600 mb-4" />,
    link: '/treatments',
  },
  {
    title: 'Caring Staff',
    description: 'Compassionate dental care',
    icon: <FaHandsHelping size={50} className="text-blue-600 mb-4" />,
    link: '/aboutus',
  },
];

export default function WhyChoose() {
  return (
    <div className="w-full bg-white py-20 px-6">
      <motion.h2
        className="text-4xl font-bold text-center text-blue-800 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Choose Vellore Dental Clinic?
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-white text-center p-6 rounded-xl shadow-md hover:shadow-2xl cursor-pointer transition-all duration-300"
            onClick={() => window.location.href = feature.link}
          >
            <div className="flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-blue-700 mt-2 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
