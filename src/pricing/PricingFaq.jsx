import React, { useEffect, useState } from "react";

const faqs = [
  {
    question: "Do you offer discounts for multiple treatments?",
    answer:
      "Yes, we offer package discounts when multiple treatments are scheduled together. For example, getting multiple implants or combining cosmetic procedures can reduce the overall cost by 10-15%.",
  },
  {
    question: "Are there any hidden costs I should be aware of?",
    answer:
      "No, we pride ourselves on transparent pricing. The quoted price includes all aspects of your treatment. We'll provide a detailed treatment plan with all costs clearly outlined before beginning any procedure.",
  },
  {
    question: "How much does dental insurance typically cover?",
    answer:
      "Most dental insurance plans cover 100% of preventive care, 80% of basic procedures, and 50% of major treatments up to an annual limit. Our team will verify your specific coverage and explain your out-of-pocket costs.",
  },
  {
    question: "Do you offer a warranty on dental work?",
    answer:
      "Yes, we stand behind our work. Dental implants come with a lifetime warranty, crowns and bridges with a 5-year warranty, and fillings with a 2-year warranty, provided you maintain regular check-ups at our clinic.",
  },
];

const PricingFAQ = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div
      className={`mb-16 transition-all duration-1000 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-800 animate-fade-in">
        🦷 Frequently Asked Questions About Pricing
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform transition-transform hover:-translate-y-1.5 duration-300 border border-gray-100"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-700">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="/faq">
          <button className="inline-flex items-center justify-center gap-2 font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-base px-6 py-3 rounded-full shadow-md hover:shadow-lg">
            🔍 View All FAQs
          </button>
        </a>
      </div>
    </div>
  );
};

export default PricingFAQ;
