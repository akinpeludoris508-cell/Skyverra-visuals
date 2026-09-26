import React, { useState } from 'react';
import { ArrowRight, Film, Clapperboard, Video, Sparkles, X, Play } from 'lucide-react';
import heroVisual from '../assets/images/hero_akin_visuals_1790434901719.jpg';

export const FASHION_COMMERCIAL_VIDEO_URL =
  'https://res.cloudinary.com/so8uohki/video/upload/v1790436999/cardigan_fashion.mp4';

interface HeroProps {
  onViewWorkClick: () => void;
  onContactClick: () => void;
  onOpenProject: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onViewWorkClick,
  onContactClick,
  onOpenProject,
}) => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const featurePills = [
    {
      icon: Film,
      title: 'AI Product Ads',
      subtitle: '& Commercials',
      target: '#services',
    },
    {
      icon: Clapperboard,
      title: 'Cinematic',
      subtitle: 'Videos',
      target: '#services',
    },
    {
      icon: Video,
      title: 'Social Media',
      subtitle: 'Content',
      target: '#services',
    },
    {
      icon: Sparkles,
      title: 'Custom AI',
      subtitle: 'Video Solutions',
      target: '#services',
    },
  ];

  const handlePillClick = (target: string) => {
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] lg:min-h-screen w-full flex flex-col justify-between pt-24 pb-10 overflow-hidden bg-[#05070A] text-white"
    >
      {/* Background Cinematic Visual matching attached mockup */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroVisual}
          alt="Skyverra Visuals - AI Video Creator & Cinematic Director"
          className="w-full h-full object-cover object-[center_right] sm:object-center select-none"
        />

        {/* Cinematic Vignette & Gradient Overlays for High-Contrast Readability */}
        {/* Left-to-right dark wash so headline is crisp */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070A] via-[#05070A]/85 to-transparent md:w-3/4 lg:w-3/5" />
        
        {/* Bottom dark gradient for feature pills */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-[#05070A]/60 to-transparent h-64 top-auto" />
        
        {/* Top subtle fade under navbar */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070A]/70 via-transparent to-transparent h-32" />

        {/* Ambient Sky-Blue Rim Flare */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#38BDF8]/15 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 pt-10 md:pt-16 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6 transform -translate-x-3 sm:-translate-x-5 lg:-translate-x-8 transition-transform">
            {/* Kicker Tag */}
            <div className="inline-flex items-center gap-2">
              <span className="text-xs md:text-sm font-mono font-bold tracking-[0.25em] text-[#38BDF8] uppercase">
                AI VIDEO CREATOR
              </span>
            </div>

            {/* Main Headline from Mockup */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.05] tracking-tight">
              <span>Turning Ideas into </span>
              <br className="hidden sm:inline" />
              <span className="text-[#38BDF8] drop-shadow-[0_0_35px_rgba(56,189,248,0.45)]">
                Stunning Videos
              </span>
              <br />
              <span>with AI</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-slate-200/90 text-base md:text-lg leading-relaxed max-w-xl font-normal">
              I create high-quality AI videos for brands, businesses and individuals —
              from product ads and commercials to cinematic storytelling. Let's bring
              your vision to life with the power of AI.
            </p>

            {/* Action Buttons from Mockup */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* Primary: View My Portfolio */}
              <button
                onClick={onViewWorkClick}
                className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide bg-[#38BDF8] text-[#05070A] hover:bg-[#0EA5E9] hover:shadow-[0_0_28px_rgba(56,189,248,0.6)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>View My Portfolio</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Secondary: Get In Touch */}
              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide bg-[#05070A]/60 hover:bg-white/10 text-white border border-white/30 hover:border-[#38BDF8] hover:text-[#38BDF8] backdrop-blur-md transition-all duration-300 cursor-pointer"
              >
                <span>Get In Touch</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Glowing Play Button & Cursive 'Ideas into Visuals' */}
          <div className="lg:col-span-5 xl:col-span-6 relative flex items-center justify-center lg:justify-end min-h-[160px] lg:min-h-[360px]">
            {/* Glowing Translucent Play Button on subject's shoulder */}
            <div className="relative flex items-center gap-6 md:gap-8">
              <button
                onClick={() => setShowVideoModal(true)}
                aria-label="Play fashion commercial video"
                className="group relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0284C7]/40 hover:bg-[#38BDF8] border-2 border-[#38BDF8] flex items-center justify-center text-white hover:text-[#05070A] backdrop-blur-md shadow-[0_0_35px_rgba(56,189,248,0.7)] transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                {/* Ping wave animation */}
                <span className="absolute inset-0 rounded-full border-2 border-[#38BDF8] animate-ping opacity-40 group-hover:opacity-75" />
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 fill-current translate-x-0.5 transition-transform group-hover:scale-110"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 4l15 8-15 8V4z" />
                </svg>
              </button>

              {/* Artistic Cursive Handwriting "Ideas into Visuals" with Dynamic Sketched Underline */}
              <div className="relative select-none -rotate-6 transform hover:rotate-0 transition-transform duration-300">
                <div className="font-handwriting text-3xl sm:text-4xl md:text-5xl text-white/95 leading-tight font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                  <span>Ideas</span>
                  <br />
                  <span className="pl-4">into</span>
                  <br />
                  <span>Visuals</span>
                </div>

                {/* Hand-drawn sketch strokes underneath */}
                <svg
                  className="w-28 sm:w-36 h-5 text-[#38BDF8] mt-1 overflow-visible opacity-90"
                  viewBox="0 0 140 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M4 14 C 35 6, 95 18, 136 8" />
                  <path d="M12 18 C 45 12, 85 20, 128 14" opacity="0.6" strokeWidth="1.8" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Feature Strip with 4 Badges matching mockup */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 mt-12 md:mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 pt-6 border-t border-white/10">
          {featurePills.map((pill, idx) => {
            const Icon = pill.icon;
            return (
              <button
                key={idx}
                onClick={() => handlePillClick(pill.target)}
                className="group flex items-center gap-3 sm:gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#38BDF8]/50 backdrop-blur-md transition-all duration-300 text-left cursor-pointer hover:-translate-y-0.5"
              >
                {/* Cyan glowing round/hex icon badge */}
                <div className="w-10 h-10 rounded-xl bg-[#0369A1]/30 border border-[#38BDF8]/40 flex items-center justify-center shrink-0 group-hover:border-[#38BDF8] group-hover:bg-[#38BDF8] group-hover:text-[#05070A] text-[#38BDF8] shadow-[0_0_12px_rgba(56,189,248,0.25)] transition-all duration-300">
                  <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </div>

                {/* Text details */}
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#38BDF8] transition-colors leading-tight truncate">
                    {pill.title}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-tight truncate">
                    {pill.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Hero Video Cinema Modal */}
      {showVideoModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/90 backdrop-blur-2xl animate-fade-in"
          onClick={() => setShowVideoModal(false)}
        >
          <div
            className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)] border border-white/20 bg-[#090D16]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/70 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#38BDF8] font-bold">
                  Skyverra Visuals • Featured AI Fashion Commercial
                </span>
              </div>
              <button
                onClick={() => setShowVideoModal(false)}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/15 transition-colors cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Player Stage */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <video
                src={FASHION_COMMERCIAL_VIDEO_URL}
                autoPlay
                controls
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
