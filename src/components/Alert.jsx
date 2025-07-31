import React from 'react'

const Alert = () => {
  return (
    <section className="bg-red-50 py-16 px-6 text-center animate-fade-in-up">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
      24/7 Emergency Care
    </h2>
    <p className="text-lg md:text-xl text-gray-700 mb-8">
      Dental emergencies don't wait. Neither do we. Call us anytime for urgent dental care.
    </p>
    <a
      href="tel:+919999999999" // Replace with your clinic's number
      className="inline-block bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 animate-bounce"
    >
      📞 Call Now
    </a>
  </div>
</section>

  )
}

export default Alert