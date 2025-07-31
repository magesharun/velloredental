import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} className="text-yellow-400 inline-block mx-1" />);
  }
  
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-400 inline-block mx-1" />);
  }

  return <div className="mb-4">{stars}</div>;
};

const testimonials = [
  {
    name: 'Priya Sharma',
    message: 'Excellent service! Dr. Kumar made my root canal completely painless.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Rajesh Kumar',
    message: 'Best dental clinic in Vellore. Friendly staff and modern equipment.',
    rating: 4.5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Anita Rao',
    message: 'Clean, caring environment with top-notch technology.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/women/43.jpg',
  },
  // add rest...
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
        What Our Patients Say
      </h2>

      <div className="max-w-5xl mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="rounded-xl"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-xl shadow-xl transition duration-500 hover:scale-[1.01] text-center">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s photo`}
                  className="mx-auto w-20 h-20 rounded-full object-cover mb-4 border-2 border-blue-300"
                />
                {renderStars(testimonial.rating)}
                <p className="text-gray-700 text-lg italic mb-6">"{testimonial.message}"</p>
                <h4 className="text-blue-700 font-semibold text-xl">{testimonial.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
