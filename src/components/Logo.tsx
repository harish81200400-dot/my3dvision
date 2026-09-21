import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textColor?: string;
  subtextColor?: string;
  inverted?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 40,
  showText = true,
  textColor = 'text-white',
  subtextColor = 'text-slate-400',
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Symbol Container */}
      <div
        className="relative flex items-center justify-center shrink-0 drop-shadow-md"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(37,99,235,0.25)]"
        >
          <defs>
            <filter id="logo-depth" x="-10%" y="-10%" width="120%" height="130%" filterUnits="userSpaceOnUse">
              <feDropShadow dx="2" dy="5" stdDeviation="6" floodOpacity="0.22" />
            </filter>
            <linearGradient id="blue-wing-grad" x1="120" y1="120" x2="380" y2="280" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2F80ED" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient id="blue-sub-grad" x1="130" y1="290" x2="192" y2="380" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
          </defs>

          {/* Right White Pillar / Arch (underneath the blue wing with soft shadow) */}
          <path
            d="M 272 238 L 324 182 L 324 374 C 324 376 308 376 296 364 C 278 344 272 300 272 238 Z"
            fill="#FFFFFF"
            filter="url(#logo-depth)"
          />

          {/* Left White Notch / Chevron */}
          <path
            d="M 192 250 L 130 322 L 192 360 Z"
            fill="#FFFFFF"
            filter="url(#logo-depth)"
          />

          {/* Lower Left Blue Triangular Facet */}
          <path
            d="M 130 334 L 192 378 L 192 296 Z"
            fill="url(#blue-sub-grad)"
            filter="url(#logo-depth)"
          />

          {/* Top Blue Dynamic Wing / M-Fold (Main Feature) */}
          <path
            d="M 116 148 L 236 204 L 380 116 L 273 240 L 230 298 L 192 250 L 130 232 Z"
            fill="url(#blue-wing-grad)"
            filter="url(#logo-depth)"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1">
            <span className={`font-black tracking-tight text-lg sm:text-xl ${textColor}`}>
              My<span className="text-blue-500 font-extrabold">3D</span>Vision
            </span>
          </div>
          <span className={`text-[10px] sm:text-[11px] font-medium tracking-wide mt-0.5 ${subtextColor}`}>
            Studio & Masterclasses
          </span>
        </div>
      )}
    </div>
  );
};
