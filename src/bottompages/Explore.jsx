import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { FaMapMarkedAlt, FaStar } from 'react-icons/fa';

import velloreFortImg from '../assets/clinicaltour/velloreimages/vellorefort.jpg';
import goldenTempleImg from '../assets/clinicaltour/velloreimages/vellorefort.jpg';
import amirthiZooImg from '../assets/clinicaltour/velloreimages/zoo.jpg';
import jalakandeswararImg from '../assets/clinicaltour/velloreimages/vellorefort.jpg';
import museumImg from '../assets/clinicaltour/velloreimages/velloremuseum.jpg';
import scienceParkImg from '../assets/clinicaltour/velloreimages/sciencepark.jpeg';
import cupSaucerImg from '../assets/clinicaltour/velloreimages/vellorefort.jpg';
import balamuruganImg from '../assets/clinicaltour/velloreimages/balamurugantemple.jpg';
import observatoryImg from '../assets/clinicaltour/velloreimages/observatory.jpg';

const places = [
  {
    name: 'Vellore Fort',
    rating: 4.5,
    distance: '2.5 km from clinic',
    duration: '2-3 hours',
    highlights: ['Historical Architecture', 'Museum', 'Light & Sound Show', 'Photography'],
    description: 'A magnificent 16th-century fort built by the Vijayanagara Empire, showcasing beautiful Indo-Islamic architecture.',
    mapLink: 'https://www.google.com/maps?q=Vellore+Fort',
    image: velloreFortImg
  },
  {
    name: 'Sripuram Golden Temple',
    rating: 4.8,
    distance: '8 km from clinic',
    duration: '1-2 hours',
    highlights: ['Golden Architecture', 'Spiritual Experience', 'Star-shaped Path', 'Meditation'],
    description: 'A stunning spiritual complex covered entirely in gold foil, dedicated to Goddess Lakshmi.',
    mapLink: 'https://www.google.com/maps?q=Sripuram+Golden+Temple',
    image: goldenTempleImg
  },
  {
    name: 'Amirthi Zoological Park',
    rating: 4.3,
    distance: '25 km from clinic',
    duration: '4-5 hours',
    highlights: ['Wildlife Safari', 'Trekking Trails', 'Waterfalls', 'Picnic Spots'],
    description: 'A beautiful wildlife sanctuary nestled in the hills, perfect for nature lovers and families.',
    mapLink: 'https://www.google.com/maps?q=Amirthi+Zoological+Park',
    image: amirthiZooImg
  },
  {
    name: 'Jalakandeswarar Temple',
    rating: 4.4,
    distance: '2.5 km from clinic',
    duration: '1 hour',
    highlights: ['Ancient Architecture', 'Religious Significance', 'Stone Carvings', 'Peaceful Atmosphere'],
    description: 'An ancient temple within Vellore Fort, known for its beautiful Vijayanagara architecture.',
    mapLink: 'https://www.google.com/maps?q=Jalakandeswarar+Temple',
    image: jalakandeswararImg
  },
  {
    name: 'Government Museum',
    rating: 4.2,
    distance: '2.5 km from clinic',
    duration: '1-2 hours',
    highlights: ['Historical Artifacts', 'Sculptures', 'Educational', 'Cultural Heritage'],
    description: 'A fascinating museum inside Vellore Fort showcasing artifacts, sculptures, and historical items.',
    mapLink: 'https://www.google.com/maps?q=Government+Museum+Vellore',
    image: museumImg
  },
  {
    name: 'Science Park',
    rating: 4.0,
    distance: '5 km from clinic',
    duration: '2-3 hours',
    highlights: ['Interactive Exhibits', 'Planetarium', 'Kids Activities', 'Educational Fun'],
    description: 'An interactive science park perfect for families with children, featuring educational exhibits.',
    mapLink: 'https://www.google.com/maps?q=Science+Park+Vellore',
    image: scienceParkImg
  },
  {
    name: 'Cup & Saucer Waterfalls',
    rating: 4.1,
    distance: '35 km from clinic',
    duration: '2-3 hours',
    highlights: ['Waterfall', 'Nature Trails', 'Photography'],
    description: 'A serene spot ideal for short treks and nature photography.',
    mapLink: 'https://www.google.com/maps?q=Cup+and+Saucer+Waterfalls',
    image: cupSaucerImg
  },
  {
    name: 'Arulmigu Balamurugan Temple',
    rating: 4.7,
    distance: '15 km from clinic',
    duration: '1 hour',
    highlights: ['Hill Temple', 'Spiritual Vibes', 'Peaceful Views'],
    description: 'A well-known Murugan temple located atop a hill offering spiritual peace and scenic views.',
    mapLink: 'https://www.google.com/maps?q=Arulmigu+Balamurugan+Temple',
    image: balamuruganImg
  },
  {
    name: 'Vainu Bappu Observatory',
    rating: 4.5,
    distance: '45 km from clinic',
    duration: '2-3 hours',
    highlights: ['Astronomy', 'Stargazing', 'Telescope Tours'],
    description: 'A leading astronomical observatory in India known for stargazing and cosmic studies.',
    mapLink: 'https://www.google.com/maps?q=Vainu+Bappu+Observatory',
    image: observatoryImg
  }
];

const Explore = () => {
  return (
    <div className="bg-blue-50 min-h-screen px-4 pt-6 pb-24">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-blue-900 mb-8"
      >
        Explore Vellore
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center text-gray-700 mb-10 max-w-xl mx-auto"
      >
        Discover amazing places while you're in town for your dental appointment. Our city has rich history, beautiful temples, and family-friendly destinations.
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl shadow-md p-5 hover:shadow-blue-200 transition"
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold text-blue-800 mb-1 flex items-center gap-2">
              <FaMapMarkedAlt className="text-blue-600" /> {place.name}
            </h2>
            <div className="flex items-center text-yellow-500 mb-2">
              {Array(Math.floor(place.rating))
                .fill()
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
              <span className="ml-2 text-gray-600 text-sm">{place.rating}</span>
            </div>
            <p className="text-sm text-gray-700 mb-2">{place.description}</p>
            <p className="text-xs text-gray-500">Distance: {place.distance}</p>
            <p className="text-xs text-gray-500">Ideal Duration: {place.duration}</p>
            <ul className="text-xs text-blue-600 mt-2 list-disc pl-4">
              {place.highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <a
              href={place.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
            >
              Get Directions
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
