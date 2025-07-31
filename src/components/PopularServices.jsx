import React, { useState, useEffect } from 'react';
import {
  FaTooth,
  FaSmile,
  FaTeethOpen,
  FaChild,
  FaTeeth,
  FaUserMd,
  FaRegGrinAlt,
  FaStethoscope,
  FaUserInjured,
  FaStar,
  FaArrowRight,
  FaShieldAlt
} from 'react-icons/fa';

const services = [
  {
    name: 'General Dentistry',
    icon: <FaTooth size={32} />,
    link: '/General-dentistry',
    description: 'Comprehensive oral health care for the whole family',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100'
  },
  {
    name: 'Preventive Care',
    icon: <FaTeethOpen size={32} />,
    link: '/Preventive-Care',
    description: 'Proactive treatments to maintain optimal oral health',
    color: 'from-green-500 to-green-600',
    bgColor: 'from-green-50 to-green-100'
  },
  {
    name: 'Restorative Dentistry',
    icon: <FaSmile size={32} />,
    link: '/Restorative-Dentistry',
    description: 'Restore function and beauty to damaged teeth',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100'
  },
  {
    name: 'Cosmetic Dentistry',
    icon: <FaTeeth size={32} />,
    link: '/Cosmetic-Dentistry',
    description: 'Enhance your smile with advanced aesthetic treatments',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'from-pink-50 to-pink-100'
  },
  {
    name: 'Orthodontics',
    icon: <FaTooth size={32} />,
    link: '/Orthodontics',
    description: 'Straighten teeth for a perfect, confident smile',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'from-indigo-50 to-indigo-100'
  },
  {
    name: 'Endodontics',
    icon: <FaRegGrinAlt size={32} />,
    link: '/Endodontics',
    description: 'Root canal therapy to save and restore teeth',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'from-orange-50 to-orange-100'
  },
  {
    name: 'Periodontics',
    icon: <FaTeeth size={32} />,
    link: '/Periodontics',
    description: 'Specialized care for gums and supporting structures',
    color: 'from-teal-500 to-teal-600',
    bgColor: 'from-teal-50 to-teal-100'
  },
  {
    name: 'Oral Surgery',
    icon: <FaUserMd size={32} />,
    link: '/Oral-Surgery',
    description: 'Advanced surgical procedures for complex cases',
    color: 'from-red-500 to-red-600',
    bgColor: 'from-red-50 to-red-100'
  },
  {
    name: 'Pediatric Dentistry',
    icon: <FaChild size={32} />,
    link: '/Pediatric-Dentistry',
    description: 'Gentle, specialized care for children and teens',
    color: 'from-yellow-500 to-yellow-600',
    bgColor: 'from-yellow-50 to-yellow-100'
  },
  {
    name: 'Emergency Care',
    icon: <FaUserInjured size={32} />,
    link: '/Emergency-Care',
    description: '24/7 urgent dental care when you need it most',
    color: 'from-red-600 to-red-700',
    bgColor: 'from-red-50 to-red-100'
  },
];

const ServiceCard = ({ service, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`service-card transform transition-all duration-700 ease-out ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-12 opacity-0 scale-90'
      }`}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        animation: isVisible ? `slideInUp 0.8s ease-out ${index * 0.1}s both` : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.location.href = service.link}
    >
      <div className="card-inner">
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
        
        {/* Floating particles effect */}
        <div className="particles-container">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`particle particle-${i + 1} ${isHovered ? 'animate' : ''}`}
            />
          ))}
        </div>

        {/* Header with icon */}
        <div className="service-header">
          <div className={`icon-container bg-gradient-to-br ${service.color}`}>
            <div className="icon-wrapper">
              {service.icon}
            </div>
            <div className="icon-glow"></div>
          </div>
          
          {/* Quality badge */}
          <div className="quality-badge">
            <FaStar className="star-icon" />
            <span>Premium</span>
          </div>
        </div>

        {/* Content */}
        <div className="service-content">
          <h3 className="service-title">{service.name}</h3>
          <p className="service-description">{service.description}</p>
          
          {/* Features */}
          <div className="features-list">
            <div className="feature-item">
              <FaShieldAlt className="feature-icon" />
              <span>Safe & Reliable</span>
            </div>
            <div className="feature-item">
              <FaStethoscope className="feature-icon" />
              <span>Expert Care</span>
            </div>
          </div>
        </div>

        {/* Action button */}
        <div className="action-section">
          <button className="learn-more-btn">
            <span>Learn More</span>
            <FaArrowRight className={`arrow-icon ${isHovered ? 'moved' : ''}`} />
          </button>
        </div>

        {/* Hover overlay */}
        <div className="hover-overlay"></div>
      </div>

      <style jsx>{`
        .service-card {
          position: relative;
          cursor: pointer;
          height: 100%;
          min-height: 320px;
        }
        
        .card-inner {
          background: white;
          border-radius: 24px;
          padding: 28px;
          height: 100%;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 4px 20px rgba(0, 0, 0, 0.08),
            0 1px 3px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(226, 232, 240, 0.8);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
        }
        
        .service-card:hover .card-inner {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.15),
            0 10px 20px rgba(0, 0, 0, 0.1);
          border-color: rgba(59, 130, 246, 0.3);
        }
        
        .particles-container {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          border-radius: 24px;
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          opacity: 0;
          transition: all 0.6s ease;
        }
        
        .particle-1 { top: 20%; left: 10%; }
        .particle-2 { top: 60%; left: 85%; }
        .particle-3 { top: 80%; left: 20%; }
        .particle-4 { top: 30%; left: 70%; }
        .particle-5 { top: 70%; left: 50%; }
        .particle-6 { top: 40%; left: 30%; }
        
        .particle.animate {
          opacity: 0.6;
          animation: particleFloat 3s ease-in-out infinite;
        }
        
        .service-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        
        .icon-container {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          transition: all 0.4s ease;
        }
        
        .service-card:hover .icon-container {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
        }
        
        .icon-wrapper {
          color: white;
          transition: all 0.3s ease;
          z-index: 2;
          position: relative;
        }
        
        .icon-glow {
          position: absolute;
          inset: -2px;
          background: inherit;
          border-radius: inherit;
          filter: blur(8px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .service-card:hover .icon-glow {
          opacity: 0.7;
        }
        
        .quality-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(251, 191, 36, 0.3);
        }
        
        .star-icon {
          font-size: 10px;
        }
        
        .service-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .service-title {
          font-size: 22px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 12px;
          transition: color 0.3s ease;
        }
        
        .service-card:hover .service-title {
          color: #3b82f6;
        }
        
        .service-description {
          color: #64748b;
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 20px;
          flex: 1;
        }
        
        .features-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }
        
        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #64748b;
        }
        
        .feature-icon {
          color: #10b981;
          font-size: 12px;
        }
        
        .action-section {
          margin-top: auto;
        }
        
        .learn-more-btn {
          width: 100%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }
        
        .learn-more-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
        }
        
        .arrow-icon {
          transition: transform 0.3s ease;
          font-size: 12px;
        }
        
        .arrow-icon.moved {
          transform: translateX(4px);
        }
        
        .hover-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.02), rgba(139, 92, 246, 0.02));
          border-radius: 24px;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        
        .service-card:hover .hover-overlay {
          opacity: 1;
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
};

export default function PopularServices() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="popular-services-section">
      {/* Animated background */}
      <div className="background-animation">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
        <div className="bg-shape bg-shape-3"></div>
      </div>

      <div className="container">
        {/* Header Section */}
        <div className="header-section">
          <div className="header-badge">
            <FaTooth className="badge-icon" />
            <span>Premium Dental Care</span>
          </div>
          
          <h2 className="main-title">
            Our Popular <span className="gradient-text">Services</span>
          </h2>
          
          <p className="subtitle">
            Comprehensive dental solutions tailored to your unique needs, delivered with precision and care by our expert team of professionals.
          </p>
          
          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Specialties</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Happy Patients</div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bottom-cta">
          <div className="cta-content">
            <h3 className="cta-title">Need a Custom Treatment Plan?</h3>
            <p className="cta-description">
              Our specialists will create a personalized treatment plan just for you
            </p>
            <button className="cta-button">
              <span>Schedule Consultation</span>
              <FaArrowRight className="cta-arrow" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .popular-services-section {
          position: relative;
          padding: 100px 20px;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%);
          overflow: hidden;
        }
        
        .background-animation {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        
        .bg-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
          animation: floatShape 8s ease-in-out infinite;
        }
        
        .bg-shape-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          top: -200px;
          left: -200px;
          animation-delay: 0s;
        }
        
        .bg-shape-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(45deg, #10b981, #3b82f6);
          bottom: -150px;
          right: -150px;
          animation-delay: 2s;
        }
        
        .bg-shape-3 {
          width: 200px;
          height: 200px;
          background: linear-gradient(45deg, #f59e0b, #ef4444);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: 4s;
        }
        
        .container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        .header-section {
          text-align: center;
          margin-bottom: 80px;
        }
        
        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: white;
          padding: 12px 24px;
          border-radius: 50px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          margin-bottom: 24px;
          color: #3b82f6;
          font-weight: 600;
          font-size: 14px;
        }
        
        .badge-icon {
          font-size: 16px;
          animation: pulse 2s infinite;
        }
        
        .main-title {
          font-size: clamp(32px, 6vw, 64px);
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 24px;
          line-height: 1.1;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .subtitle {
          font-size: 18px;
          color: #64748b;
          max-width: 700px;
          margin: 0 auto 40px;
          line-height: 1.6;
        }
        
        .stats-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          font-size: 32px;
          font-weight: 800;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 4px;
        }
        
        .stat-label {
          font-size: 14px;
          color: #64748b;
          font-weight: 500;
        }
        
        .stat-divider {
          width: 1px;
          height: 50px;
          background: linear-gradient(to bottom, transparent, #cbd5e1, transparent);
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          margin-bottom: 80px;
        }
        
        .bottom-cta {
          text-align: center;
        }
        
        .cta-content {
          background: white;
          padding: 48px;
          border-radius: 32px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(226, 232, 240, 0.8);
          max-width: 600px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }
        
        .cta-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #10b981, #f59e0b);
          background-size: 400% 100%;
          animation: gradientShift 3s ease-in-out infinite;
        }
        
        .cta-title {
          font-size: 28px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 12px;
        }
        
        .cta-description {
          color: #64748b;
          margin-bottom: 32px;
          font-size: 16px;
        }
        
        .cta-button {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          border: none;
          padding: 16px 32px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 6px 25px rgba(59, 130, 246, 0.3);
        }
        
        .cta-button:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 35px rgba(59, 130, 246, 0.4);
        }
        
        .cta-arrow {
          transition: transform 0.3s ease;
        }
        
        .cta-button:hover .cta-arrow {
          transform: translateX(4px);
        }
        
        @keyframes floatShape {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @media (max-width: 768px) {
          .popular-services-section {
            padding: 80px 16px;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          
          .stats-row {
            gap: 20px;
          }
          
          .stat-divider {
            display: none;
          }
          
          .cta-content {
            padding: 32px 24px;
            margin: 0 16px;
          }
        }
      `}</style>
    </section>
  );
};

