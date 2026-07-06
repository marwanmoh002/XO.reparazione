import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 60, 
  showText = true 
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* High-fidelity Vector SVG Logo Badge */}
      <svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
      >
        <defs>
          {/* Circular Metallic Gradients */}
          <radialGradient id="logo-bg" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
            <stop offset="0%" stopColor="#1e1e24" />
            <stop offset="60%" stopColor="#0a0a0d" />
            <stop offset="100%" stopColor="#020203" />
          </radialGradient>

          <linearGradient id="logo-rim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="35%" stopColor="#4b5563" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#1f2937" />
            <stop offset="65%" stopColor="#9ca3af" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>

          <linearGradient id="gear-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4b5563" />
            <stop offset="50%" stopColor="#374151" />
            <stop offset="100%" stopColor="#1f2937" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Outer Metallic Beveled Rim */}
        <circle cx="256" cy="256" r="248" fill="none" stroke="url(#logo-rim)" strokeWidth="12" />
        
        {/* 2. Deep Carbon Black Core */}
        <circle cx="256" cy="256" r="238" fill="url(#logo-bg)" />

        {/* 3. High-Tech Printed Circuit Board (PCB) Tracks */}
        <g stroke="#ffffff" strokeOpacity="0.12" strokeWidth="2.5" fill="none" strokeLinecap="round">
          {/* Top-left track */}
          <path d="M 60,180 L 140,180 L 180,140 L 220,140" />
          <circle cx="220" cy="140" r="4" fill="#ffffff" fillOpacity="0.4" stroke="none" />
          <circle cx="60" cy="180" r="3" fill="#ffffff" fillOpacity="0.2" stroke="none" />

          {/* Top track bending into central region */}
          <path d="M 160,80 L 240,80 L 270,110 L 270,150" />
          <circle cx="270" cy="150" r="4.5" fill="#ffffff" fillOpacity="0.4" stroke="none" />

          {/* Bottom-left track */}
          <path d="M 80,340 L 150,340 L 190,380 L 290,380" />
          <circle cx="290" cy="380" r="4" fill="#ffffff" fillOpacity="0.4" stroke="none" />

          {/* Diagonal left track */}
          <path d="M 100,270 L 160,210 L 210,210" />
          <circle cx="210" cy="210" r="4" fill="#ffffff" fillOpacity="0.4" stroke="none" />

          {/* Circular tracking ring accents */}
          <path d="M 90,256 A 166,166 0 0,1 190,95" strokeDasharray="15, 10" />
          <path d="M 120,256 A 136,136 0 0,0 230,390" strokeDasharray="8, 12" />
        </g>

        {/* 4. Mechanic Cog Wheel / Gear on Right Side */}
        <g transform="translate(380, 256)" fill="url(#gear-gradient)" stroke="#111827" strokeWidth="2">
          {/* Gear Outer Teeth (12-tooth gear) */}
          <g transform="rotate(15)">
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
              <path
                key={angle}
                d="M -16,-92 L 16,-92 L 22,-68 L -22,-68 Z"
                transform={`rotate(${angle})`}
              />
            ))}
          </g>
          {/* Main Gear Outer Ring */}
          <circle cx="0" cy="0" r="76" />
          {/* Inner Cutouts for Gear Spokes */}
          <circle cx="0" cy="0" r="54" fill="#050507" />
          
          {/* Gear Spokes */}
          {[0, 60, 120].map((angle) => (
            <line
              key={angle}
              x1="0"
              y1="-74"
              x2="0"
              y2="74"
              stroke="url(#gear-gradient)"
              strokeWidth="16"
              transform={`rotate(${angle})`}
            />
          ))}

          {/* Central Gear Hub */}
          <circle cx="0" cy="0" r="32" fill="url(#gear-gradient)" />
          <circle cx="0" cy="0" r="22" fill="#050507" />

          {/* 5. Crossed Tools Inside the Gear (Wrench & Screwdriver) */}
          <g stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Screwdriver (Diagonal Top-Left to Bottom-Right) */}
            <g transform="rotate(-45)">
              {/* Handle */}
              <path d="M -4,-36 L 4,-36 L 6,-14 L -6,-14 Z" fill="#9ca3af" stroke="none" />
              <path d="M -2,-14 L 2,-14 L 2,24 L -2,24 Z" fill="#ffffff" stroke="none" />
              {/* Tip */}
              <line x1="-4" y1="24" x2="4" y2="24" stroke="#ffffff" strokeWidth="2" />
            </g>

            {/* Wrench (Diagonal Bottom-Left to Top-Right) */}
            <g transform="rotate(45)">
              {/* Shaft */}
              <line x1="0" y1="-32" x2="0" y2="28" stroke="#9ca3af" strokeWidth="8" />
              {/* Top Open Jaw */}
              <path
                d="M -12,-32 C -18,-24 -18,-14 -12,-8 C -8,-4 -2,-4 2,-8"
                fill="none"
                stroke="#ffffff"
                strokeWidth="5"
              />
              {/* Bottom Closed Ring */}
              <circle cx="0" cy="28" r="10" fill="none" stroke="#ffffff" strokeWidth="5" />
            </g>
          </g>
        </g>

        {/* 6. Techno/Futuristic "XO" Branding */}
        <g fill="#ffffff" filter="url(#glow)">
          {/* Custom Stylized Letter "X" */}
          <path d="M 68,160 L 102,160 L 138,218 L 174,160 L 208,160 L 158,236 L 210,312 L 176,312 L 138,252 L 100,312 L 66,312 L 118,236 Z" />
          
          {/* Custom Stylized Letter "O" (Squircle / Rounded Techno Box) */}
          <path d="M 230,190 C 230,172 242,160 260,160 L 310,160 C 328,160 340,172 340,190 L 340,282 C 340,300 328,312 310,312 L 260,312 C 242,312 230,300 230,282 Z M 268,194 L 268,278 C 268,284 272,288 278,288 L 292,288 C 298,288 302,284 302,278 L 302,194 C 302,188 298,184 292,184 L 278,184 C 272,184 268,188 268,194 Z" />
        </g>

        {/* 7. Lowercase Subtitle "riparazione & vendita" */}
        <text
          x="204"
          y="354"
          fontFamily="var(--font-sans), system-ui, -apple-system, sans-serif"
          fontWeight="600"
          fontSize="17.5"
          fill="#e2e8f0"
          letterSpacing="2.2"
          textAnchor="middle"
          className="uppercase tracking-widest font-bold"
        >
          riparazione & vendita
        </text>
      </svg>

      {/* Main Brand Text on the right (Optional) */}
      {showText && (
        <div className="flex flex-col select-none">
          <span className="text-lg md:text-xl font-black font-display tracking-wider text-white leading-none">
            XO
          </span>
          <span className="text-[9px] uppercase font-mono tracking-widest text-zinc-400 mt-1 leading-none group-hover:text-white transition-colors">
            RIPARAZIONE
          </span>
        </div>
      )}
    </div>
  );
};
