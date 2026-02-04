import React from 'react';
import { ArrowRight, Smartphone } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=2560" 
          alt="African music concert scene" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a0445]/90 via-[#6A0DAD]/80 to-black/70 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Connect, Collaborate, and <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
            Find Gigs Across Africa
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-purple-100 mb-10 max-w-3xl mx-auto font-light">
          Showcase your talent and access gigs in your city or across the continent. 
          The ultimate platform for African music professionals.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#download"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#6A0DAD] rounded-full font-bold text-lg hover:bg-gray-100 transition-transform transform hover:scale-105 shadow-lg"
          >
            <Smartphone size={20} />
            Get the App
          </a>
          <a 
            href="#features"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all"
          >
            Learn More
            <ArrowRight size={20} />
          </a>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[60px] md:h-[100px] w-full fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};
