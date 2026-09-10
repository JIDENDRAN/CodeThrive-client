import React from 'react';

export const Logo = ({ size = 'md', showText = true, showTagline = true, className = '', variant = 'auto', _monochrome = false, animateThrive = false }) => {
  const sizeMap = {
    sm: { img: 'w-8 h-8', text: 'text-base sm:text-lg', sub: 'text-[8px]' },
    md: { img: 'w-10 h-10', text: 'text-xl sm:text-2xl', sub: 'text-[9px]' },
    lg: { img: 'w-10 h-10 sm:w-12 sm:h-12', text: 'text-xl sm:text-3xl', sub: 'text-[10px]' },
    xl: { img: 'w-16 h-16', text: 'text-3xl sm:text-4xl', sub: 'text-[11px]' }
  };

  const { img, text, sub } = sizeMap[size] || sizeMap.md;
  const isLightMode = variant === 'dark' || variant === 'auto';

  return (
    <div className={`flex items-center gap-2.5 select-none group ${animateThrive ? 'animate-soft-zoom' : ''} ${className}`}>
      {/* Company logo symbol — transparent background PNG */}
      <div className={`relative ${img} shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <img
          src="/brand-symbol-transparent.png"
          alt="CODETHRIVE INFOTECH Logo"
          className="w-full h-full object-contain filter drop-shadow-sm"
          onError={(e) => {
            (e.target).src = '/logo.png';
          }}
        />
      </div>

      {/* Typography */}
      {showText && (
        <div className="flex flex-col justify-center text-left leading-none">
          <div className={`flex items-baseline gap-1 font-black tracking-tight leading-none ${text}`}>
            <span className="text-white">CODETHRIVE</span>
            <span className="text-white">INFOTECH</span>
          </div>

          {showTagline && (
            <span className={`mt-1 font-semibold tracking-wider leading-none ${sub} ${isLightMode ? 'text-[#4B5563]' : 'text-slate-300'}`}>
              Progress. Cultivate. Innovate.
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;
