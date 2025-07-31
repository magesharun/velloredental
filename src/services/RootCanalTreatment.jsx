import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaTooth, FaCheckCircle } from 'react-icons/fa';

const RootCanalTreatment = () => {
  const appointmentRef = useRef(null);

  const handleScrollToAppointment = () => {
    appointmentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <FaTooth className="inline mr-2 text-blue-500" />
        Root Canal Treatment
      </motion.h1>

      <motion.p
        className="text-lg text-gray-700 mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Say goodbye to tooth pain! Our expert dentists perform painless, safe, and efficient root canal procedures to restore your natural smile.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <img
          src="https://img.freepik.com/free-photo/dentist-checking-teeth-up-close_23-2148742234.jpg"
          alt="Root Canal Treatment"
          className="w-full rounded-2xl shadow-lg"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">What is a Root Canal?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-2" />
              A treatment to remove infected pulp from the tooth.
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-2" />
              Helps preserve your natural tooth structure.
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-2" />
              Performed under local anesthesia to ensure comfort.
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-2" />
              Completed typically in 1-2 sittings.
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <button
          onClick={handleScrollToAppointment}
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
        >
          Book Appointment
        </button>
      </motion.div>

      {/* 👇 Scroll Target (Appointment Section) */}
      <div ref={appointmentRef} className="mt-20 p-6 bg-white/30 backdrop-blur-md rounded-xl shadow-xl border border-white/20">
        <h3 className="text-2xl font-bold mb-4 text-blue-700">Book Your Appointment</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="p-3 rounded bg-white/70 backdrop-blur border border-gray-300" placeholder="Full Name" />
          <input className="p-3 rounded bg-white/70 backdrop-blur border border-gray-300" placeholder="Email Address" />
          <input className="p-3 rounded bg-white/70 backdrop-blur border border-gray-300" placeholder="Phone Number" />
          <input className="p-3 rounded bg-white/70 backdrop-blur border border-gray-300" placeholder="Preferred Date" />
          <textarea className="p-3 rounded bg-white/70 backdrop-blur border border-gray-300 md:col-span-2" rows="4" placeholder="Message"></textarea>
          <button className="md:col-span-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default RootCanalTreatment;
