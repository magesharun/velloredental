import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import implantImg from '../assets/dental-implant.webp'; // ✅ Add your own image here

const DentalImplant = () => {
  return (
    <motion.div
      className="px-4 py-10 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-blue-700"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Dental Implant Treatment
      </motion.h1>

      <motion.div
        className="grid md:grid-cols-2 gap-8 items-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        <motion.img
          src={implantImg}
          alt="Dental Implant"
          className="rounded-2xl shadow-lg"
          whileHover={{ scale: 1.05 }}
        />

        <motion.div
          className="text-lg text-gray-700"
          variants={{ hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
        >
          <p className="mb-4">
            Dental implants are advanced, permanent solutions for replacing missing teeth. They look, feel, and function just like your natural teeth.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Improves chewing and speaking</li>
            <li>Prevents bone loss</li>
            <li>Enhances facial structure</li>
            <li>Lasts for decades with proper care</li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Procedure Steps</h2>
        <ol className="list-decimal pl-5 text-gray-700 space-y-2 text-lg">
          <li>Initial Consultation & X-ray</li>
          <li>Implant Placement Surgery</li>
          <li>Healing Phase (3–6 months)</li>
          <li>Abutment Placement</li>
          <li>Final Crown or Bridge Attachment</li>
        </ol>
      </motion.div>

      <motion.div
        className="bg-blue-100 p-6 mt-12 rounded-xl shadow-md text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h3 className="text-xl font-bold mb-2 text-blue-800">Ready to Restore Your Smile?</h3>
        <p className="mb-4 text-gray-700">Book your consultation today and take the first step toward a confident, beautiful smile.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-md transition duration-300">
          Book Appointment
        </button>
      </motion.div>
    </motion.div>
  );
};

export default DentalImplant;
