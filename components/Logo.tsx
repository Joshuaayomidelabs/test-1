import React from 'react';

export const Logo: React.FC<{ className?: string; theme?: 'light' | 'dark' }> = ({ className = "h-8", theme = 'dark' }) => {
  const textColor = theme === 'dark' ? 'text-white' : 'text-[#6A0DAD]';

  return (
    <div className={`flex items-center ${className}`}>
      <span className={`font-bold text-2xl tracking-tight ${textColor}`}>
        Gigs<span className={theme === 'dark' ? 'text-purple-400' : 'text-black'}>Connect</span>
      </span>
    </div>
  );
};