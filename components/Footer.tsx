import React from 'react';
import { Logo } from './Logo';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Logo className="mb-6" theme="dark" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting African talent with opportunities globally. The pulse of the entertainment industry.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#6A0DAD]">Platform</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Find Gigs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Create Profile</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#6A0DAD]">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#6A0DAD]">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#6A0DAD] transition-colors"><Instagram size={18} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#6A0DAD] transition-colors"><Twitter size={18} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#6A0DAD] transition-colors"><Facebook size={18} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#6A0DAD] transition-colors"><Linkedin size={18} /></a>
            </div>
            <div className="flex items-center text-gray-400 text-sm gap-2">
                <Mail size={16} />
                <span>hello@gigsconnect.africa</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} GigsConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
