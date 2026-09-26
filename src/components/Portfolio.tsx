import React, { useState } from 'react';
import { Play, ArrowRight, ArrowUpRight, Sparkles, Pause } from 'lucide-react';
import { ProjectCategory, ProjectItem } from '../types';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';

import perfumeImg from '../assets/images/perfume_commercial_1790437410274.jpg';
import travelImg from '../assets/images/travel_cinematic_1790437423832.jpg';
import techImg from '../assets/images/tech_headphones_1790437436538.jpg';
import fashionImg from '../assets/images/portfolio_fashion_film_1790433536969.jpg';
import hyperEvImg from '../assets/images/hero_cinematic_film_1790433526595.jpg';
import cosmicImg from '../assets/images/cosmic_odyssey_1790439294246.jpg';
import cyberImg from '../assets/images/portfolio_cyber_concept_1790433558485.jpg';
import watchImg from '../assets/images/luxury_watch_1790439304811.jpg';
import audioImg from '../assets/images/portfolio_audio_product_1790433581856.jpg';
import aquariaImg from '../assets/images/portfolio_perfume_ad_1790433547758.jpg';

interface PortfolioProps {
  onSelectProject: (project: ProjectItem) => void;
}

interface LatestCreation {
  id: string;
  title: string;
  duration: string;
  image: string;
  videoUrl?: string;
  category: Exclude<ProjectCategory, 'ALL'>;
  client: string;
  description: string;
  tools: string[];
}

const CARDIGAN_FASHION_VIDEO_URL = 'https://res.cloudinary.com/so8uohki/video/upload/v1790436999/cardigan_fashion.mp4';

const LATEST_CREATIONS: LatestCreation[] = [
  {
    id: 'luxury-perfume-commercial',
    title: 'Luxury Perfume Commercial',
    duration: '0:30',
    image: perfumeImg,
    category: 'COMMERCIAL',
    client: 'Aura Luxe Fragrances',
    description: 'Cinematic luxury fragrance commercial featuring amber glass flacons, golden dusk backlight, and shattered glass reflections created with neural generative engines.',
    tools: ['Runway Gen-3', 'Midjourney v6.1', 'DaVinci Resolve'],
  },
  {
    id: 'cinematic-travel-video',
    title: 'Cinematic Travel Video',
    duration: '0:45',
    image: travelImg,
    category: 'CINEMATIC',
    client: 'Alpine Expeditions',
    description: 'Photorealistic travel documentary vista of an adventurous hiker standing on an alpine mountain cliff over pristine fjord waters with dynamic drone tracking.',
    tools: ['Kling 1.5 Pro', 'Luma Dream Machine', 'Premiere Pro'],
  },
  {
    id: 'tech-product-ad',
    title: 'Tech Product Ad',
    duration: '0:28',
    image: techImg,
    category: 'PRODUCT ADS',
    client: 'Nova Acoustics',
    description: 'High-concept consumer tech commercial showcasing futuristic wireless headphones on a glowing geometric neon cyan pedestal with laser volumetric lighting.',
    tools: ['ComfyUI', 'Flux.1 Dev', 'After Effects'],
  },
  {
    id: 'valoir-haute-couture',
    title: 'Valoir Haute Couture',
    duration: '1:12',
    image: fashionImg,
    category: 'CINEMATIC',
    client: 'Maison Valoir Paris',
    description: 'Avant-garde luxury fashion film exploring sculptural liquid chrome garments that morph with choreography.',
    tools: ['Kling 1.5 Pro', 'Flux.1 Dev', 'Luma Dream Machine'],
  },
  {
    id: 'aura-hyper-ev',
    title: 'Aura Hyper EV Commercial',
    duration: '0:48',
    image: hyperEvImg,
    category: 'COMMERCIAL',
    client: 'Aura Automobili',
    description: 'High-octane commercial campaign film introducing a next-generation electric hypercar concept through volumetric rain and reflective asphalt.',
    tools: ['Runway Gen-3 Alpha', 'Midjourney v6.1', 'DaVinci Resolve'],
  },
  {
    id: 'cosmic-nebula-odyssey',
    title: 'Cosmic Nebula Odyssey',
    duration: '1:20',
    image: cosmicImg,
    category: 'CINEMATIC',
    client: 'Stellar Studios',
    description: 'Cinematic sci-fi exploration sequence with an exploratory vessel gliding through vibrant violet and cyan stellar nebulae.',
    tools: ['Runway Gen-3', 'Flux.1 Dev', 'After Effects'],
  },
  {
    id: 'neo-sanctuary-architecture',
    title: 'Neo-Sanctuary Concept',
    duration: '1:34',
    image: cyberImg,
    category: 'CINEMATIC',
    client: 'Kaelen Architecture',
    description: 'Cinematic concept trailer for high-altitude carbon-fiber architectural sanctuaries designed for extreme climate resilience.',
    tools: ['Kling AI Pro', 'Flux.1 Schnell', 'Premiere Pro'],
  },
  {
    id: 'luxury-titanium-watch',
    title: 'Luxury Titanium Chrono',
    duration: '0:35',
    image: watchImg,
    category: 'PRODUCT ADS',
    client: 'Chronos Genève',
    description: 'Floating titanium mechanical chronograph with exposed cyan gears and splashing crystal water droplets.',
    tools: ['Midjourney v6.1', 'Runway Gen-3', 'DaVinci Resolve'],
  },
  {
    id: 'soniq-sphere-levitation',
    title: 'Soniq Sphere Levitation',
    duration: '0:42',
    image: audioImg,
    category: 'PRODUCT ADS',
    client: 'Soniq Audio Labs',
    description: 'Zero-gravity levitating acoustic sphere product launch video featuring precision resonance waveforms and tactile textures.',
    tools: ['ComfyUI', 'Runway Gen-3', 'Flux Realism LoRA'],
  },
  {
    id: 'aquaria-lumen-parfum',
    title: 'Aquaria Lumen Liquid Parfum',
    duration: '0:30',
    image: aquariaImg,
    category: 'COMMERCIAL',
    client: 'Lumen Luxe Fragrances',
    description: 'Sensory underwater commercial of crystal fragrance flacons immersed in ethereal azure aquatic caustics with bioluminescent light particles.',
    tools: ['Runway Gen-3', 'Midjourney v6.1', 'After Effects'],
  },
];

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');
  const [isPaused, setIsPaused] = useState(false);

  const categories: ProjectCategory[] = [
    'ALL',
    'AI VIDEO',
    'COMMERCIAL',
    'PRODUCT ADS',
    'CINEMATIC',
    'AI IMAGES',
  ];

  const filteredProjects =
    activeCategory === 'ALL'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  const handleCreationClick = (item: LatestCreation) => {
    const project: ProjectItem = {
      id: item.id,
      title: item.title,
      category: item.category,
      client: item.client,
      year: '2026',
      description: item.description,
      creativeDirection: 'Photorealistic AI generative synthesis, cinematic lighting, and custom sound design.',
      thumbnail: item.image,
      mediaType: 'video',
      videoDuration: item.duration,
      videoUrl: 'https://res.cloudinary.com/so8uohki/video/upload/v1790436999/cardigan_fashion.mp4',
      aspectRatio: 'square',
      tools: item.tools,
      deliverables: ['4K Master Video', 'Social Cutdowns (9:16 / 1:1)', 'Key Art Posters'],
      featured: true,
    };
    onSelectProject(project);
  };

  return (
    <section
      id="portfolio"
      className="relative w-full bg-[#D7EEFF] text-[#0F172A] py-14 sm:py-16 md:py-20 border-y border-[#BAE6FD]/70 transition-colors"
    >
      {/* Wrapper without max-w constraint so the carousel div can touch the section edges */}
      <div className="w-full">
        {/* Vertically Stacked Layout: Centered Heading Block on Top, Carousel Underneath */}
        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12 w-full">
          {/* Centered Top Block: Heading, Subtitle & View Full Portfolio Pill Button */}
          <div className="w-full max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col items-center text-center justify-center">
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.28em] text-[#0284C7] mb-2.5 text-center">
              FEATURED WORK
            </span>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl xl:text-[44px] text-[#0F172A] tracking-tight leading-[1.12] text-center">
              My Latest <span className="text-[#0EA5E9]">Creations</span>
            </h2>

            <p className="mt-3.5 text-slate-600 font-body text-sm sm:text-base leading-relaxed max-w-lg text-center mx-auto">
              A selection of AI videos I've created for brands, businesses and creative projects.
            </p>

            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="mt-6 sm:mt-7 px-7 py-2.5 rounded-full border-2 border-[#38BDF8] text-[#0284C7] bg-white/80 hover:bg-[#38BDF8] hover:text-[#05070A] font-semibold text-xs sm:text-sm tracking-wide inline-flex items-center justify-center gap-2.5 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
            >
              <span>{showAllProjects ? 'Hide Full Archive' : 'View Full Portfolio'}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Underneath: 10 Video Cards Rotating from Left to Right - Touches Edges */}
          <div className="w-full relative">
            <div className="relative w-full overflow-hidden rounded-none bg-white/40 py-5 sm:py-7 border-y border-[#BAE6FD]/80 shadow-sm backdrop-blur-xs">
              
              {/* Controls & Rotation Status Bar (constrained to standard reading width) */}
              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between pb-4 mb-3 border-b border-[#BAE6FD]/50 text-xs">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0284C7] opacity-75 ${isPaused ? 'hidden' : ''}`} />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0284C7]" />
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#0284C7]">
                    Rotating Left → Right &bull; Featured Showcase
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-[#0F172A] border border-[#BAE6FD] hover:border-[#38BDF8] text-xs font-medium shadow-xs hover:shadow transition-all cursor-pointer"
                    title={isPaused ? 'Resume Rotation' : 'Pause Rotation'}
                  >
                    {isPaused ? (
                      <>
                        <Play className="w-3.5 h-3.5 text-[#0284C7] fill-current" />
                        <span>Resume</span>
                      </>
                    ) : (
                      <>
                        <Pause className="w-3.5 h-3.5 text-[#0284C7]" />
                        <span>Pause</span>
                      </>
                    )}
                  </button>
                  <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
                    (Hover to pause & click to watch)
                  </span>
                </div>
              </div>

              {/* Edge Gradient Fades for Smooth Seamless Horizon */}
              <div className="pointer-events-none absolute left-0 top-14 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-[#D7EEFF] via-[#D7EEFF]/70 to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-14 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-[#D7EEFF] via-[#D7EEFF]/70 to-transparent z-10" />

              {/* Rotating Video Track (Left to Right) */}
              <div className="overflow-hidden py-1.5 px-3 sm:px-6">
                <div
                  className={`animate-rotate-ltr flex gap-4 sm:gap-6 md:gap-7 ${isPaused ? 'is-paused' : ''}`}
                >
                  {/* Duplicated 10 items for continuous infinite seamless rotation */}
                  {[...LATEST_CREATIONS, ...LATEST_CREATIONS].map((creation, idx) => (
                    <div
                      key={`${creation.id}-${idx}`}
                      onClick={() => handleCreationClick(creation)}
                      className="group cursor-pointer flex flex-col w-[calc(42vw-14px)] sm:w-[calc(39vw-18px)] md:w-[calc(36vw-22px)] lg:w-[calc(33vw-20px)] max-w-[480px] shrink-0 select-none"
                    >
                      {/* Video Thumbnail Box - Sized cleanly and proportionally reduced */}
                      <div className="relative aspect-video w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 shadow-md transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1.5 border border-white/30">
                        {/* Autoplaying HTML5 Video */}
                        <video
                          src={creation.videoUrl || CARDIGAN_FASHION_VIDEO_URL}
                          poster={creation.image}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="auto"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 pointer-events-none"
                        />

                        {/* Dark gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent group-hover:bg-black/30 transition-colors pointer-events-none" />

                        {/* Centered Translucent Frosted Glass Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-11 h-11 sm:w-13 sm:h-13 md:w-15 md:h-15 rounded-full bg-black/45 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#38BDF8] group-hover:text-[#05070A] group-hover:border-[#38BDF8]">
                            <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-current translate-x-0.5" />
                          </div>
                        </div>

                        {/* Category Chip */}
                        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[9px] sm:text-xs font-mono font-medium text-[#38BDF8] uppercase tracking-wider border border-white/10 z-10 pointer-events-none">
                          {creation.category}
                        </div>

                        {/* Autoplay Live Indicator badge */}
                        <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center gap-1.5 z-10 pointer-events-none">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-[9px] sm:text-[10px] font-mono font-bold text-white/90 uppercase tracking-wider">AUTOPLAY</span>
                        </div>

                        {/* Client / Tag on bottom left inside image on larger screens */}
                        <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 hidden sm:block z-10 pointer-events-none">
                          <span className="text-[10px] sm:text-[11px] font-mono text-white/80 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded border border-white/10">
                            {creation.client}
                          </span>
                        </div>
                      </div>

                      {/* Title & Duration Details Underneath */}
                      <div className="mt-2.5 px-1 flex items-center justify-between gap-2.5">
                        <span className="font-bold text-xs sm:text-sm md:text-base text-[#0F172A] tracking-tight truncate group-hover:text-[#0284C7] transition-colors">
                          {creation.title}
                        </span>
                        <span className="font-mono text-[11px] sm:text-xs text-slate-700 font-semibold bg-white/70 px-2 py-0.5 rounded border border-[#BAE6FD]/60 shrink-0">
                          {creation.duration}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Full Portfolio Archive */}
        {showAllProjects && (
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 mt-14 pt-12 border-t border-[#BAE6FD]/80 animate-in fade-in duration-500">
            {/* Header & Filter Tabs */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[#0284C7]" />
                  <span className="text-xs font-mono text-[#0284C7] tracking-wider uppercase font-semibold">
                    Complete Archive
                  </span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0F172A] tracking-tight">
                  Selected Works & Case Studies
                </h3>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-medium uppercase tracking-wider transition-all cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-[#0284C7] text-white shadow-md'
                        : 'bg-white/80 text-slate-700 hover:bg-white hover:text-[#0284C7] border border-[#BAE6FD]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Archive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className="group relative rounded-2xl overflow-hidden bg-white/70 border border-[#BAE6FD] hover:border-[#38BDF8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Category Chip */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono text-[#38BDF8] border border-white/10 uppercase tracking-wider">
                      {project.category}
                    </div>

                    {/* Media Type & Duration Badge */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono text-white/90">
                      {project.mediaType === 'video' && <Play className="w-3 h-3 text-[#38BDF8] fill-current" />}
                      <span>{project.videoDuration || 'STILL'}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-500 font-mono mb-1.5">
                        <span>{project.client}</span>
                        <span>{project.year}</span>
                      </div>
                      <h4 className="font-heading font-bold text-lg text-[#0F172A] tracking-tight group-hover:text-[#0284C7] transition-colors flex items-center justify-between">
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#0284C7]" />
                      </h4>
                      <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tools Tags */}
                    <div className="mt-4 pt-3 border-t border-slate-200/70 flex flex-wrap gap-1.5">
                      {project.tools.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#E0F2FE] text-[#0369A1]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
