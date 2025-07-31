import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { FaAward, FaUserMd, FaHeartbeat, FaFlask } from 'react-icons/fa';
import maindoctor from '../assets/doc1.avif'; // Add your image here

const About = () => {
  return (
    <div className="p-6 md:p-10 bg-white text-gray-800">
      {/* Header Section */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-blue-800">About Vellore Dental Clinic</h1>
        <p className="text-lg mt-2">Committed to excellence in dental care since 2008</p>
      </motion.div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
        {[
          { label: 'Happy Patients', count: '10,000+' },
          { label: 'Years of Service', count: '15+' },
          { label: 'Treatments', count: '25,000+' },
          { label: 'Awards Won', count: '12' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <p className="text-3xl font-bold text-blue-700">{stat.count}</p>
            <p className="mt-2 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-blue-800 mb-3">Our Mission</h2>
          <p className="leading-relaxed">
            To provide comprehensive, compassionate, and cutting-edge dental care that enhances the oral health and overall well-being of our patients while building lasting relationships based on trust and excellence.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-blue-800 mb-3">Our Vision</h2>
          <p className="leading-relaxed">
            To be the leading dental healthcare provider in Vellore, setting the standard for quality, innovation, and patient satisfaction while making advanced dental care accessible to all.
          </p>
        </motion.div>
      </div>

      {/* Doctor Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row gap-6 items-center bg-gradient-to-r from-blue-100 to-white p-6 rounded-xl shadow-xl mb-12"
      >
        <img src={maindoctor} alt="Dr. Rajesh Kumar" className="w-48 h-48 object-cover rounded-full shadow-md" />
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-blue-800">Dr. Rajesh Kumar</h3>
          <p className="text-sm font-medium text-gray-600 mb-2">Founder & Chief Dental Surgeon</p>
          <p>
            With over 15 years of clinical experience, Dr. Rajesh Kumar is known for his gentle approach and deep expertise in cosmetic and restorative dentistry. His vision to provide world-class dental care led to the founding of Vellore Dental Clinic.
          </p>
        </div>
      </motion.div>

      {/* Timeline Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Our Journey</h2>
        <div className="space-y-4">
          {[
            { year: '2008', text: 'Clinic Founded by Dr. Rajesh Kumar' },
            { year: '2012', text: 'Introduced Digital X-rays & CAD Treatment Planning' },
            { year: '2015', text: 'Added Specialists in Ortho, Endo, and Pedo Dentistry' },
            { year: '2018', text: 'Installed 3D Imaging & Laser Tools' },
            { year: '2020', text: 'Implemented Contactless COVID Safety Protocols' },
            { year: '2023', text: 'Launched AI-Powered Diagnosis' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="border-l-4 border-blue-500 pl-4 py-2"
            >
              <p className="font-semibold text-blue-600">{item.year}</p>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Awards Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Awards & Recognition</h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc px-6">
          <li>🏆 Best Dental Clinic in Vellore - 2023</li>
          <li>⭐ Excellence in Patient Care - 2022</li>
          <li>💡 Digital Innovation Award - 2021</li>
          <li>🎖️ Community Service Recognition - 2020</li>
        </ul>
      </div>

      {/* Values Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: <FaHeartbeat />, title: 'Compassion', desc: 'We treat every patient with empathy and care.' },
            { icon: <FaAward />, title: 'Excellence', desc: 'We maintain the highest standards in every treatment.' },
            { icon: <FaFlask />, title: 'Innovation', desc: 'We use the latest tech for the best outcomes.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-md transition"
            >
              <div className="text-3xl text-blue-700 mb-2">{item.icon}</div>
              <h4 className="font-bold text-lg mb-1">{item.title}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
