import React from 'react';
import vid1 from '../../src/assets/clinicaltour/WhatsApp Video 2025-07-19 at 11.37.15 (1).mp4'
import vid2 from '../../src/assets/clinicaltour/WhatsApp Video 2025-07-19 at 11.37.15 (2).mp4'
import vid3 from '../../src/assets/clinicaltour/WhatsApp Video 2025-07-19 at 11.37.15.mp4'



const videoTestimonials = [
  {
    name: 'SOPHIA',
    label: 'INDIRA DENTAL PATIENT',
    text: 'I finally have the straight teeth I’ve always wanted, no gaps anywhere.',
    videoUrl: vid1,
  },
  {
    name: 'AMUTHA',
    label: 'INDIRA DENTAL PATIENT',
    text: 'The process was so easy, and my teeth look amazing now.',
    videoUrl: vid2,
  },
  {
    name: 'SAMBATHAM',
    label: 'INDIRA DENTAL PATIENT',
    text: 'The aligners were super comfortable, and the results speak for themselves.',
    videoUrl: vid3,
  },
  {
    name: 'SHARMILA',
    label: 'INDIRA DENTAL PATIENT',
    text: 'I feel so much more confident with my new, perfect smile.',
    videoUrl: vid1,
  },
];

const VideoTestimonials = () => {
  return (
    <div className="py-12 bg-gray-50 ">
      <h2 className="text-3xl font-bold text-center mb-10">
        Patients are choosing <span className="text-blue-500">Indira's Dental</span>
      </h2>

      <div className="flex overflow-x-auto px-4 space-x-6 scrollbar-hid m-30">
        {videoTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative w-[250px] sm:w-[280px] rounded-xl overflow-hidden flex-shrink-0 shadow-md"
          >
            <video
              src={testimonial.videoUrl}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end text-white">
              <div className="text-4xl leading-none mb-2">“</div>
              <p className="text-sm mb-4">{testimonial.text}</p>
              <div className="text-xs font-semibold tracking-wide">{testimonial.name}</div>
              <div className="text-[10px]">{testimonial.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoTestimonials;
