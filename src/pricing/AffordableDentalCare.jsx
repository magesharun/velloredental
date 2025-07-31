import React from 'react';

const AffordableDentalCare = () => {
  return (
    <section className="container mx-auto my-12 px-4 lg:px-0">
      <h2 className="text-3xl font-extrabold text-center text-primary mb-8">
        Affordable Dental Care in Vellore
      </h2>

      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        Indira Dental Clinic offers transparent and affordable pricing for all
        dental procedures. Our{' '}
        <a
          className="text-blue-600 hover:underline font-medium"
          href="services/root-canal-treatment.html"
        >
          root canal treatments
        </a>{' '}
        and{' '}
        <a
          className="text-blue-600 hover:underline font-medium"
          href="services/dental-implants.html"
        >
          dental implants
        </a>{' '}
        cost 40-60% less than other clinics while maintaining the highest
        quality standards.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        We serve patients from all areas of Vellore including{' '}
        <a
          className="text-blue-600 hover:underline font-medium"
          href="in/tamil-nadu/vellore/gandhinagar.html"
        >
          Gandhi Nagar
        </a>
        ,{' '}
        <a
          className="text-blue-600 hover:underline font-medium"
          href="in/tamil-nadu/vellore/katpadi.html"
        >
          Katpadi
        </a>
        , and{' '}
        <a
          className="text-blue-600 hover:underline font-medium"
          href="in/tamil-nadu/vellore/sathuvachari.html"
        >
          Sathuvachari
        </a>
        . Our clinic also welcomes patients from nearby cities like{' '}
        <a
          className="text-blue-600 hover:underline font-medium"
          href="in/tamil-nadu/chennai.html"
        >
          Chennai
        </a>{' '}
        and{' '}
        <a
          className="text-blue-600 hover:underline font-medium"
          href="in/karnataka/bangalore.html"
        >
          Bangalore
        </a>{' '}
        who visit us for affordable dental tourism.
      </p>

      <div className="my-8">
        <h3 className="text-2xl font-semibold text-center text-primary mb-6">
          Explore Our Services &amp; Locations
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/** Card 1 */}
          <a
            className="group backdrop-blur-lg bg-white/70 border border-slate-200 shadow-lg rounded-2xl p-6 transition-transform hover:scale-105 hover:bg-white/90"
            href="in/tamil-nadu/vellore/katpadi.html"
          >
            <h4 className="text-lg font-bold text-primary group-hover:text-blue-700 transition-colors">
              Dentist in Katpadi, Vellore
            </h4>
            <p className="text-sm text-slate-600 mt-2">
              Dental care for Katpadi residents
            </p>
          </a>

          {/** Card 2 */}
          <a
            className="group backdrop-blur-lg bg-white/70 border border-slate-200 shadow-lg rounded-2xl p-6 transition-transform hover:scale-105 hover:bg-white/90"
            href="in/tamil-nadu/vellore/gandhinagar.html"
          >
            <h4 className="text-lg font-bold text-primary group-hover:text-blue-700 transition-colors">
              Dentist in Gandhi Nagar, Vellore
            </h4>
            <p className="text-sm text-slate-600 mt-2">
              Dental care for Gandhi Nagar residents
            </p>
          </a>

          {/** Card 3 */}
          <a
            className="group backdrop-blur-lg bg-white/70 border border-slate-200 shadow-lg rounded-2xl p-6 transition-transform hover:scale-105 hover:bg-white/90"
            href="services/root-canal-treatment.html"
          >
            <h4 className="text-lg font-bold text-primary group-hover:text-blue-700 transition-colors">
              Root Canal Treatment (RCT) in Vellore
            </h4>
            <p className="text-sm text-slate-600 mt-2">
              Painless root canal therapy by experienced endodontists
            </p>
          </a>

          {/** Card 4 */}
          <a
            className="group backdrop-blur-lg bg-white/70 border border-slate-200 shadow-lg rounded-2xl p-6 transition-transform hover:scale-105 hover:bg-white/90"
            href="services/dental-implants.html"
          >
            <h4 className="text-lg font-bold text-primary group-hover:text-blue-700 transition-colors">
              Dental Implants in Vellore
            </h4>
            <p className="text-sm text-slate-600 mt-2">
              Permanent tooth replacement with titanium implants
            </p>
          </a>

          {/** Card 5 */}
          <a
            className="group backdrop-blur-lg bg-white/70 border border-slate-200 shadow-lg rounded-2xl p-6 transition-transform hover:scale-105 hover:bg-white/90"
            href="https://www.dentalclinicinvellore.in/services/braces-orthodontics"
          >
            <h4 className="text-lg font-bold text-primary group-hover:text-blue-700 transition-colors">
              Braces & Orthodontics in Vellore
            </h4>
            <p className="text-sm text-slate-600 mt-2">
              Teeth alignment solutions for all ages
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AffordableDentalCare;
