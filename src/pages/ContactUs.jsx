import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaPaperPlane } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-12 bg-white rounded-lg shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-6">Contact Us</h2>
      <p className="text-center text-gray-600 mb-10 text-lg">
        Get in touch with us for appointments, queries, or emergencies
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <FaPhone className="text-blue-600 mt-1" size={24} />
            <div>
              <p className="text-lg font-semibold">Phone</p>
              <p>+91 9876543210</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-blue-600 mt-1" size={24} />
            <div>
              <p className="text-lg font-semibold">Email</p>
              <p>info@velloredental.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-blue-600 mt-1" size={24} />
            <div>
              <p className="text-lg font-semibold">Address</p>
              <p>123 Gandhi Road, Vellore, Tamil Nadu 632001</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaWhatsapp className="text-green-600 mt-1" size={24} />
            <div>
              <p className="text-lg font-semibold">WhatsApp</p>
              <p>+91 9876543210</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaClock className="text-blue-600 mt-1" size={24} />
            <div>
              <p className="text-lg font-semibold">Working Hours</p>
              <p>Mon-Fri: 9:00 AM - 8:00 PM</p>
              <p>Sat: 9:00 AM - 6:00 PM</p>
              <p>Sun: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
          <p className="text-red-600 font-semibold mt-4">
            🚨 Emergency services available 24/7. Call us anytime for dental emergencies.
          </p>
        </div>

        {/* Contact Form */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Send us a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name *"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="email"
              placeholder="Email *"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="text"
              placeholder="Phone *"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <textarea
              placeholder="Message *"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Book an Appointment */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2">Book an Appointment</h3>
        <p className="text-gray-600 mb-4">
          Ready to schedule your dental visit? Book an appointment online or call us directly.
        </p>
        <a
          href="#book-now"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          Book Now
        </a>
      </div>

      {/* Map */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-blue-700 mb-4 text-center">Find Us</h3>
        <iframe
          title="clinic-location"
          src="https://www.google.com/maps?q=123+Gandhi+Road,+Vellore,+Tamil+Nadu+632001&output=embed"
          width="100%"
          height="400"
          className="rounded-lg border shadow-md"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default ContactUs;
