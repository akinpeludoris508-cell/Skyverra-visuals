import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Testimonials: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#38BDF8]">
              Client Endorsements
            </span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase">
            WORDS FROM CLIENTS
          </h2>
          <p
            className={`mt-4 text-base md:text-lg ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Trusted by forward-thinking marketing executives, luxury fashion
            houses, and commercial production directors worldwide.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-[#090D16] border-white/10 hover:border-[#38BDF8]/40'
                  : 'bg-white border-slate-200 hover:border-[#38BDF8] shadow-sm'
              }`}
            >
              <div>
                <Quote className="w-8 h-8 text-[#38BDF8]/40 mb-6" />
                <p
                  className={`text-base leading-relaxed italic ${
                    theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
                  }`}
                >
                  "{t.quote}"
                </p>
              </div>

              {/* Attributable Client Identity */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <h4 className="font-display font-bold text-base tracking-wide">
                  {t.clientName}
                </h4>
                <p className="text-xs font-mono text-[#38BDF8]">
                  {t.role} · {t.company}
                </p>
                <p className="text-[11px] font-mono text-slate-400 mt-1">
                  Project: {t.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
