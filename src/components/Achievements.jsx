// import React from 'react';
// import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
// import CountUp from 'react-countup';
// import { FaSmile, FaAward, FaTooth, FaCalendarAlt } from 'react-icons/fa';

// const achievements = [
//   {
//     icon: <FaSmile size={40} className="text-green-600" />,
//     label: 'Happy Patients',
//     value: 1050,
//     suffix: '+',
//   },
//   {
//     icon: <FaCalendarAlt size={40} className="text-blue-600" />,
//     label: 'Years Experience',
//     value: 25,
//     suffix: '+',
//   },
//   {
//     icon: <FaTooth size={40} className="text-purple-600" />,
//     label: 'Treatments Done',
//     value: 2000,
//     suffix: '+',
//   },
//   {
//     icon: <FaAward size={40} className="text-yellow-500" />,
//     label: 'Awards Won',
//     value: 15,
//     suffix: '',
//   },
// ];

// export default function Achievements() {
//   return (
//     <section className="w-full bg-blue-50 py-20 px-6">
//       <motion.h2
//         className="text-4xl font-bold text-center text-blue-800 mb-12"
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Our Achievements
//       </motion.h2>

//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
//         {achievements.map((item, index) => (
//           <motion.div
//             key={index}
//             className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//           >
//             <div className="flex justify-center mb-4">{item.icon}</div>
//             <h3 className="text-3xl font-bold text-blue-700">
//               <CountUp end={item.value} duration={2} suffix={item.suffix} />
//             </h3>
//             <p className="mt-2 text-gray-600 text-lg">{item.label}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }





import React, { useState, useEffect, useRef } from 'react';
import { FaSmile, FaAward, FaTooth, FaCalendarAlt, FaStar, FaTrophy, FaChartLine } from 'react-icons/fa';

const CountUp = ({ end, duration = 2, suffix = '', isVisible }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isVisible && !hasStarted) {
      setHasStarted(true);
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isVisible, end, duration, hasStarted]);

  return <span>{count}{suffix}</span>;
};

const AchievementCard = ({ item, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`achievement-card transform transition-all duration-1000 ease-out ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-16 opacity-0 scale-90'
      }`}
      style={{ 
        transitionDelay: `${index * 200}ms`,
        animation: isVisible ? `slideInUp 1s ease-out ${index * 0.2}s both` : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-inner">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Floating elements */}
        <div className="floating-elements">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`floating-dot floating-dot-${i + 1} ${isHovered ? 'animate' : ''}`}
              style={{
                background: item.gradient,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>

        {/* Icon section */}
        <div className="icon-section">
          <div className={`icon-container`} style={{ background: item.gradient }}>
            <div className="icon-wrapper">
              {item.icon}
            </div>
            <div className="icon-rings">
              <div className="ring ring-1"></div>
              <div className="ring ring-2"></div>
            </div>
          </div>
          
          {/* Badge */}
          <div className="achievement-badge">
            <FaStar className="badge-star" />
            <span>Achievement</span>
          </div>
        </div>

        {/* Content */}
        <div className="content-section">
          <div className="number-container">
            <h3 className="achievement-number">
              <CountUp 
                end={item.value} 
                duration={2.5} 
                suffix={item.suffix} 
                isVisible={isVisible}
              />
            </h3>
            <div className="number-accent"></div>
          </div>
          
          <p className="achievement-label">{item.label}</p>
          
          {/* Progress indicator */}
          <div className="progress-container">
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ 
                  background: item.gradient,
                  width: isVisible ? '100%' : '0%',
                  transitionDelay: `${index * 200 + 500}ms`
                }}
              ></div>
            </div>
            <span className="progress-text">Excellence Level: 100%</span>
          </div>
        </div>

        {/* Decorative corner */}
        <div className="corner-decoration">
          <FaTrophy className="corner-icon" />
        </div>

        {/* Hover overlay */}
        <div className="hover-overlay"></div>
      </div>

      <style jsx>{`
        .achievement-card {
          position: relative;
          height: 100%;
          min-height: 280px;
        }
        
        .card-inner {
          background: white;
          border-radius: 32px;
          padding: 32px;
          height: 100%;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.12),
            0 2px 8px rgba(0, 0, 0, 0.08);
          border: 2px solid rgba(255, 255, 255, 0.8);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        
        .achievement-card:hover .card-inner {
          transform: translateY(-16px) scale(1.03);
          box-shadow: 
            0 25px 60px rgba(0, 0, 0, 0.18),
            0 10px 30px rgba(0, 0, 0, 0.12);
          border-color: rgba(59, 130, 246, 0.3);
        }
        
        .floating-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          border-radius: 32px;
        }
        
        .floating-dot {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          opacity: 0;
          transition: all 0.8s ease;
        }
        
        .floating-dot-1 { top: 15%; left: 15%; }
        .floating-dot-2 { top: 25%; right: 20%; }
        .floating-dot-3 { top: 45%; left: 10%; }
        .floating-dot-4 { top: 65%; right: 15%; }
        .floating-dot-5 { bottom: 25%; left: 20%; }
        .floating-dot-6 { bottom: 15%; right: 25%; }
        .floating-dot-7 { top: 35%; left: 80%; }
        .floating-dot-8 { bottom: 45%; left: 85%; }
        
        .floating-dot.animate {
          opacity: 0.7;
          animation: floatDot 4s ease-in-out infinite;
        }
        
        .icon-section {
          position: relative;
          margin-bottom: 24px;
        }
        
        .icon-container {
          width: 90px;
          height: 90px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
          transition: all 0.5s ease;
          margin-bottom: 16px;
        }
        
        .achievement-card:hover .icon-container {
          transform: scale(1.15) rotate(10deg);
          box-shadow: 0 16px 50px rgba(0, 0, 0, 0.2);
        }
        
        .icon-wrapper {
          color: white;
          font-size: 36px;
          z-index: 3;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .icon-rings {
          position: absolute;
          inset: 0;
        }
        
        .ring {
          position: absolute;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.3);
          animation: pulse 3s ease-in-out infinite;
        }
        
        .ring-1 {
          inset: -8px;
          animation-delay: 0s;
        }
        
        .ring-2 {
          inset: -16px;
          animation-delay: 1s;
        }
        
        .achievement-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          color: white;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(251, 191, 36, 0.3);
          position: absolute;
          top: -8px;
          right: -8px;
        }
        
        .badge-star {
          font-size: 10px;
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .content-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        
        .number-container {
          position: relative;
          margin-bottom: 16px;
        }
        
        .achievement-number {
          font-size: 48px;
          font-weight: 800;
          background: linear-gradient(135deg, #1e293b, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
          position: relative;
          z-index: 2;
        }
        
        .number-accent {
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #3b82f6, transparent);
          border-radius: 2px;
        }
        
        .achievement-label {
          font-size: 16px;
          font-weight: 600;
          color: #64748b;
          margin-bottom: 20px;
          transition: color 0.3s ease;
        }
        
        .achievement-card:hover .achievement-label {
          color: #3b82f6;
        }
        
        .progress-container {
          width: 100%;
          margin-top: auto;
        }
        
        .progress-bar {
          width: 100%;
          height: 6px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 8px;
        }
        
        .progress-fill {
          height: 100%;
          border-radius: 3px;
          transition: width 1.5s ease-out;
        }
        
        .progress-text {
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
        }
        
        .corner-decoration {
          position: absolute;
          top: 16px;
          right: 16px;
          opacity: 0.1;
          transition: all 0.3s ease;
        }
        
        .corner-icon {
          font-size: 24px;
          color: #3b82f6;
        }
        
        .achievement-card:hover .corner-decoration {
          opacity: 0.3;
          transform: scale(1.2) rotate(15deg);
        }
        
        .hover-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.02), rgba(139, 92, 246, 0.02));
          border-radius: 32px;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        
        .achievement-card:hover .hover-overlay {
          opacity: 1;
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes floatDot {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.5;
          }
        }
        
        @keyframes sparkle {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.2) rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
};

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const achievements = [
    {
      icon: <FaSmile size={32} />,
      label: 'Happy Patients',
      value: 1050,
      suffix: '+',
      gradient: 'linear-gradient(135deg, #10b981, #059669)',
    },
    {
      icon: <FaCalendarAlt size={32} />,
      label: 'Years Experience',
      value: 25,
      suffix: '+',
      gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
    },
    {
      icon: <FaTooth size={32} />,
      label: 'Treatments Done',
      value: 2000,
      suffix: '+',
      gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    },
    {
      icon: <FaAward size={32} />,
      label: 'Awards Won',
      value: 15,
      suffix: '',
      gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="achievements-section" ref={sectionRef}>
      {/* Animated background */}
      <div className="background-animation">
        <div className="bg-wave bg-wave-1"></div>
        <div className="bg-wave bg-wave-2"></div>
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
      </div>

      <div className="container">
        {/* Header */}
        <div className="header-section">
          <div className="header-badge">
            <FaChartLine className="badge-icon" />
            <span>Our Success Story</span>
          </div>
          
          <h2 className="main-title">
            Our <span className="gradient-text">Achievements</span>
          </h2>
          
          <p className="subtitle">
            Years of dedication, thousands of smiles, and countless success stories that define our commitment to excellence in dental care.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <AchievementCard 
              key={index} 
              item={item} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Bottom section */}
        <div className="bottom-section">
          <div className="achievement-summary">
            <div className="summary-icon">
              <FaTrophy />
            </div>
            <div className="summary-content">
              <h3 className="summary-title">Excellence in Every Aspect</h3>
              <p className="summary-text">
                These numbers represent more than statistics—they embody our unwavering commitment to providing exceptional dental care and creating lasting relationships with our patients.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .achievements-section {
          position: relative;
          padding: 120px 20px;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 25%, #bae6fd 50%, #7dd3fc 75%, #38bdf8 100%);
          overflow: hidden;
        }
        
        .background-animation {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        
        .bg-wave {
          position: absolute;
          width: 200%;
          height: 100px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          animation: wave 8s ease-in-out infinite;
        }
        
        .bg-wave-1 {
          top: 20%;
          left: -50%;
          animation-delay: 0s;
        }
        
        .bg-wave-2 {
          bottom: 20%;
          left: -50%;
          animation-delay: 4s;
        }
        
        .bg-circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent);
          animation: float 6s ease-in-out infinite;
        }
        
        .bg-circle-1 {
          width: 300px;
          height: 300px;
          top: -150px;
          right: -150px;
          animation-delay: 0s;
        }
        
        .bg-circle-2 {
          width: 200px;
          height: 200px;
          bottom: -100px;
          left: -100px;
          animation-delay: 3s;
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
          gap: 10px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          padding: 12px 24px;
          border-radius: 50px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 24px;
          color: #3b82f6;
          font-weight: 600;
          font-size: 14px;
        }
        
        .badge-icon {
          font-size: 16px;
          animation: bounce 2s infinite;
        }
        
        .main-title {
          font-size: clamp(36px, 6vw, 72px);
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 24px;
          line-height: 1.1;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% 200%;
          animation: gradientFlow 3s ease-in-out infinite;
        }
        
        .subtitle {
          font-size: 18px;
          color: #475569;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
          margin-bottom: 80px;
        }
        
        .bottom-section {
          text-align: center;
        }
        
        .achievement-summary {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          padding: 48px;
          border-radius: 32px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 32px;
          text-align: left;
        }
        
        .summary-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 32px;
          box-shadow: 0 12px 32px rgba(251, 191, 36, 0.3);
          flex-shrink: 0;
          animation: pulse 3s ease-in-out infinite;
        }
        
        .summary-content {
          flex: 1;
        }
        
        .summary-title {
          font-size: 24px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 12px;
        }
        
        .summary-text {
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }
        
        @keyframes wave {
          0%, 100% {
            transform: translateX(0) rotate(0deg);
          }
          50% {
            transform: translateX(-25%) rotate(180deg);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
          60% {
            transform: translateY(-4px);
          }
        }
        
        @keyframes gradientFlow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        @media (max-width: 768px) {
          .achievements-section {
            padding: 80px 16px;
          }
          
          .achievements-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          
          .achievement-summary {
            flex-direction: column;
            text-align: center;
            padding: 32px 24px;
          }
          
          .summary-icon {
            width: 60px;
            height: 60px;
            font-size: 24px;
          }
        }
      `}</style>
    </section>
  );
}



