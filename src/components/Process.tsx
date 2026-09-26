import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Cpu, Sliders, Film, Sparkles } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { Showreel } from './Showreel';

export const Process: React.FC = () => {
  const { theme } = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [
    <Sparkles className="w-5 h-5 text-[#38BDF8]" />,
    <Sliders className="w-5 h-5 text-[#38BDF8]" />,
    <Cpu className="w-5 h-5 text-[#38BDF8]" />,
    <Film className="w-5 h-5 text-[#38BDF8]" />
  ];

  return (
    <section id="workflow" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#38BDF8]">
              Methodology & Workflow
            </span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase">
            FROM IDEA TO FINAL FRAME
          </h2>
          <p
            className={`mt-4 text-base md:text-lg max-w-2xl ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            A disciplined, four-stage production pipeline combining directorial
            rigor with cutting-edge neural generative architectures.
          </p>
        </div>

        {/* Featured Showreel Player (Positioned between 'From Idea to Final Frame' and the Concept & Workflow boxes) */}
        <Showreel />

        {/* Interactive Step Switcher & Detailed Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step Selector List */}
          <div className="lg:col-span-5 space-y-4">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-2xl cursor-pointer border transition-all duration-300 ${
                    isActive
                      ? 'border-[#38BDF8] bg-[#38BDF8]/10 shadow-[0_0_24px_rgba(56,189,248,0.15)]'
                      : theme === 'dark'
                      ? 'border-white/10 bg-[#090D16] hover:border-white/20 hover:bg-white/5'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-display font-extrabold text-lg text-[#38BDF8]">
                        {step.number}
                      </span>
                      <h3 className="font-display font-bold text-lg uppercase tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                    {isActive ? (
                      <span className="text-xs font-mono text-[#38BDF8] flex items-center gap-1">
                        ACTIVE <ArrowRight className="w-3 h-3" />
                      </span>
                    ) : (
                      <span className="text-xs font-mono opacity-40">STAGE</span>
                    )}
                  </div>

                  <p className="text-xs font-mono text-slate-400 mt-1">
                    {step.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Detailed Stage Showcase */}
          <div
            className={`lg:col-span-7 p-8 sm:p-10 rounded-3xl border relative transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-[#090D16] border-white/10 shadow-2xl'
                : 'bg-white border-slate-200 shadow-xl'
            }`}
          >
            {/* Top Stage Tag */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/40 flex items-center justify-center">
                  {stepIcons[activeStep]}
                </div>
                <div>
                  <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-widest">
                    STAGE {PROCESS_STEPS[activeStep].number}
                  </span>
                  <h4 className="font-display font-bold text-2xl uppercase">
                    {PROCESS_STEPS[activeStep].title}
                  </h4>
                </div>
              </div>
              <span className="font-mono text-xs opacity-50 uppercase">
                Step {activeStep + 1} of 4
              </span>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <div>
                <h5 className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] mb-2">
                  Stage Overview
                </h5>
                <p
                  className={`text-lg leading-relaxed ${
                    theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
                  }`}
                >
                  {PROCESS_STEPS[activeStep].description}
                </p>
              </div>

              {/* Concrete Key Deliverable */}
              <div
                className={`p-5 rounded-2xl border ${
                  theme === 'dark' ? 'bg-[#0E1524] border-white/10' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Tangible Deliverable</span>
                </div>
                <p className="font-semibold text-base">
                  {PROCESS_STEPS[activeStep].deliverable}
                </p>
              </div>

              {/* Progress dots */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div className="flex items-center gap-2">
                  {PROCESS_STEPS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeStep === i
                          ? 'w-8 bg-[#38BDF8]'
                          : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to step ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() =>
                    setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length)
                  }
                  className="inline-flex items-center gap-2 text-xs font-bold font-mono uppercase text-[#38BDF8] hover:text-sky-300 transition-colors"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
