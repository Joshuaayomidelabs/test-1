import React from 'react';
import { FEATURES } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#6A0DAD] font-bold tracking-wide uppercase text-sm mb-2">How It Works</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-black">
            Your Journey to the <span className="text-[#6A0DAD]">Big Stage</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <RevealOnScroll key={feature.id} delay={index * 150} className="h-full">
              <div className="group relative bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col items-center text-center overflow-hidden">
                
                {/* Image Overlay on Hover (Optional creative touch) */}
                <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                     style={{ backgroundImage: `url(${feature.image})` }} />

                <div className="mb-6 p-4 bg-purple-50 rounded-full text-[#6A0DAD] group-hover:bg-[#6A0DAD] group-hover:text-white transition-colors duration-300 relative z-10">
                  <feature.icon size={32} />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
