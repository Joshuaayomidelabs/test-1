import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white shadow-lg py-3' 
      : 'bg-transparent py-5'
  }`;

  const linkClass = isScrolled
    ? 'text-gray-800 hover:text-[#6A0DAD] font-medium'
    : 'text-white hover:text-purple-200 font-medium';
  
  const buttonClass = isScrolled
    ? 'bg-[#6A0DAD] text-white hover:bg-[#520a8c]'
    : 'bg-white text-[#6A0DAD] hover:bg-gray-100';

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo theme={isScrolled ? 'light' : 'dark'} />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className={linkClass}>How it Works</a>
            <a href="#pricing" className={linkClass}>Pricing</a>
            <a href="#testimonials" className={linkClass}>Stories</a>
            <a 
              href="#download" 
              className={`px-5 py-2 rounded-full font-semibold transition-all shadow-md transform hover:scale-105 ${buttonClass}`}
            >
              Get the App
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isScrolled ? 'text-[#6A0DAD]' : 'text-white'}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center space-y-4 animate-fade-in">
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium text-lg">How it Works</a>
          <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium text-lg">Pricing</a>
          <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium text-lg">Stories</a>
          <a 
            href="#download" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-6 py-2 rounded-full bg-[#6A0DAD] text-white font-semibold"
          >
            Get the App
          </a>
        </div>
      )}
    </nav>
  );
};
