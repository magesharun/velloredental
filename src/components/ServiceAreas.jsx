import React, { useState, useEffect } from 'react';
import { 
  FaMapMarkerAlt, 
  FaRoute, 
  FaCar, 
  FaClock, 
  FaChevronDown, 
  FaChevronUp,
  FaTooth,
  FaCheckCircle
} from 'react-icons/fa';

const AreaCard = ({ name, distance, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`area-card transform transition-all duration-700 ease-out ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-8 opacity-0 scale-95'
      }`}
      style={{ 
        transitionDelay: `${index * 100}ms`,
        animation: isVisible ? `slideInUp 0.8s ease-out ${index * 0.1}s both` : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-content">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Location icon */}
        <div className="icon-container">
          <div className={`icon-wrapper ${isHovered ? 'hovered' : ''}`}>
            <FaMapMarkerAlt className="location-icon" />
          </div>
          <div className="pulse-ring"></div>
        </div>
        
        {/* Content */}
        <div className="area-info">
          <h3 className="area-name">{name}</h3>
          <div className="distance-info">
            <FaRoute className="route-icon" />
            <span className="distance">{distance}</span>
          </div>
          
          {/* Additional info on hover */}
          <div className={`additional-info ${isHovered ? 'visible' : ''}`}>
            <div className="info-item">
              <FaCar className="info-icon" />
              <span>Easy Access</span>
            </div>
            <div className="info-item">
              <FaClock className="info-icon" />
              <span>Quick Reach</span>
            </div>
          </div>
        </div>
        
        {/* Status indicator */}
        <div className="status-indicator">
          <FaCheckCircle className="status-icon" />
        </div>
      </div>
      
      <style jsx>{`
        .area-card {
          background: linear-gradient(145deg, #ffffff, #f8fafc);
          border-radius: 24px;
          padding: 24px;
          box-shadow: 
            0 4px 20px rgba(0, 0, 0, 0.08),
            0 1px 3px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(226, 232, 240, 0.5);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .area-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 
            0 20px 40px rgba(59, 130, 246, 0.15),
            0 8px 16px rgba(0, 0, 0, 0.1);
          border-color: rgba(59, 130, 246, 0.3);
        }
        
        .card-content {
          position: relative;
          z-index: 2;
        }
        
        .icon-container {
          position: relative;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          margin: 0 auto 20px;
        }
        
        .icon-wrapper {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
          box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);
          position: relative;
          z-index: 3;
        }
        
        .icon-wrapper.hovered {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 6px 24px rgba(59, 130, 246, 0.4);
        }
        
        .location-icon {
          color: white;
          font-size: 20px;
          transition: all 0.3s ease;
        }
        
        .pulse-ring {
          position: absolute;
          width: 60px;
          height: 60px;
          border: 2px solid rgba(59, 130, 246, 0.3);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        
        .area-info {
          text-align: center;
        }
        
        .area-name {
          font-size: 18px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 12px;
          transition: color 0.3s ease;
        }
        
        .area-card:hover .area-name {
          color: #3b82f6;
        }
        
        .distance-info {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: rgba(59, 130, 246, 0.1);
          padding: 8px 16px;
          border-radius: 20px;
          margin-bottom: 16px;
          transition: all 0.3s ease;
        }
        
        .area-card:hover .distance-info {
          background: rgba(59, 130, 246, 0.15);
          transform: scale(1.05);
        }
        
        .route-icon {
          color: #3b82f6;
          font-size: 14px;
        }
        
        .distance {
          color: #3b82f6;
          font-weight: 600;
          font-size: 14px;
        }
        
        .additional-info {
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
          display: flex;
          gap: 16px;
          justify-content: center;
        }
        
        .additional-info.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .info-item {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          color: #64748b;
        }
        
        .info-icon {
          color: #10b981;
          font-size: 12px;
        }
        
        .status-indicator {
          position: absolute;
          top: 16px;
          right: 16px;
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        .area-card:hover .status-indicator {
          opacity: 1;
        }
        
        .status-icon {
          color: #10b981;
          font-size: 16px;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
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
      `}</style>
    </div>
  );
};

const ServiceAreas = () => {
  const [showAll, setShowAll] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const allAreas = [
    { name: 'Gandhi Nagar', distance: '0.5 km' },
    { name: 'Suthanthira Ponvizha Nagar', distance: '0.2 km' },
    { name: 'Katpadi', distance: '3 km' },
    { name: 'Bagayam', distance: '5 km' },
    { name: 'Thorapadi', distance: '7 km' },
    { name: 'Sathuvachari', distance: '8 km' },
    { name: 'Rangapuram', distance: '6 km' },
    { name: 'Kosapet', distance: '4 km' },
    { name: 'Vellore Fort Area', distance: '2 km' },
    { name: 'Shenbakkam', distance: '9 km' },
    { name: 'Viruthampet', distance: '10 km' },
    { name: 'Kongara Palayam', distance: '11 km' },
  ];

  const visibleAreas = showAll ? allAreas : allAreas.slice(0, 8);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleAreas = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="service-areas">
      {/* Background Elements */}
      <div className="background-elements">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>

      {/* Header */}
      <div className="header-section">
        <div className="title-container">
          <FaTooth className="title-icon" />
          <h2 className="main-title">Areas We Serve in Vellore</h2>
        </div>
        <p className="subtitle">
          Providing quality dental care to patients throughout Vellore and surrounding areas with convenient access from every corner of the city.
        </p>
        
        {/* Stats */}
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">12+</div>
            <div className="stat-label">Service Areas</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">0.2km</div>
            <div className="stat-label">Closest Distance</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Emergency Care</div>
          </div>
        </div>
      </div>

      {/* Areas Grid */}
      <div className="areas-grid">
        {visibleAreas.map((area, idx) => (
          <AreaCard 
            key={idx} 
            name={area.name} 
            distance={area.distance} 
            index={idx}
            isVisible={isLoaded}
          />
        ))}
      </div>

      {/* Description */}
      <div className="description-section">
        <div className="description-content">
          <div className="description-icon">
            <FaMapMarkerAlt />
          </div>
          <p className="description-text">
            We welcome patients from all areas of Vellore and nearby towns. Our central location makes us easily accessible from anywhere in the region, ensuring you receive the best dental care without the hassle of long travels.
          </p>
        </div>
      </div>

      {/* Toggle Button */}
      <div className="button-container">
        <button className="toggle-button" onClick={toggleAreas}>
          <span className="button-text">
            {showAll ? 'Show Less Areas' : 'View All Service Areas'}
          </span>
          <div className="button-icon">
            {showAll ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </button>
      </div>

      <style jsx>{`
        .service-areas {
          padding: 80px 20px;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          position: relative;
          overflow: hidden;
        }
        
        .background-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        
        .bg-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }
        
        .bg-circle-1 {
          width: 300px;
          height: 300px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          top: -150px;
          left: -150px;
          animation-delay: 0s;
        }
        
        .bg-circle-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(45deg, #10b981, #3b82f6);
          bottom: -200px;
          right: -200px;
          animation-delay: 2s;
        }
        
        .bg-circle-3 {
          width: 200px;
          height: 200px;
          background: linear-gradient(45deg, #f59e0b, #ef4444);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: 4s;
        }
        
        .header-section {
          max-width: 1200px;
          margin: 0 auto 60px;
          text-align: center;
          position: relative;
          z-index: 2;
        }
        
        .title-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 20px;
        }
        
        .title-icon {
          font-size: 32px;
          color: #3b82f6;
          animation: bounce 2s infinite;
        }
        
        .main-title {
          font-size: clamp(28px, 5vw, 48px);
          font-weight: 800;
          background: linear-gradient(135deg, #1e293b, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
        }
        
        .subtitle {
          font-size: 18px;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto 40px;
          line-height: 1.6;
        }
        
        .stats-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          font-size: 28px;
          font-weight: 800;
          color: #3b82f6;
          margin-bottom: 4px;
        }
        
        .stat-label {
          font-size: 14px;
          color: #64748b;
          font-weight: 500;
        }
        
        .stat-divider {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, transparent, #cbd5e1, transparent);
        }
        
        .areas-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto 60px;
          position: relative;
          z-index: 2;
        }
        
        .description-section {
          max-width: 800px;
          margin: 0 auto 40px;
          position: relative;
          z-index: 2;
        }
        
        .description-content {
          background: white;
          padding: 32px;
          border-radius: 24px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(226, 232, 240, 0.5);
          display: flex;
          align-items: center;
          gap: 20px;
          transition: all 0.3s ease;
        }
        
        .description-content:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }
        
        .description-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          flex-shrink: 0;
        }
        
        .description-text {
          color: #475569;
          line-height: 1.6;
          margin: 0;
          font-size: 16px;
        }
        
        .button-container {
          text-align: center;
          position: relative;
          z-index: 2;
        }
        
        .toggle-button {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          border: none;
          padding: 16px 32px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
          position: relative;
          overflow: hidden;
        }
        
        .toggle-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .toggle-button:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 32px rgba(59, 130, 246, 0.4);
        }
        
        .toggle-button:hover::before {
          opacity: 1;
        }
        
        .button-text,
        .button-icon {
          position: relative;
          z-index: 2;
        }
        
        .button-icon {
          transition: transform 0.3s ease;
        }
        
        .toggle-button:hover .button-icon {
          transform: scale(1.2);
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        @media (max-width: 768px) {
          .service-areas {
            padding: 60px 16px;
          }
          
          .areas-grid {
            grid-template-columns: 1fr;
          }
          
          .stats-container {
            gap: 20px;
          }
          
          .stat-divider {
            display: none;
          }
          
          .description-content {
            flex-direction: column;
            text-align: center;
            padding: 24px;
          }
          
          .description-icon {
            width: 50px;
            height: 50px;
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default ServiceAreas;