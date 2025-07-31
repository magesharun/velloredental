import React, { useState } from "react";

const tabs = [
  "General",
  "Preventive",
  "Restorative",
  "Cosmetic",
  "Orthodontic",
  "Surgical",
  "Pediatric",
];

const tabContent = {
  General: (
    <>
      <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        General Dentistry
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        General dentistry includes routine checkups, cleanings, and preventive care to maintain good oral health.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {["Dental Consultation", "Dental X-Rays", "Dental Cleaning & Scaling", "Emergency Dental Visits"].map((item, index) => (
          <div key={index} className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-500 transform hover:scale-105 transition-all duration-300 hover:shadow-md">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-gray-800 font-medium">{item}</span>
          </div>
        ))}
      </div>
    </>
  ),
  Preventive: (
    <>
      <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
        Preventive Dentistry
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        Preventive dental care focuses on avoiding cavities, gum disease, and other oral health problems.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {["Fluoride Treatments", "Sealants", "Oral Hygiene Education", "Regular Dental Exams"].map((item, index) => (
          <div key={index} className="flex items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-500 transform hover:scale-105 transition-all duration-300 hover:shadow-md">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-gray-800 font-medium">{item}</span>
          </div>
        ))}
      </div>
    </>
  ),
  Restorative: (
    <>
      <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
        Restorative Dentistry
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        Restorative dentistry deals with repairing damaged or missing teeth.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {["Fillings", "Root Canal Treatment", "Dental Crowns & Bridges", "Dental Implants"].map((item, index) => (
          <div key={index} className="flex items-center p-3 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg border-l-4 border-amber-500 transform hover:scale-105 transition-all duration-300 hover:shadow-md">
            <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-gray-800 font-medium">{item}</span>
          </div>
        ))}
      </div>
    </>
  ),
  Cosmetic: (
    <>
      <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
        Cosmetic Dentistry
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        Cosmetic dentistry focuses on improving the appearance of your smile.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {["Teeth Whitening", "Veneers", "Smile Makeovers", "Bonding"].map((item, index) => (
          <div key={index} className="flex items-center p-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg border-l-4 border-pink-500 transform hover:scale-105 transition-all duration-300 hover:shadow-md">
            <div className="w-2 h-2 bg-pink-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-gray-800 font-medium">{item}</span>
          </div>
        ))}
      </div>
    </>
  ),
  Orthodontic: (
    <>
      <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
        Orthodontic Care
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        Orthodontics deals with correcting misaligned teeth and jaws.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {["Braces (Metal & Ceramic)", "Clear Aligners (Invisalign)", "Retainers"].map((item, index) => (
          <div key={index} className="flex items-center p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border-l-4 border-purple-500 transform hover:scale-105 transition-all duration-300 hover:shadow-md">
            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-gray-800 font-medium">{item}</span>
          </div>
        ))}
      </div>
    </>
  ),
  Surgical: (
    <>
      <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
        Surgical Procedures
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        Surgical dentistry covers procedures like tooth extractions and gum surgery.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {["Tooth Extractions", "Wisdom Teeth Removal", "Gum Surgery"].map((item, index) => (
          <div key={index} className="flex items-center p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border-l-4 border-red-500 transform hover:scale-105 transition-all duration-300 hover:shadow-md">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-gray-800 font-medium">{item}</span>
          </div>
        ))}
      </div>
    </>
  ),
  Pediatric: (
    <>
      <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
        Pediatric Dentistry
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        Pediatric dentistry focuses on dental care for children from infancy to adolescence.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {["Child Dental Exams", "Fluoride Treatments for Kids", "Space Maintainers", "Early Orthodontic Evaluation"].map((item, index) => (
          <div key={index} className="flex items-center p-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg border-l-4 border-cyan-500 transform hover:scale-105 transition-all duration-300 hover:shadow-md">
            <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-gray-800 font-medium">{item}</span>
          </div>
        ))}
      </div>
    </>
  ),
};

const DentalTabs = () => {
  const [activeTab, setActiveTab] = useState("General");

  const tabColors = {
    General: "blue",
    Preventive: "green",
    Restorative: "amber",
    Cosmetic: "pink",
    Orthodontic: "purple",
    Surgical: "red",
    Pediatric: "cyan"
  };

  const getTabClasses = (tab) => {
    const color = tabColors[tab];
    const isActive = activeTab === tab;
    
    if (isActive) {
      return `bg-gradient-to-r from-${color}-500 to-${color}-600 text-white shadow-lg transform translate-y-[-2px] border-${color}-500`;
    }
    
    return `bg-white text-gray-600 hover:bg-gradient-to-r hover:from-${color}-50 hover:to-${color}-100 hover:text-${color}-600 hover:shadow-md border-gray-200`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
          Dental Services
        </h1>
        <p className="text-gray-600 text-lg">Comprehensive dental care for all your needs</p>
      </div>

      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Dental services categories"
        className="flex flex-wrap justify-center gap-2 mb-8"
      >
        {tabs.map((tab, index) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            aria-controls={`tab-panel-${tab.toLowerCase()}`}
            id={`tab-${tab.toLowerCase()}`}
            tabIndex={activeTab === tab ? 0 : -1}
            className={`relative px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-xl border-2 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 ${getTabClasses(tab)}`}
            style={{
              animationDelay: `${index * 100}ms`
            }}
            onClick={() => setActiveTab(tab)}
            onKeyDown={(e) => {
              const currentIndex = tabs.indexOf(activeTab);
              if (e.key === "ArrowRight") {
                const nextIndex = (currentIndex + 1) % tabs.length;
                setActiveTab(tabs[nextIndex]);
              } else if (e.key === "ArrowLeft") {
                const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
                setActiveTab(tabs[prevIndex]);
              }
            }}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute inset-0 rounded-xl bg-white opacity-20 animate-ping"></div>
            )}
          </button>
        ))}
      </div>

      {/* Tab Panel */}
      <div
        role="tabpanel"
        id={`tab-panel-${activeTab.toLowerCase()}`}
        aria-labelledby={`tab-${activeTab.toLowerCase()}`}
        tabIndex={0}
        className="relative p-8 bg-white rounded-2xl shadow-xl border border-gray-200 min-h-[400px] transform transition-all duration-500 hover:shadow-2xl"
        style={{
          animation: "slideInUp 0.5s ease-out"
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-2xl"></div>
        <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-pink-100 to-yellow-100 rounded-full opacity-30 animate-bounce"></div>
        
        <div className="relative z-10">
          {tabContent[activeTab]}
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
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
        
        .animate-fade-in {
          animation: slideInUp 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default DentalTabs;