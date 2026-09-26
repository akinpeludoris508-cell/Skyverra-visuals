import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Film } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { CREATOR_NAME } from '../data/portfolioData';

const SHOWREEL_VIDEO_URL =
  'https://res.cloudinary.com/so8uohki/video/upload/v1790436999/cardigan_fashion.mp4';

export const Showreel: React.FC = () => {
  const { theme } = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setProgress(
        (videoRef.current.currentTime / videoRef.current.duration) * 100
      );
    }
  };

  const chapters = [
    { title: "Valoir Haute Couture", time: "00:00", label: "Fashion Film" },
    { title: "Automotive Hyper-EV", time: "00:04", label: "Commercial" },
    { title: "Aquaria Fragrance Caustics", time: "00:08", label: "Product Ad" },
    { title: "Neo-Sanctuary 2088", time: "00:12", label: "Cinematic Film" }
  ];

  return (
    <div id="showreel" className="mb-16 scroll-mt-28">
      {/* Header with Editorial Numbering */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-mono tracking-[0.25em] text-[#38BDF8] uppercase font-semibold">
              01 / SHOWREEL
            </span>
            <span className="text-xs opacity-40 font-mono">·</span>
            <span className="text-xs font-mono opacity-60">2026 DIRECTOR'S CUT</span>
          </div>
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight uppercase">
            THE SHOWREEL
          </h3>
        </div>

        <p className="text-xs font-mono opacity-60 sm:text-right max-w-xs">
          4K UHD MASTER • 24 FPS • SOUND DESIGN BY SKYVERRA VISUALS
        </p>
      </div>

      {/* Cinematic Video Player Frame */}
      <div className="relative rounded-3xl overflow-hidden group shadow-2xl border border-white/10 bg-black">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          {/* Visual Screen with Real Video Player */}
          {isPlaying ? (
            <video
              ref={videoRef}
              src={SHOWREEL_VIDEO_URL}
              playsInline
              autoPlay
              loop
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src="/src/assets/images/hero_cinematic_film_1790433526595.jpg"
              alt="2026 Showreel Director Cut"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-1000 scale-105 filter brightness-80"
            />
          )}

          {/* Cinematic Scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none" />

          {/* Center Interactive Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <button
              onClick={togglePlay}
              className="pointer-events-auto group/btn relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-black/60 backdrop-blur-md border border-[#38BDF8]/60 text-white transition-all duration-300 hover:scale-110 hover:bg-[#38BDF8] hover:text-[#05070A] hover:border-transparent shadow-[0_0_40px_rgba(56,189,248,0.4)] cursor-pointer"
              aria-label={isPlaying ? 'Pause showreel' : 'Play showreel'}
            >
              {/* Subtle pulse ring */}
              <span className="absolute inset-0 rounded-full border border-[#38BDF8] animate-ping opacity-30" />
              {isPlaying ? (
                <Pause className="w-10 h-10 fill-current" />
              ) : (
                <Play className="w-10 h-10 fill-current translate-x-1" />
              )}
            </button>
          </div>

          {/* Top HUD Overlay */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20 pointer-events-auto">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20 text-xs font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                SKYVERRA VISUALS — REEL 2026
              </span>
              <span className="hidden md:inline-block text-xs font-mono text-white/60">
                DURATION: 00:15
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-black hover:text-[#38BDF8] transition-colors cursor-pointer"
                aria-label={isMuted ? 'Unmute showreel' : 'Mute showreel'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Bottom Scrubber & Chapter Bar */}
          <div className="absolute bottom-6 left-6 right-6 z-20 space-y-4">
            {/* Progress bar */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono text-white/80">
                <span>00:34 / 02:14</span>
                <span className="text-[#38BDF8]">{chapters[activeChapter].title}</span>
              </div>
              <div
                className="w-full h-1.5 bg-white/20 rounded-full cursor-pointer overflow-hidden"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const ratio = (e.clientX - rect.left) / rect.width;
                  setProgress(Math.round(ratio * 100));
                }}
              >
                <div
                  className="h-full bg-[#38BDF8] rounded-full transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Reel Chapters Strip */}
            <div className="hidden sm:grid grid-cols-4 gap-3 pt-2 border-t border-white/10">
              {chapters.map((chap, i) => (
                <button
                  key={chap.title}
                  onClick={() => {
                    setActiveChapter(i);
                    setProgress(i * 25 + 10);
                    setIsPlaying(true);
                  }}
                  className={`text-left p-2.5 rounded-xl transition-all border ${
                    activeChapter === i
                      ? 'bg-white/15 border-[#38BDF8] text-white shadow-xs'
                      : 'bg-black/40 border-white/10 text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#38BDF8]">
                    <span>CH. 0{i + 1}</span>
                    <span>{chap.time}</span>
                  </div>
                  <p className="text-xs font-medium truncate mt-0.5 text-white">
                    {chap.title}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
