import React from 'react';
import { motion } from 'framer-motion';

// If you want to use local image, use:
import cosmeticImg from '../assets/cosmetic.jpeg';


// const cosmeticImg = "https://source.unsplash.com/800x600/?teeth,smile"; // free Unsplash image

const CosmeticProcedures = () => {
  return (
    <motion.div 
      className="max-w-6xl mx-auto px-4 py-10 text-gray-800"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 
        className="text-4xl font-bold mb-6 text-center text-pink-700"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        ✨ Cosmetic Dental Procedures
      </motion.h1>

      <motion.img 
        src={cosmeticImg} 
        alt="Cosmetic Dental Procedure" 
        className="w-full h-[400px] object-cover rounded-xl shadow-xl mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      />

      <motion.p 
        className="text-lg leading-relaxed mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Cosmetic dental procedures are designed to enhance the appearance of your teeth, gums, and smile. 
        From whitening treatments to full smile makeovers, our clinic offers personalized solutions 
        that bring confidence to your smile.
      </motion.p>

      <motion.ul 
        className="list-disc pl-6 space-y-3 text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <li>💎 Teeth Whitening for a radiant smile</li>
        <li>🦷 Veneers to correct shape, size & color</li>
        <li>📏 Tooth reshaping & contouring</li>
        <li>🪞 Smile makeovers tailored to your facial aesthetics</li>
        <li>📸 Digital smile design preview</li>
      </motion.ul>

      <motion.div 
        className="mt-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a 
          href="/appointment" 
          className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-md hover:bg-pink-700 transition"
        >
          Book a Consultation
        </a>
      </motion.div>
    </motion.div>
  );
};

export default CosmeticProcedures;
