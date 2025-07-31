import React from 'react';
import DentalTabs from '../components/DentalTabs';
import FinancingOptions from '../pricing/Financingoptions';
import FinancingSection from '../pricing/FinancingSection';
import PricingFaq from '../pricing/PricingFaq';
import TreatmentQuoteCTA from '../pricing/TreatmentQuoteCTA';
import ConsultationSection from '../pricing/ConsultationSection';
import AffordableDentalCare from '../pricing/AffordableDentalCare';
import TransparentPricing from '../pricing/TransparentPricing';
import PricingHighlights from '../pricing/PricingHighlights';
import InsuranceAndPayment from '../pricing/InsuranceAndPayment';
import PriceMatchGuarantee from '../pricing/PriceMatchGuarantee';

const PriceList = () => {
  return (
    <div>
      {/* Transparent Pricing Section */}
      <TransparentPricing />

      {/* Key Highlights */}
      <PricingHighlights />

      {/* Services in Tab View */}
      <DentalTabs />

      {/* Insurance & Payment Options */}
      <InsuranceAndPayment />

      {/* Price Match Guarantee */}
      <PriceMatchGuarantee />

      {/* Financing Options */}
      <FinancingSection />

      {/* FAQs */}
      <PricingFaq />

      {/* Call to Action for Treatment Quote */}
      <TreatmentQuoteCTA />

      {/* Free Consultation Info */}
      <ConsultationSection />

      {/* Affordable Dental Care Section */}
      <AffordableDentalCare />
    </div>
  );
};

export default PriceList;
