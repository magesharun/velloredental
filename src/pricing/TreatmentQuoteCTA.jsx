import React, { useEffect, useState } from "react";

const TreatmentQuoteCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div
      className={`transition-all duration-1000 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } bg-transparent text-gray-800 p-10 rounded-2xl text-center border border-gray-300 shadow-md`}
    >
      <h2 className="text-4xl font-extrabold mb-4 text-primary animate-pulse">
        Get a Personalized Treatment Quote
      </h2>

      <p className="mb-8 text-lg text-gray-700 max-w-xl mx-auto">
        Schedule a free consultation with <strong className="text-black">Dr. Rockson Samuel</strong> to discuss your dental needs and receive a detailed treatment plan with exact pricing.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="contact.html">
          <button className="transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-md border border-primary  bg-primary  hover:bg-primary/90 text-lg px-6 py-3 rounded-full font-semibold">
            📅 Book Your Free Consultation Today!
          </button>
        </a>

        <a href="tel:+919876543210">
          <button className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md border border-primary text-primary bg-transparent hover:bg-primary hover:text-white text-lg px-6 py-3 rounded-full font-semibold">
            📞 Call Now: +91 98765 43210
          </button>
        </a>
      </div>
    </div>
  );
};

export default TreatmentQuoteCTA;
