import React, { useRef } from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end">
          <div>
            <h2 className="text-[#6A0DAD] font-bold tracking-wide uppercase text-sm mb-2">Success Stories</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-black">
              Voices of the <span className="text-[#6A0DAD]">Industry</span>
            </h3>
          </div>
          <div className="hidden md:flex gap-2 mb-2">
            {/* Simple indicators or navigation could go here */}
          </div>
        </div>

        {/* Horizontal Slider */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="min-w-[85vw] md:min-w-[400px] snap-center bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 text-purple-200" size={48} />
              
              <p className="text-lg text-gray-700 italic mb-8 leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#6A0DAD] mr-4"
                />
                <div>
                  <h5 className="font-bold text-gray-900">{testimonial.name}</h5>
                  <p className="text-sm text-[#6A0DAD] font-medium">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
