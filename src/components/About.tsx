import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { ARTIST_STATS, SPECIALIZATIONS, CREATOR_NAME, CREATOR_ROLE, CREATOR_LOCATION } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface AboutProps {
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  const { theme } = useTheme();

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Film Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group aspect-[3/4] max-w-md mx-auto lg:max-w-none">
              <img
                src="https://res.cloudinary.com/so8uohki/image/upload/v1790454398/Replace_image_background_color_20260926212024.jpg"
                alt="Skyverra Visuals AI Video Creator Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Bottom Card Identity */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-white text-base tracking-wider uppercase">
                      {CREATOR_NAME}
                    </h4>
                    <p className="text-xs font-mono text-[#38BDF8]">
                      {CREATOR_ROLE}
                    </p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] animate-pulse" />
                </div>
                <p className="text-[11px] font-mono text-white/60 mt-2">
                  {CREATOR_LOCATION}
                </p>
              </div>
            </div>

            {/* Subtle glow backdrop */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#38BDF8]/15 rounded-full blur-3xl pointer-events-none -z-10" />
          </div>

          {/* Right Column: Bio, Specializations, and Stats */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#38BDF8]">
                  About The Artist
                </span>
              </div>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase leading-[1.05]">
                TURNING IDEAS
                <br />
                INTO VISUALS.
              </h2>
            </div>

            <p
              className={`text-lg leading-relaxed ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              I’m an AI Video Creator focused on transforming ideas, products and
              concepts into cinematic visual experiences. I combine AI generation
              with creative direction, storytelling, composition and motion to
              create visuals that feel intentional, premium and memorable.
            </p>

            {/* Specialization List (Unboxed typography per design guidelines) */}
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-xs uppercase font-mono tracking-widest text-[#38BDF8] mb-4">
                SPECIALIZED IN
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium">
                {SPECIALIZATIONS.map((spec) => (
                  <div key={spec} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                    <span className="tracking-wide">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistics Area */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {ARTIST_STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display font-extrabold text-3xl sm:text-4xl text-[#38BDF8] tabular-nums tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-wider opacity-60 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="pt-2">
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 bg-[#38BDF8] text-[#05070A] hover:bg-[#0EA5E9] hover:shadow-[0_0_24px_rgba(56,189,248,0.4)]"
              >
                <span>Book a Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
