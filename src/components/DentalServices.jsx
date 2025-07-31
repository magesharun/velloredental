import React from 'react';
import { FaTooth } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  { name: "Root Canal Treatment", path: "/services/root-canal" },
  { name: "Dental Implants", path: "/services/implants" },
  { name: "Crown & Bridges", path: "/services/crown-bridge" },
  { name: "Cosmetic Procedures", path: "/services/cosmetic" },
  { name: "Braces", path: "/services/braces" },
  { name: "Child Dentistry", path: "/services/children" },
  { name: "Surgeries", path: "/services/surgeries" },
  { name: "Other Procedures", path: "/services/others" }
];

const DentalServices = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-blue-700">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md p-6 rounded-2xl shadow-xl bg-white/10 border border-white/20 backdrop-blur-lg"
      >
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
            <FaTooth className="text-3xl" /> Dental Services
          </h2>
          <ul className="space-y-3 text-sm font-medium">
            {services.map((service, index) => (
              <li key={index}>
                <Link
                  to={service.path}
                  className="text-white hover:text-yellow-300 transition duration-300 ease-in-out"
                >
                  🦷 {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default DentalServices;
