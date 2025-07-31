import React from 'react';
import { FaTooth, FaSmile, FaChild, FaUserMd, FaTools } from 'react-icons/fa';
import hospitalImage from '../assets/hospital.jpg'; // 📌 Replace with your actual image path

export default function AboutUs() {
  return (
    <section className="bg-blue-50">
      {/* Header Image with Quote */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src={hospitalImage}
          alt="Our Dental Hospital"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h2 className="text-4xl md:text-5xl font-bold drop-shadow-md animate-fade-in-up">
              Your Smile, Our Mission
            </h2>
            <p className="text-lg md:text-xl mt-3 font-light italic animate-fade-in-up delay-200">
              Excellence in Dental Care — From Diagnosis to Recovery
            </p>
          </div>
        </div>
      </div>

      {/* About and Services Section */}
      <div className="py-16 px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* About Content */}
          <div className="md:w-2/3 animate-fade-in-up">
            <h1 className="text-4xl font-bold text-blue-900 mb-6">About Us</h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              <span className="font-semibold text-blue-800">Reasons 2 Smile</span> is a new venture in the field of dentistry to fill the gap that existed in Patna. The dental field was always underscored in this eastern region of India.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              To uplevel and maintain quality while providing all types of dental treatments under one roof, we work as a panel of dental and medical specialists to deliver the best treatment to our patients.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              The rule of any successful treatment is proper diagnosis. With this in mind, our goal is to offer advanced diagnostic tools and the latest treatment modalities.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We are also pioneering esthetic dentistry in this region — so smile with us in a better way.
            </p>
            <p className="text-blue-700 font-medium mt-6">
              Our role as a creative partner in building your smile and confidence is why our patients stay connected and keep coming back for more.
            </p>
          </div>

          {/* Dental Services */}
          <div className="md:w-1/3 bg-white p-6 rounded-xl shadow-lg animate-fade-in-up delay-200">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 border-b pb-2">🦷 Dental Services</h2>
            <ul className="space-y-3 text-blue-900 text-base font-medium">
              <li className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300">
                <FaTooth /> Root Canal Treatment
              </li>
              <li className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300">
                <FaTooth /> Dental Implants
              </li>
              <li className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300">
                <FaTooth /> Crown & Bridges
              </li>
              <li className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300">
                <FaSmile /> Cosmetic Procedures
              </li>
              <li className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300">
                <FaUserMd /> Braces
              </li>
              <li className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300">
                <FaChild /> Child Dentistry
              </li>
              <li className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300">
                <FaTools /> Surgeries
              </li>
              <li className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300">
                <FaTooth /> Other Procedures
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
