import React from 'react';
import { Check } from 'lucide-react';
import { PLANS } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#6A0DAD] font-bold tracking-wide uppercase text-sm mb-2">Pricing</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-black">
            Choose Your <span className="text-[#6A0DAD]">Plan</span>
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Flexible options designed for every stage of your music career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan, index) => (
            <RevealOnScroll key={plan.id} delay={index * 200}>
              <div 
                className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 h-full flex flex-col cursor-pointer
                  ${plan.isPopular 
                    ? 'border-[#6A0DAD] transform md:-translate-y-4 shadow-2xl hover:scale-[1.03] hover:shadow-[0_20px_40px_-15px_rgba(106,13,173,0.3)]' 
                    : 'border-gray-200 hover:border-purple-300 hover:shadow-2xl hover:-translate-y-2'
                  }
                  transition-all duration-300 ease-out
                `}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#6A0DAD] text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-md">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                  <div className="flex items-baseline mb-1">
                    <span className={`text-4xl font-extrabold ${plan.isPopular ? 'text-[#6A0DAD]' : 'text-gray-900'}`}>
                      {plan.priceLocal}
                    </span>
                  </div>
                  {plan.priceIntl && (
                     <p className="text-sm text-gray-500 font-medium">or {plan.priceIntl}</p>
                  )}
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 
                        ${plan.isPopular ? 'bg-[#6A0DAD] text-white' : 'bg-purple-100 text-[#6A0DAD]'}`}>
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 font-medium leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-200 border-2
                    ${plan.isPopular 
                      ? 'bg-[#6A0DAD] border-[#6A0DAD] text-white hover:bg-[#550b8c] hover:border-[#550b8c] shadow-lg' 
                      : 'bg-transparent border-[#6A0DAD] text-[#6A0DAD] hover:bg-[#6A0DAD] hover:text-white'
                    }
                  `}
                >
                  {plan.buttonText}
                </button>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};