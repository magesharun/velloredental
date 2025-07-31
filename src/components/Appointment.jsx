import React from 'react'

const Appointment = () => {
  return (
    <div>
        <section className="bg-gradient-to-r from-blue-100 to-blue-300 py-20 px-6 text-center relative overflow-hidden">
  <div className="max-w-4xl mx-auto z-10 relative">
    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 animate-fade-in-up">
      Ready to Transform Your Smile?
    </h2>
    <p className="text-lg md:text-xl text-blue-800 mb-10 animate-fade-in-up delay-150">
      Book your appointment today and experience the difference of professional dental care.
    </p>
    <div className="flex justify-center gap-6 flex-wrap animate-fade-in-up delay-300">
      <a
        href="#booking" // Replace with your booking section/link
        className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105 duration-300"
      >
        🗓️ Book Appointment
      </a>
      <a
        href="tel:+919999999999" // Replace with your phone number
        className="bg-white hover:bg-blue-100 text-blue-800 border-2 border-blue-700 font-semibold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105 duration-300"
      >
        📞 Call Us
      </a>
    </div>
  </div>

  {/* Optional background shape animation */}
  <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
  <div className="absolute bottom-0 -right-10 w-56 h-56 bg-white rounded-full opacity-10 animate-ping"></div>
</section>

    </div>
  )
}

export default Appointment