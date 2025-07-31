import React from 'react';
import { motion } from 'framer-motion';
import crownImg from '../assets/crownandbridge.webp'; // Place your crown image in /assets folder

const CrownAndBridges = () => {
  return (
    <motion.div 
      className="max-w-5xl mx-auto p-6 text-gray-800"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
    >
      <motion.h1 
        className="text-4xl font-bold mb-4 text-blue-800"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        🦷 Crown & Bridge Treatment
      </motion.h1>

      <motion.img 
        src={crownImg} 
        alt="Dental Crown and Bridges" 
        className="rounded-xl w-full h-64 object-cover shadow-lg mb-6"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
      />

      <motion.p 
        className="text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Crown and bridge treatments are used to restore damaged, broken, or missing teeth. 
        A crown acts as a cap to cover a damaged tooth, while a bridge is used to fill the 
        gap created by one or more missing teeth. These treatments improve chewing function, 
        smile aesthetics, and overall oral health.
      </motion.p>

      <motion.ul 
        className="mt-6 list-disc pl-6 text-base space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <li>Restores natural shape and size of teeth</li>
        <li>Improves speech and eating ability</li>
        <li>Prevents shifting of remaining teeth</li>
        <li>Custom-made to match your smile</li>
      </motion.ul>
    </motion.div>
  );
};

export default CrownAndBridges;
