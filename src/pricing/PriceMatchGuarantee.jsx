import React from 'react';
import { motion } from 'framer-motion';

const listVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 100
    }
  }),
};

const PriceMatchGuarantee = () => {
  const bulletPoints = [
    "The competing offer must be from a licensed dental clinic in Vellore",
    "Treatment specifications must be identical (materials, technique, warranty)",
    "Written quote from the competitor must be provided",
    "Price match request must be made before treatment begins",
  ];

  return (
    <motion.div 
      className="md:w-3/4 mx-auto bg-gradient-to-br from-white to-slate-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3 
        className="text-3xl font-extrabold text-center text-primary mb-4"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        🎯 Our Price Match Guarantee
      </motion.h3>

      <motion.p 
        className="text-center text-gray-700 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Found a lower price for the same quality dental treatment in Vellore? We'll match it! <br />
        <span className="font-medium text-black">Dr. Rockson Samuel</span> is committed to providing exceptional dental care at competitive prices.
      </motion.p>

      <div className="bg-white p-6 rounded-xl border border-slate-200">
        <p className="text-base font-medium text-gray-800 mb-3">To qualify for our price match:</p>
        <ul className="list-disc pl-5 space-y-2">
          {bulletPoints.map((point, index) => (
            <motion.li
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={listVariants}
              className="text-gray-700"
            >
              {point}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default PriceMatchGuarantee;
