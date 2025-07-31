import React from 'react';
import DentalCarousel from '../components/DentalCarousel';
import WhyChoose from '../components/WhyChoose';
import Achievements from '../components/Achievements';
import PopularServices from '../components/PopularServices';
import Testimonials from '../components/Testimonials';
import Alert from '../components/Alert';
import Appointment from '../components/Appointment';
import ServiceAreas from '../components/ServiceAreas';
import TestimonialSlider from '../components/TestimonialSlider';
import VideoTestimonials from '../components/VideoTestimonials';

export default function Home() {
  return (
    <>
     <VideoTestimonials/> 
      <DentalCarousel />
      <WhyChoose />
      <Achievements />
      <PopularServices />
      <Testimonials />
      <ServiceAreas/>
      <Alert />
      <Appointment />
      <TestimonialSlider/>
     
    </>
  );
}
