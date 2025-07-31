import React, { useState } from 'react';
import { 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaChevronDown, FaChevronUp,
  FaTooth, FaUserMd, FaAward, FaShieldAlt
} from 'react-icons/fa';

const Accordion = ({ title, items, index, openIndex, setOpenIndex }) => {
  const isOpen = index === openIndex;
  
  return (
    <div className="mb-4 overflow-hidden">
      <button
        className="w-full flex justify-between items-center text-white text-lg font-semibold bg-gradient-to-r from-blue-800 to-blue-700 px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 group"
        onClick={() => setOpenIndex(isOpen ? null : index)}
      >
        <span className="flex items-center gap-3">
          <FaTooth className="text-blue-200 group-hover:text-white transition-colors duration-300" />
          {title}
        </span>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <FaChevronDown className="text-blue-200 group-hover:text-white" />
        </div>
      </button>
      
      <div className={`transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-gradient-to-r from-blue-700 to-blue-600 px-6 py-4 rounded-b-xl shadow-inner">
          {items.map((item, i) => (
            <div 
              key={i} 
              className={`transform transition-all duration-300 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-4 p-4 bg-blue-600/30 rounded-lg backdrop-blur-sm border border-blue-500/20 hover:bg-blue-500/30 transition-colors duration-300">
                <p className="font-semibold text-blue-100 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></span>
                  Q: {item.question}
                </p>
                <p className="pl-6 text-blue-50 leading-relaxed">A: {item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LocationCard = ({ location, index }) => (
  <div 
    className="bg-gradient-to-br from-blue-800 to-blue-700 rounded-xl p-6 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 group cursor-pointer border border-blue-600/30"
    style={{ 
      animationDelay: `${index * 150}ms`,
      animation: 'slideInUp 0.8s ease-out forwards'
    }}
  >
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
      <FaMapMarkerAlt className="text-blue-300 text-2xl mb-3 group-hover:text-blue-200 transition-colors duration-300" />
      <h3 className="font-bold text-lg mb-2 text-white group-hover:text-blue-100 transition-colors duration-300">
        {location}
      </h3>
      <p className="text-blue-200 text-sm mb-3">Vellore, Tamil Nadu</p>
      <div className="flex items-center justify-between">
        <a href="#" className="text-blue-300 text-sm hover:text-blue-200 transition-colors duration-300 flex items-center gap-1 group-hover:gap-2">
          View Details 
          <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
      </div>
    </div>
  </div>
);

const ServiceItem = ({ service, icon }) => (
  <li className="flex items-center gap-3 py-2 hover:bg-blue-700/30 rounded-lg px-3 transition-all duration-300 cursor-pointer group">
    <span className="text-blue-300 group-hover:text-blue-200 transition-colors duration-300 group-hover:scale-110 transform">
      {icon}
    </span>
    <span className="group-hover:translate-x-1 transition-transform duration-300">{service}</span>
  </li>
);

const ContactItem = ({ icon, children, href }) => (
  <div className="flex items-start gap-3 py-2 hover:bg-blue-800/30 rounded-lg px-3 transition-all duration-300 cursor-pointer group">
    <span className="text-blue-300 mt-1 group-hover:text-blue-200 transition-colors duration-300 group-hover:scale-110 transform">
      {icon}
    </span>
    <div className="group-hover:translate-x-1 transition-transform duration-300">
      {href ? <a href={href} className="hover:underline">{children}</a> : children}
    </div>
  </div>
);

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Add CSS keyframes for animations
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const accordions = [
    {
      title: "General Dental FAQs",
      items: [
        {
          question: "How often should I visit the dentist?",
          answer: "Most professionals recommend a checkup every six months, depending on oral health."
        },
        {
          question: "What should I do in case of a dental emergency?",
          answer: "Contact Indira Dental Clinic immediately at 7010650063 for prompt care."
        },
        {
          question: "How long does a dental implant procedure take?",
          answer: "Several months, including consultation, surgery, healing, and final restoration."
        }
      ]
    },
    {
      title: "Treatment Experience FAQs",
      items: [
        {
          question: "Is root canal treatment painful?",
          answer: "Modern root canal treatments are usually painless with anesthesia and technology."
        },
        {
          question: "How can I improve my smile?",
          answer: "Options include whitening, veneers, bonding, and orthodontics. Consult Dr. Rockson Samuel for a tailored plan."
        }
      ]
    },
    {
      title: "Dental Services & Specialties",
      items: [
        {
          question: "What services does Indira Dental Clinic offer?",
          answer: "We offer general, cosmetic, restorative, and emergency dental care using modern technology."
        },
        {
          question: "Who is the specialist at Indira Dental Clinic?",
          answer: "Dr. Rockson Samuel, a trusted expert in implants, cosmetic, and emergency dental care."
        },
        {
          question: "Why choose a clinic in Vellore?",
          answer: "Vellore offers affordable and high-quality dental care with advanced facilities and expert doctors."
        }
      ]
    }
  ];

  const locations = [
    "Vellore Main Clinic",
    "Katpadi Branch", 
    "Gandhi Nagar Branch",
    "Sathuvachari Branch",
    "Bagayam Branch",
    "Ranipet Branch"
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white px-6 py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-300 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-500 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-16 relative z-10">
        {/* Clinic Info */}
        <div className="transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-700 rounded-full shadow-lg">
              <FaTooth className="text-2xl text-blue-200 animate-pulse" />
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                Indira Dental Clinic
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <FaAward className="text-blue-300 text-sm" />
                <span className="text-blue-300 text-sm">Premium Care Since 2010</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <ContactItem icon={<FaMapMarkerAlt />}>
              3rd Floor, 54, Katpadi Main Rd,<br />Gandhi Nagar, Vellore, TN 632006
            </ContactItem>
            <ContactItem icon={<FaPhoneAlt />} href="tel:7010650063">
              7010650063
            </ContactItem>
            <ContactItem icon={<FaEnvelope />} href="mailto:rockson68@hotmail.com">
              rockson68@hotmail.com
            </ContactItem>
            <ContactItem icon={<FaClock />}>
              Mon-Sat: 10am-8pm | Sun: 10am-1:30pm
            </ContactItem>
          </div>
        </div>

        {/* Quick Links */}
        <div className="transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FaShieldAlt className="text-blue-300" />
            Quick Links
          </h2>
          <ul className="space-y-3">
            {['Home', 'About Us', 'Services', 'Dental Tourism', 'Locations', 'Contact', 'FAQs'].map((item, i) => (
              <li key={i} className="transform hover:translate-x-2 transition-transform duration-300">
                <a href="#" className="hover:text-blue-300 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 group-hover:h-2 transition-all duration-300"></span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Vellore Locations */}
        <div className="transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-300" />
            Vellore Locations
          </h2>
          <ul className="space-y-3 text-sm">
            <li className="hover:bg-blue-700/30 p-2 rounded-lg transition-all duration-300 cursor-pointer">
              <span className="font-semibold text-blue-200">Vellore Main Clinic</span> – Dental tourism hub
            </li>
            <li className="hover:bg-blue-700/30 p-2 rounded-lg transition-all duration-300 cursor-pointer">
              <span className="font-semibold text-blue-200">Katpadi</span> – Implants & RCT
            </li>
            <li className="hover:bg-blue-700/30 p-2 rounded-lg transition-all duration-300 cursor-pointer">
              <span className="font-semibold text-blue-200">Gandhi Nagar</span> – Cosmetic care
            </li>
            <li className="hover:bg-blue-700/30 p-2 rounded-lg transition-all duration-300 cursor-pointer">
              <span className="font-semibold text-blue-200">Sathuvachari</span> – Pediatrics & Braces
            </li>
            <li className="hover:bg-blue-700/30 p-2 rounded-lg transition-all duration-300 cursor-pointer">
              <span className="font-semibold text-blue-200">Bagayam</span> – Surgical care
            </li>
            <li className="hover:bg-blue-700/30 p-2 rounded-lg transition-all duration-300 cursor-pointer">
              <span className="font-semibold text-blue-200">Ranipet</span> – Emergency care
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FaUserMd className="text-blue-300" />
            Our Services
          </h2>
          <ul className="space-y-2">
            <ServiceItem service="General Dental Care" icon="🦷" />
            <ServiceItem service="Cosmetic Dentistry" icon="✨" />
            <ServiceItem service="Restorative Treatments" icon="🔧" />
            <ServiceItem service="Dental Implants" icon="🦷" />
            <ServiceItem service="Root Canal" icon="🩺" />
            <ServiceItem service="Smile Makeovers" icon="😊" />
          </ul>
        </div>
      </div>

      {/* ACCORDIONS */}
      <div className="max-w-4xl mx-auto mb-16 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        {accordions.map((section, i) => (
          <Accordion
            key={i}
            index={i}
            title={section.title}
            items={section.items}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
          />
        ))}
      </div>

      {/* OUR LOCATIONS GRID */}
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent">
          Our Locations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-blue-100">
          {locations.map((loc, i) => (
            <LocationCard key={i} location={loc} index={i} />
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="#" className="inline-flex items-center gap-2 text-blue-200 hover:text-blue-100 transition-colors duration-300 text-lg font-medium bg-blue-700/30 px-6 py-3 rounded-full hover:bg-blue-600/30 transform hover:scale-105">
            View All Locations 
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-16 border-t border-blue-700/50 pt-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-200 mb-4 text-lg">© 2025 Indira Dental Clinic. Crafted with care in Vellore, India.</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-blue-300 hover:text-blue-200 transition-colors duration-300 hover:underline">Privacy Policy</a>
            <span className="text-blue-500">|</span>
            <a href="#" className="text-blue-300 hover:text-blue-200 transition-colors duration-300 hover:underline">Terms of Service</a>
            <span className="text-blue-500">|</span>
            <a href="#" className="text-blue-300 hover:text-blue-200 transition-colors duration-300 hover:underline">Cookie Policy</a>
          </div>
          <div className="mt-4 flex justify-center items-center gap-2 text-blue-300">
            <FaShieldAlt className="animate-pulse" />
            <span className="text-sm">Trusted Healthcare Provider</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;