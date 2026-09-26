import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const Marquee: React.FC = () => {
  const { theme } = useTheme();

  const items = [
    "AI VIDEO",
    "AI COMMERCIALS",
    "PRODUCT ADS",
    "CINEMATIC VISUALS",
    "AI ART DIRECTION",
    "BRAND STORYTELLING",
    "LUXURY VISUALS",
    "HAUTE COUTURE",
    "NEURAL MOTION"
  ];

  return (
    <div
      className={`py-5 overflow-hidden border-y transition-colors ${
        theme === 'dark'
          ? 'bg-[#080C14] border-white/10 text-slate-300'
          : 'bg-slate-100/80 border-slate-200 text-slate-700'
      }`}
    >
      <div className="flex animate-marquee select-none whitespace-nowrap">
        {[...items, ...items, ...items].map((text, i) => (
          <div key={i} className="flex items-center gap-6 mx-4">
            <span className="font-display font-bold text-xs tracking-[0.25em] uppercase hover:text-[#38BDF8] transition-colors">
              {text}
            </span>
            <span className="text-[#38BDF8] text-sm opacity-80" aria-hidden="true">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
