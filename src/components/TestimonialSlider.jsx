import React, { useEffect, useRef } from 'react';

const testimonials1 = [
  { name: 'Omar', type: 'Aligners patient', text: 'Doctor guidance made sure my results were perfect.', rating: 5 },
  { name: 'Nadia', type: 'Veneers patient', text: 'My veneers look natural and transformed my smile.', rating: 5 },
  { name: 'Ryan', type: 'Aligners patient', text: 'The aligners were simple and gave great results.', rating: 5 },
  { name: 'Ivana', type: 'Whitening patient', text: 'Whitening brightened my smile in just one quick session.', rating: 5 },
];

const testimonials2 = [
  { name: 'Michael', type: 'Aligners patient', text: 'Aligner results came fast, and the process was simple.', rating: 5 },
  { name: 'Farah', type: 'Whitening patient', text: 'Whitening gave me a brighter and more confident smile.', rating: 5 },
  { name: 'Ali', type: 'Aligners patient', text: 'Transparent pricing and flexible plans made this easy.', rating: 5 },
  { name: 'Sana', type: 'Aligners patient', text: "Emirate's aligners made my smile flawless and straight.", rating: 5 },
];

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-1 mb-2">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'} transition-colors duration-300`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial, index }) => (
  <div 
    className="min-w-[320px] max-w-[350px] bg-white shadow-lg hover:shadow-2xl rounded-2xl p-6 flex-shrink-0 transform hover:scale-105 transition-all duration-500 group border border-gray-100 hover:border-blue-200 relative overflow-hidden"
    style={{
      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
    }}
  >
    {/* Background decoration */}
    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-50 to-transparent rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
    
    {/* Quote icon */}
    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
      <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 32 32">
        <path d="M10 8v8c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4v-4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8v-8h-4zM30 8v8c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4v-4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8v-8h-4z"/>
      </svg>
    </div>
    
    <StarRating rating={testimonial.rating} />
    
    <p className="text-gray-700 text-sm leading-relaxed mb-4 group-hover:text-gray-800 transition-colors duration-300">
      "{testimonial.text}"
    </p>
    
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
        {testimonial.name.charAt(0)}
      </div>
      <div>
        <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {testimonial.name}
        </p>
        <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
          {testimonial.type}
        </p>
      </div>
    </div>
    
    {/* Hover effect overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
  </div>
);

const TestimonialSlider = () => {
  const sliderRef1 = useRef(null); // Right to Left
  const sliderRef2 = useRef(null); // Left to Right
  
  // Add CSS keyframes
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes slideRightToLeft {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-100%);
        }
      }
      
      @keyframes slideLeftToRight {
        from {
          transform: translateX(-100%);
        }
        to {
          transform: translateX(0);
        }
      }
      
      .scroll-smooth {
        scroll-behavior: smooth;
      }
      
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Left to Right animation (First slider)
  const scrollLeftToRight = (ref) => {
    const el = ref.current;
    if (!el) return;
    
    const speed = 0.8;
    
    return setInterval(() => {
      el.scrollLeft += speed;
      
      // Reset to beginning when reached end
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
    }, 16);
  };

  // Right to Left animation (Second slider)
  const scrollRightToLeft = (ref) => {
    const el = ref.current;
    if (!el) return;
    
    const speed = 0.6;
    
    return setInterval(() => {
      el.scrollLeft -= speed;
      
      // Reset to end when reached beginning
      if (el.scrollLeft <= 0) {
        el.scrollLeft = el.scrollWidth / 2;
      }
    }, 16);
  };

  useEffect(() => {
    // Initialize second slider position for right-to-left movement
    if (sliderRef2.current) {
      sliderRef2.current.scrollLeft = sliderRef2.current.scrollWidth / 2;
    }
    
    const interval1 = scrollLeftToRight(sliderRef1);
    const interval2 = scrollRightToLeft(sliderRef2);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  const renderTestimonials = (data, reverse = false) => {
    const testimonials = reverse ? [...data].reverse() : data;
    return (
      <>
        {testimonials.map((item, index) => (
          <TestimonialCard key={`original-${index}`} testimonial={item} index={index} />
        ))}
        {testimonials.map((item, index) => (
          <TestimonialCard key={`duplicate-${index}`} testimonial={item} index={index} />
        ))}
      </>
    );
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              clients
            </span>{' '}
            say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto px-4">
            Discover why thousands of patients trust us with their smiles. Real stories from real people.
          </p>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center mt-6">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full mx-3 animate-pulse"></div>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </div>
        </div>

        {/* Slider 1: Left to Right */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="text-sm text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm border">
              Moving left to right →
            </div>
          </div>
          <div 
            ref={sliderRef1} 
            className="flex overflow-x-hidden space-x-6 px-4 scrollbar-hide"
            style={{ 
              maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
            }}
          >
            {renderTestimonials(testimonials1)}
          </div>
        </div>

        {/* Slider 2: Right to Left */}
        <div>
          <div className="flex items-center justify-center mb-4">
            <div className="text-sm text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm border">
              ← Moving right to left
            </div>
          </div>
          <div 
            ref={sliderRef2} 
            className="flex overflow-x-hidden space-x-6 px-4 scrollbar-hide"
            style={{ 
              maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
            }}
          >
            {renderTestimonials(testimonials2, true)}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
            <span className="text-gray-700 font-medium">Ready to join them?</span>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;