import React, { useEffect, useState } from "react";

const FinancingOptions = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after component mounts
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div
      className={`mb-16 transition-all duration-1000 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-800 animate-fade-in">
        Financing Your Dental Treatment
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* EMI Options */}
        {[ 
          {
            title: "3-Month EMI",
            subtitle: "Interest-free short-term plan",
            features: [
              "0% interest for 3 months",
              "Minimum treatment value: ₹10,000",
              "No processing fee",
              "All major credit cards accepted",
            ],
          },
          {
            title: "6-Month EMI",
            subtitle: "Extended payment option",
            features: [
              "Low interest rate of 5%",
              "Minimum treatment value: ₹20,000",
              "Minimal documentation",
              "Quick approval process",
            ],
          },
          {
            title: "12-Month EMI",
            subtitle: "For comprehensive treatments",
            features: [
              "Competitive interest rate",
              "Ideal for full mouth rehabilitation",
              "Flexible repayment options",
              "Available for treatments above ₹50,000",
            ],
          },
        ].map((option, i) => (
          <div
            key={i}
            className="rounded-xl border bg-white text-gray-900 shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold text-blue-700">{option.title}</div>
              <div className="text-sm text-gray-500">{option.subtitle}</div>
            </div>
            <div className="p-6 pt-0">
              <ul className="space-y-3">
                {option.features.map((text, idx) => (
                  <li className="flex items-start" key={idx}>
                    <CheckIcon />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="mb-4 text-gray-700 text-lg">
          Our financial coordinator will help you choose the best payment plan for your budget.
        </p>
        <a href="/contact">
          <button className="inline-flex items-center justify-center gap-2 font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 text-base px-6 py-3 rounded-full shadow-md hover:shadow-lg">
            💬 Discuss Payment Options
          </button>
        </a>
      </div>
    </div>
  );
};

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5"
  >
    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
    <path d="m9 11 3 3L22 4" />
  </svg>
);

export default FinancingOptions;
