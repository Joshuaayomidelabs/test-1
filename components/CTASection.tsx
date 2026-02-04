import React from 'react';
import { Apple, Play } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section id="download" className="relative py-24 bg-[#1a052b] overflow-hidden">
        {/* Background Overlay Image */}
      <div className="absolute inset-0 z-0 opacity-20">
         <img 
          src="https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&q=80&w=2000" 
          alt="Concert crowd" 
          className="w-full h-full object-cover grayscale"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#6A0DAD]/90 to-transparent z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Join GigsConnect Today
        </h2>
        <p className="text-xl md:text-2xl text-purple-200 mb-12 font-light">
          Your next gig is just a tap away. Download the app and start your journey.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition-all transform hover:-translate-y-1 shadow-2xl border border-gray-800">
            <Apple size={32} className="fill-current" />
            <div className="text-left">
              <div className="text-xs uppercase font-medium text-gray-400">Download on the</div>
              <div className="text-xl font-bold leading-none">App Store</div>
            </div>
          </button>
          
          <button className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition-all transform hover:-translate-y-1 shadow-2xl border border-gray-800">
            <div className="relative w-8 h-8 flex items-center justify-center">
                 {/* Custom Play Store Icon simulation with Lucide Play for simplicity */}
                 <Play size={28} className="fill-current" /> 
            </div>
            <div className="text-left">
              <div className="text-xs uppercase font-medium text-gray-400">Get it on</div>
              <div className="text-xl font-bold leading-none">Google Play</div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
