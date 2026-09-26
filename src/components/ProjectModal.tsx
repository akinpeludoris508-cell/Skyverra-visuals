import React, { useEffect, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, ChevronLeft, ChevronRight, Layers, Film } from 'lucide-react';
import { ProjectItem } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ProjectModalProps {
  project: ProjectItem | null;
  projects: ProjectItem[];
  onClose: () => void;
  onSelectProject: (p: ProjectItem) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  projects,
  onClose,
  onSelectProject
}) => {
  const { theme } = useTheme();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(35);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && project) {
        const currentIndex = projects.findIndex((p) => p.id === project.id);
        const next = projects[(currentIndex + 1) % projects.length];
        onSelectProject(next);
      }
      if (e.key === 'ArrowLeft' && project) {
        const currentIndex = projects.findIndex((p) => p.id === project.id);
        const prev = projects[(currentIndex - 1 + projects.length) % projects.length];
        onSelectProject(prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, projects, onClose, onSelectProject]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-6xl max-h-[92vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl border transition-all ${
          theme === 'dark'
            ? 'bg-[#090D16] border-white/15 text-white'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase text-[#38BDF8] tracking-widest">
              {project.category}
            </span>
            <span className="text-xs opacity-40 font-mono">/</span>
            <span className="font-mono text-xs opacity-70">
              {project.client} · {project.year}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Prev / Next controls */}
            <button
              onClick={() => onSelectProject(prevProject)}
              title="Previous Project (Left Arrow)"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-[#38BDF8] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => onSelectProject(nextProject)}
              title="Next Project (Right Arrow)"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-[#38BDF8] transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="w-[1px] h-5 bg-white/10 mx-1" />
            <button
              onClick={onClose}
              title="Close (Esc)"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-500/20 hover:text-red-400 hover:border-red-400/40 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto flex-1 p-6 md:p-8 space-y-8">
          {/* Main Visual / Video Player Stage */}
          <div className="relative rounded-2xl overflow-hidden bg-black aspect-video group shadow-xl border border-white/10">
            {project.videoUrl ? (
              <video
                src={project.videoUrl}
                poster={project.thumbnail}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={project.thumbnail}
                alt={project.title}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  isPlaying ? 'scale-100' : 'scale-[1.01] brightness-90'
                }`}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

            {/* Media Overlay Controls */}
            {project.mediaType === 'video' && (
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/15 text-xs font-mono flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    AI VIDEO PREVIEW • {project.videoDuration || '00:45'}
                  </span>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/15 flex items-center justify-center hover:bg-black/80 hover:text-[#38BDF8] transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                {/* Center Play/Pause button */}
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/60 backdrop-blur-md border border-[#38BDF8]/50 text-white flex items-center justify-center hover:bg-[#38BDF8] hover:text-[#05070A] hover:scale-105 transition-all shadow-[0_0_24px_rgba(56,189,248,0.4)]"
                  >
                    {isPlaying ? <Pause className="w-7 h-7 fill-current" /> : <Play className="w-7 h-7 fill-current translate-x-0.5" />}
                  </button>
                </div>

                {/* Bottom Scrubber simulation */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-white/80">
                    <span>00:18</span>
                    <span>{project.videoDuration || '00:45'}</span>
                  </div>
                  <div
                    className="w-full h-1.5 bg-white/20 rounded-full cursor-pointer overflow-hidden"
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      setProgress(Math.round((clickX / rect.width) * 100));
                    }}
                  >
                    <div
                      className="h-full bg-[#38BDF8] rounded-full transition-all duration-150"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight mb-2">
                  {project.title}
                </h2>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
                  <span>Client: <strong className="text-white font-normal">{project.client}</strong></span>
                  <span>·</span>
                  <span>Year: <strong className="text-white font-normal">{project.year}</strong></span>
                  <span>·</span>
                  <span>Type: <strong className="text-white font-normal uppercase">{project.mediaType} Project</strong></span>
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#38BDF8] mb-2">
                  Project Brief & Narrative
                </h4>
                <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                  {project.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#38BDF8] mb-2">
                  Art Direction & Cinematography
                </h4>
                <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                  {project.creativeDirection}
                </p>
              </div>
            </div>

            {/* Sidebar Metadata */}
            <div className={`lg:col-span-4 p-6 rounded-2xl border space-y-6 ${
              theme === 'dark' ? 'bg-[#0E1524] border-white/10' : 'bg-slate-50 border-slate-200'
            }`}>
              {/* Tools & Workflow Used */}
              <div>
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#38BDF8] mb-3 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5" />
                  <span>AI Tools & Pipeline</span>
                </h4>
                <div className="space-y-1.5">
                  {project.tools.map((tool) => (
                    <div
                      key={tool}
                      className="text-xs font-mono py-1 px-2.5 rounded-md bg-white/5 border border-white/10 flex items-center justify-between"
                    >
                      <span>{tool}</span>
                      <span className="text-[#38BDF8] text-[10px]">VERIFIED</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#38BDF8] mb-3 flex items-center gap-2">
                  <Film className="w-3.5 h-3.5" />
                  <span>Key Deliverables</span>
                </h4>
                <ul className="space-y-2 text-xs">
                  {project.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 opacity-85">
                      <span className="text-[#38BDF8] font-bold">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquire about similar project */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  const target = document.querySelector('#contact');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-center w-full py-3 rounded-full text-xs font-bold tracking-widest uppercase bg-[#38BDF8] text-[#05070A] hover:bg-[#0EA5E9] transition-all"
              >
                Commission Similar Visual →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
