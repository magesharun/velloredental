import React from 'react';

const TransparentPricing = () => {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12 px-4 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent animate-gradient">
        Transparent Pricing
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
        At Indira Dental Clinic, we believe in complete transparency when it
        comes to the cost of your dental care. Our pricing is competitive and
        reflects the high quality of care provided by{' '}
        <a
          href="https://www.google.co.in/maps/place/Indira+Dental+Clinic+%7C+Dr+Rockson+Samuel+%7C+Top+Dentist+in+Vellore+for+RCT,+Braces,+Implants,+%26+Dental+Fillings/@12.9540278,79.1369615,17z/data=!3m1!4b1!4m6!3m5!1s0x3bad394e9843620f:0xc7a4b2fb0991e086!8m2!3d12.9540278!4d79.1369615!16s%2Fg%2F11vq058sc7?entry=ttu"
          className="text-blue-600 hover:underline font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dr. Rockson Samuel
        </a>{' '}
        and our expert team.
      </p>
    </div>
  );
};

export default TransparentPricing;
