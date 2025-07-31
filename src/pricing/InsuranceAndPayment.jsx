import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const InsuranceAndPayment = () => {
  const insuranceList = [
    "Star Health Insurance",
    "HDFC ERGO Health Insurance",
    "Apollo Munich Health Insurance",
    "Religare Health Insurance",
    "Corporate dental plans"
  ];

  const paymentList = [
    "0% interest EMI plans for treatments above ₹10,000",
    "All major credit/debit cards accepted",
    "UPI payments (PhonePe, Google Pay, Paytm)",
    "Customized payment plans for extensive treatments",
    "Senior citizen discounts (10% off)"
  ];

  return (
    <div className="mb-16 px-4 md:px-8">
      <h2 className="text-3xl font-extrabold text-center mb-12 underline underline-offset-4 decoration-blue-500">
        Insurance & Payment Options
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[insuranceList, paymentList].map((list, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            <h3 className="text-xl font-bold mb-4">
              {index === 0 ? "Insurance Coverage" : "Flexible Payment Options"}
            </h3>
            <p className="mb-4 text-slate-700">
              {index === 0
                ? "We accept all major dental insurance plans and will help you maximize your benefits. Our clinic works with:"
                : "We believe quality dental care should be accessible to everyone. Our clinic offers:"}
            </p>
            <ul className="space-y-2 mb-6 text-slate-600">
              {list.map((item, i) => (
                <li className="flex items-start" key={i}>
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-500">
              {index === 0
                ? "Our team will verify your coverage before treatment and provide a detailed breakdown of costs."
                : "Speak with our financial coordinator to find the best payment solution for your needs."}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InsuranceAndPayment;
