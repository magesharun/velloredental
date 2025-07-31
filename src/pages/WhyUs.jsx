import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom';
import hospitalImg from '../assets/hospital.jpg';

export default function WhyUs() {
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
        {/* Why Us Content */}
        <div className="lg:w-3/4">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Why Us</h2>
          <p className="text-gray-700 mb-4">
            Advanced dentistry is no more handled by a single dentist. Now there is specialization in every dental procedure and so they have their experts. Like endodontist are root canal treatment specialist , implantologist places the plant, orthodontist are braces specialist, oral surgeons are tooth extraction, jaw fracture and other surgical procedure expert, periodontist are gum disease expert, pedodontist takes care of child dental problems, so a proper dentistry is a multispeciality expertise...
          </p>
          <p className="text-gray-700 mb-4">
            Proper diagnosis is key to success of any treatment. Once the diagnosis is done then it is passed to the concerned expert doctor. Dental treatment also need a good laboratory support for best artificial tooth prosthesis. Reasons 2 Smile dental clinic is collaborated with one of Indias best dental laboratory Illusion dental lab, Mumbai...
          </p>
          <p className="text-gray-700 mb-4">
            Our setup is best in India with best doctors, equipments, laboratory. Our soothing ambience with all amenities will make you feel special, calm and relaxed. Also we have zero waiting intervals for our patients...
          </p>
          <p className="text-gray-700 mb-4">
            We are located to prime location of patna with ample parking space and within 1 km reach of railway station and 5 km reach of airport.
          </p>
          <h3 className="text-xl font-bold text-blue-800 mt-6 mb-2">Our Setup</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>State of art multispeciality dental setup</li>
            <li>Team of expert and best post graduated dental doctors</li>
            <li>Spacious 1500 sq ft clinic with relaxing zone</li>
            <li>Kids play area, refreshments, zero waiting intervals</li>
            <li>Proper biomedical waste management, fire safety licensed</li>
            <li>Advanced diagnostic tools, software-based patient record management</li>
          </ul>
        </div>

        {/* Treatments Links */}
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
