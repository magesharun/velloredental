import React from 'react';
import { motion } from 'framer-motion';

// Replace with your local image if you have one:
 import bracesImg from '../assets/braces.jpeg';

// const bracesImg = "https://source.unsplash.com/800x600/?braces,smile";

const Braces = () => {
  return (
    <motion.div
      className="max-w-5xl mx-auto p-6 text-gray-800"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <motion.h1
        className="text-4xl font-bold mb-6 text-center text-green-700"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        😁 Orthodontic Braces Treatment
      </motion.h1>

      <motion.img
        src={bracesImg}
        alt="Orthodontic Braces"
        className="rounded-xl w-full h-64 object-cover shadow-lg mb-8 mx-auto"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
      />

      <motion.p
        className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Braces are dental devices used to correct crowded or crooked teeth, improving bite and enhancing your smile. 
        Our orthodontic solutions combine traditional and modern techniques for effective, comfortable treatment.
      </motion.p>

      <motion.ul
        className="list-disc pl-6 max-w-3xl mx-auto text-base space-y-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <li>Traditional metal braces</li>
        <li>Ceramic braces for a discreet look</li>
        <li>Clear aligners (Invisalign)</li>
        <li>Customized treatment plans</li>
        <li>Improved oral health and confidence</li>
      </motion.ul>

      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a
          href="/appointment"
          className="inline-block px-8 py-3 bg-green-600 text-white rounded-full font-semibold shadow-lg hover:bg-green-700 transition duration-300"
        >
          Schedule Your Consultation
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Braces;
