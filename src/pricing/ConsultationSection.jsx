import React from 'react';
import { motion } from 'framer-motion';

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: '0px 8px 20px rgba(0, 128, 128, 0.3)',
    transition: { type: 'spring', stiffness: 300 },
  },
};

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ConsultationSection = () => {
  return (
    <motion.section
      className="py-16 bg-dental-navy/5 rounded-3xl mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold gradient-text mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🦷 Visit Us for a Free Consultation
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Want to discuss your treatment options and get a personalized quote? Schedule a free consultation at our clinic in Vellore.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Find Clinic Button */}
          <motion.a
            href="https://www.google.co.in/maps/place/Indira+Dental+Clinic+%7C+Dr+Rockson+Samuel+%7C+Top+Dentist+in+Vellore+for+RCT,+Braces,+Implants,+%26+Dental+Fillings/@12.9540278,79.1369615,17z/data=!3m1!4b1!4m6!3m5!1s0x3bad394e9843620f:0xc7a4b2fb0991e086!8m2!3d12.9540278!4d79.1369615!16s%2Fg%2F11vq058sc7?entry=ttu"
            className="bg-white text-dental-navy border border-dental-teal px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-dental-teal/10 transition-all"
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            whileHover="hover"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin h-5 w-5"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Find Our Clinic
          </motion.a>

          {/* Book Appointment Button */}
          <motion.button
            className="bg-gradient-to-r from-dental-teal to-dental-navy text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:shadow-lg transition-all"
            onClick={() => alert('Booking feature coming soon!')}
            variants={buttonVariants}
            whileHover="hover"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-calendar h-5 w-5"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
            </svg>
            Book Appointment
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default ConsultationSection;
