import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

import image1 from '../assets/clinicaltour/image1.jpg';
import image2 from '../assets/clinicaltour/image2.jpg';
import image3 from '../assets/clinicaltour/image3.jpg';
import image4 from '../assets/clinicaltour/image4.png';
import image5 from '../assets/clinicaltour/image5.avif';
import image6 from '../assets/clinicaltour/image1.jpg';
import image7 from '../assets/clinicaltour/image2.jpg';
import image8 from '../assets/clinicaltour/image3.jpg';
import image9 from '../assets/clinicaltour/image4.png';
import image10 from '../assets/clinicaltour/image5.avif';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  },
};

const imageVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};

const ClinicalTour = () => {
  return (
    <motion.div
      className="max-w-5xl mx-auto p-4 bg-white rounded-lg shadow-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Clinical Tour
      </h2>

      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={4000}
        transitionTime={800}
        swipeable
        emulateTouch
        dynamicHeight={false}
        className="rounded-lg overflow-hidden"
      >
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            whileHover="hover"
            variants={imageVariants}
            className="cursor-pointer"
          >
            <img
              src={src}
              alt={`Hospital view ${idx + 1}`}
              className="object-cover w-full h-64 md:h-96 rounded-lg shadow-md"
            />
          </motion.div>
        ))}
      </Carousel>

      <p className="mt-6 text-gray-600 text-center max-w-xl mx-auto">
        Explore our state-of-the-art hospital facilities, equipped with the latest
        technology and designed to provide you with the utmost comfort and care.
        Our clinical tour showcases the quality and ambiance that sets us apart.
      </p>
    </motion.div>
  );
};

export default ClinicalTour;
