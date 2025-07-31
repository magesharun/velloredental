import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // eslint-disable-line no-unused-vars

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Price List', path: '/price-list', external: true },
  { label: 'Our Team', path: '/ourteam' },
  { label: 'Why Us', path: '/whyus' },
  { label: 'Clinical Tour', path: '/clinicaltour' },
  { label: 'Contact Us', path: '/contactus' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false); // close mobile menu on route change
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`fixed w-full z-50 transition-shadow ${
        scrolling ? 'shadow-md bg-white' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-700 tracking-wide">
            INDIRA DENTAL CLINIC
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <motion.div key={link.label} whileHover={{ scale: 1.05 }}>
                <Link
                  to={link.path}
                  className={`text-gray-700 hover:text-blue-600 font-medium relative group transition`}
                >
                  {link.label}
                  <span className="block h-[2px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-blue-500"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-blue-600 text-2xl">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white px-6 pt-2 pb-4 space-y-3"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="block text-gray-700 hover:text-blue-600 font-medium transition duration-300"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
