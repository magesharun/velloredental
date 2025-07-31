import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { FaStar, FaUserMd } from 'react-icons/fa';

// Replace with your actual image paths or URLs
import mainDoctorImg from '../assets/doc2.jpeg'; // main doctor photo
import doctorPlaceholder from '../assets/doc1.avif'; // placeholder for others

const doctorsData = [
  {
    name: 'Dr. Rajesh Kumar',
    specialization: 'Chief Dental Surgeon',
    experience: '15+ Years',
    image: mainDoctorImg,
    isMain: true,
    bio: 'Known for his expertise in dental implants, smile designing, and painless procedures. Leads the team with precision and compassionate care.',
  },
  { name: 'Dr. Anjali Sharma', specialization: 'Orthodontist', experience: '10 Years', image: doctorPlaceholder },
  { name: 'Dr. Ramesh Iyer', specialization: 'Endodontist', experience: '8 Years', image: doctorPlaceholder },
  { name: 'Dr. Sneha Patel', specialization: 'Pediatric Dentist', experience: '6 Years', image: doctorPlaceholder },
  { name: 'Dr. Karthik Raj', specialization: 'Oral Surgeon', experience: '9 Years', image: doctorPlaceholder },
  { name: 'Dr. Priya Nair', specialization: 'Prosthodontist', experience: '11 Years', image: doctorPlaceholder },
  { name: 'Dr. Manoj Verma', specialization: 'Periodontist', experience: '7 Years', image: doctorPlaceholder },
  { name: 'Dr. Meera Thomas', specialization: 'Cosmetic Dentist', experience: '5 Years', image: doctorPlaceholder },
  { name: 'Dr. Suresh Kumar', specialization: 'Implantologist', experience: '12 Years', image: doctorPlaceholder },
  { name: 'Dr. Neha Gupta', specialization: 'General Dentist', experience: '4 Years', image: doctorPlaceholder },
  { name: 'Dr. Vignesh S', specialization: 'Oral Pathologist', experience: '10 Years', image: doctorPlaceholder },
  { name: 'Dr. Divya Balan', specialization: 'Laser Specialist', experience: '6 Years', image: doctorPlaceholder },
  { name: 'Dr. Ritu Arora', specialization: 'Aesthetic Dentist', experience: '5 Years', image: doctorPlaceholder },
  { name: 'Dr. John Mathew', specialization: 'Oral Medicine Expert', experience: '8 Years', image: doctorPlaceholder },
  { name: 'Dr. Leela Krishnan', specialization: 'Senior Endodontist', experience: '9 Years', image: doctorPlaceholder },
  { name: 'Dr. Kavya Menon', specialization: 'Public Health Dentist', experience: '6 Years', image: doctorPlaceholder },
  { name: 'Dr. Faizal R', specialization: 'Orthodontic Specialist', experience: '7 Years', image: doctorPlaceholder },
  { name: 'Dr. Anita Rao', specialization: 'Senior General Dentist', experience: '13 Years', image: doctorPlaceholder },
  { name: 'Dr. Nirmal Raj', specialization: 'Crown & Bridge Expert', experience: '10 Years', image: doctorPlaceholder },
  { name: 'Dr. Sandhya Devi', specialization: 'Senior Cosmetic Specialist', experience: '11 Years', image: doctorPlaceholder },
];

const Doctors = () => {
  const mainDoctor = doctorsData.find(doc => doc.isMain);
  const otherDoctors = doctorsData.filter(doc => !doc.isMain);

  return (
    <div className="bg-blue-50 min-h-screen px-4 pt-6 pb-24">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-blue-900 mb-10"
      >
        Meet Our Dental Experts
      </motion.h1>

      {/* Main Doctor Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-white rounded-xl p-6 md:flex items-center gap-6 mb-14 shadow-xl hover:shadow-blue-400 cursor-pointer transition-transform transform hover:scale-[1.03]"
      >
        <img
          src={mainDoctor.image}
          alt={mainDoctor.name}
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 mx-auto md:mx-0"
        />
        <div className="text-center md:text-left mt-4 md:mt-0">
          <h2 className="text-2xl font-bold text-blue-900 mb-2 flex items-center gap-2 justify-center md:justify-start">
            <FaUserMd className="text-blue-700" />
            {mainDoctor.name}
          </h2>
          <p className="text-gray-600 mb-2 font-semibold">
            {mainDoctor.specialization} | {mainDoctor.experience}
          </p>
          <p className="text-gray-700 mb-3">{mainDoctor.bio}</p>
          <div className="flex gap-1 justify-center md:justify-start">
            {Array(5)
              .fill()
              .map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
          </div>
        </div>
      </motion.div>

      {/* Other Doctors Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
      >
        {otherDoctors.map((doc, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.07, boxShadow: '0 8px 20px rgba(59, 130, 246, 0.4)' }}
            className="bg-white rounded-xl p-4 shadow-md cursor-pointer transition"
          >
            <img
              src={doc.image}
              alt={doc.name}
              className="w-24 h-24 mx-auto rounded-full object-cover border-2 border-blue-200"
            />
            <div className="text-center mt-3">
              <h3 className="font-semibold text-blue-900 text-sm">{doc.name}</h3>
              <p className="text-xs text-gray-500">{doc.specialization}</p>
              <p className="text-xs text-gray-500">{doc.experience}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Doctors;
