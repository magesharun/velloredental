import React from 'react';

const PricingHighlights = () => {
  return (
    <div className="bg-gradient-to-br from-white via-sky-50 to-blue-100 p-8 md:p-12 rounded-2xl shadow-xl mb-12 animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-primary animate-slide-up">
        Why Our Pricing Stands Out in Vellore
      </h2>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        {/* Card 1 */}
        <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 animate-fade-in delay-100">
          <div className="text-5xl font-extrabold text-teal-600 mb-2 drop-shadow">
            20–30%
          </div>
          <p className="text-lg text-muted-foreground">
            More affordable than corporate dental chains
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 animate-fade-in delay-200">
          <div className="text-5xl font-extrabold text-red-500 mb-2 drop-shadow">
            0%
          </div>
          <p className="text-lg text-muted-foreground">
            Hidden fees or surprise charges
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 animate-fade-in delay-300">
          <div className="text-5xl font-extrabold text-green-600 mb-2 drop-shadow">
            100%
          </div>
          <p className="text-lg text-muted-foreground">
            Quality materials and lifetime warranty
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingHighlights;
