import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom';

import hospitalImg from '../assets/hospital.jpg';
import doc1 from '../assets/doc1.avif';
import doc2 from '../assets/doc2.jpeg';
import doc3 from '../assets/doc1.avif';
import doc4 from '../assets/doc2.jpeg';

const doctors = [
  {
    name: 'Dr. Rajesh Kumar',
    img: doc1,
    title: 'BDS, MDS (Oral Surgery)',
    rating: 4.9,
    experience: '15 years',
    achievements: ['Gold Medalist', '25+ research papers', 'IDA member', '500+ implants'],
    languages: 'English, Hindi, Tamil',
    availability: 'Mon-Sat, 9 AM - 6 PM',
  },
  {
    name: 'Dr. Priya Sharma',
    img: doc2,
    title: 'BDS, MDS (Orthodontics)',
    rating: 4.8,
    experience: '12 years',
    achievements: ['Invisalign Certified', 'Fellowship in Orthodontics', 'Clear Aligner Expert', '1000+ cases'],
    languages: 'English, Hindi, Telugu',
    availability: 'Tue-Sun, 10 AM - 7 PM',
  },
  {
    name: 'Dr. Arjun Patel',
    img: doc3,
    title: 'BDS, MDS (Endodontics)',
    rating: 4.9,
    experience: '10 years',
    achievements: ['Microscopic Endodontics Expert', 'Pain Management Certified', '2000+ root canals'],
    languages: 'English, Hindi, Gujarati',
    availability: 'Mon-Fri, 8 AM - 5 PM',
  },
  {
    name: 'Dr. Meera Reddy',
    img: doc4,
    title: 'BDS, MDS (Pediatric Dentistry)',
    rating: 4.9,
    experience: '8 years',
    achievements: ['Child Psychology Certified', 'Special Needs Dentistry', 'Pediatric Dentist Award 2023'],
    languages: 'English, Hindi, Tamil, Telugu',
    availability: 'Mon-Sat, 9 AM - 5 PM',
  },
  // Add more doctors as needed
];

export default function Doctors() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Hospital Image */}
      <motion.img
        src={hospitalImg}
        alt="Hospital"
        className="rounded-xl w-full shadow-lg mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Doctor Cards Section */}
        <div className="lg:w-3/4">
          <h2 className="text-3xl font-bold text-blue-800 mb-2">Our Expert Doctors</h2>
          <p className="mb-6 text-gray-700">Meet our team of experienced dental professionals</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {doctors.map((doc, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-4 border hover:shadow-xl transition"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="rounded-lg h-40 w-full object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-blue-700">{doc.name}</h3>
                <p className="text-sm text-gray-500">{doc.title}</p>
                <p className="text-sm mt-1">⭐ {doc.rating} | {doc.experience}</p>
                <ul className="text-sm list-disc list-inside mt-2 text-gray-600">
                  {doc.achievements.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
                <p className="text-sm mt-2">Languages: {doc.languages}</p>
                <p className="text-sm">Available: {doc.availability}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Treatments */}
        <aside className="lg:w-1/4">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-28">
            <h3 className="text-xl font-bold text-blue-700 mb-4">Treatments</h3>
            <div className="space-y-2">
              {[
                'Dental Implants',
                'Root Canal Therapy',
                'Cosmetic Dentistry',
                'Teeth Whitening',
                'Orthodontic Braces',
                'Pediatric Dentistry',
                'Tooth Extraction',
                'Preventive Care',
                'Smile Design',
              ].map((treatment, index) => (
                <Link
                  to="/price-list"
                  key={index}
                  className="block text-blue-600 hover:underline text-sm"
                >
                  {treatment}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
