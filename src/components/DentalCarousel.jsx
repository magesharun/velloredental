import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Add 10 sample dental hospital image URLs
const dentalImages = [
  'https://s42283.pcdn.co/wp-content/uploads/2020/09/dental-featured-image.jpg',
  'https://motherdentalhospital.in/wp-content/uploads/2024/07/dental-hospitals.webp',
  'https://www.muskaandentalsglobal.com/img/bg/about-2us.jpg',
  'https://stunningdentistry.in/images/south-delhi/clinic-large-05.jpg',
  'https://gargdentalcareclinic.com/wp-content/uploads/2024/11/dental-clinic-bangalore-1.jpg',
  'https://apollointeriors.com/wp-content/uploads/2023/09/angle-house-dentist-cricklewood-surgery-portrait-scaled-1200x600-1.jpg',
  'https://pihudental.com/assets/images/services/painless-treatment.jpg',
  'https://kdahweb-static.kokilabenhospital.com/kdah-2019/slider/15799744911957.jpg',
  'https://cdn.magicdecor.in/com/2023/10/30171812/Dental-Clinic-Comfort-Wall-Mural-1.jpg',
  'https://plus.unsplash.com/premium_photo-1672922646298-3afc6c6397c9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D',
];

export default function DentalCarousel() {
  return (
    <div className="w-full max-w-screen-xxl mx-auto py-32  px-6">

      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Our Dental Facilities</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-lg shadow-lg"
      >
        {dentalImages.map((imgUrl, index) => (
          <SwiperSlide key={index}>
            <img
              src={`${imgUrl}?auto=format&fit=crop&w=1200&q=80`}
              alt={`Dental Clinic ${index + 1}`}
              className="w-full h-[700px] object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
