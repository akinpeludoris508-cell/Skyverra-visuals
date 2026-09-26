import { ProjectItem, ServiceItem, ProcessStep, TestimonialItem } from '../types';

export const CREATOR_NAME = "Skyverra Visuals";
export const CREATOR_ROLE = "AI Video Creator • AI Visual Artist";
export const CREATOR_LOCATION = "Global Commissions";
export const CREATOR_EMAIL = "akinpeludoris508@gmail.com";

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: "aura-hyper-ev",
    title: "AURA HYPER-EV // TITAN",
    category: "COMMERCIAL",
    client: "AURA Automotive Group",
    year: "2026",
    description: "High-octane commercial campaign film introducing a next-generation electric hypercar concept through volumetric rain, reflective asphalt, and anamorphic light architecture.",
    creativeDirection: "High-contrast twilight chiaroscuro, volumetric sky-blue anamorphic flares, photoreal asphalt water physics, kinetic velocity camera tracking.",
    thumbnail: "/src/assets/images/hero_cinematic_film_1790433526595.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    mediaType: "video",
    videoDuration: "00:48",
    aspectRatio: "wide",
    tools: ["Runway Gen-3 Alpha", "Midjourney v6.1", "ComfyUI (AnimateDiff)", "DaVinci Resolve Studio"],
    deliverables: ["60s 4K Master Commercial", "15s Vertical Cutdowns (9:16)", "Print Key Art Campaign"],
    featured: true,
  },
  {
    id: "valoir-haute-couture",
    title: "VALOIR HAUTE COUTURE",
    category: "CINEMATIC",
    client: "Maison Valoir Paris",
    year: "2026",
    description: "Avant-garde luxury fashion film exploring sculptural liquid chrome garments that morph with choreography, debuted during Paris Digital Fashion Week.",
    creativeDirection: "Brutalist studio minimalism, fluid metallic cloth simulation prompts, sharp geometric silhouettes, subtle sky-blue refractive accents.",
    thumbnail: "/src/assets/images/portfolio_fashion_film_1790433536969.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    mediaType: "video",
    videoDuration: "01:12",
    aspectRatio: "vertical",
    tools: ["Kling 1.5 Pro", "Flux.1 Dev", "Luma Dream Machine", "Topaz Video AI"],
    deliverables: ["Digital Runway Film", "Social Editorial Campaign", "Interactive Digital Billboard Loop"],
    featured: true,
  },
  {
    id: "aquaria-lumen-parfum",
    title: "AQUARIA LUMEN PARFUM",
    category: "PRODUCT ADS",
    client: "Lumen Luxe Fragrances",
    year: "2025",
    description: "A sensory underwater journey of crystal fragrance flacons immersed in ethereal azure aquatic caustics with bioluminescent light particles.",
    creativeDirection: "Fluid dynamics simulation via AI prompts, refractive liquid glass refraction, bioluminescent particle trails, macro droplet close-ups.",
    thumbnail: "/src/assets/images/portfolio_perfume_ad_1790433547758.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    mediaType: "video",
    videoDuration: "00:30",
    aspectRatio: "square",
    tools: ["Runway Gen-3", "Midjourney v6.1", "Magnific AI", "After Effects"],
    deliverables: ["30s Global TVC Commercial", "Social Ad Campaign (4:5 / 9:16)", "Retail Flagship Display"],
    featured: false,
  },
  {
    id: "neo-sanctuary-2088",
    title: "NEO-SANCTUARY 2088",
    category: "CINEMATIC",
    client: "Kaelen Architecture",
    year: "2026",
    description: "Cinematic concept trailer for high-altitude architectural sanctuaries designed for extreme climate resilience and serene contemplation.",
    creativeDirection: "Carbon-fiber brutalism, atmospheric fog diffusion, icy dusk palette accented with cyan interior glows, steady panoramic drone cinematography.",
    thumbnail: "/src/assets/images/portfolio_cyber_concept_1790433558485.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    mediaType: "video",
    videoDuration: "01:34",
    aspectRatio: "wide",
    tools: ["Kling AI Pro", "Flux.1 Schnell", "Premiere Pro", "ElevenLabs (Spatial SFX)"],
    deliverables: ["90s Cinematic Trailer", "Architectural VR Stills Suite", "Exhibition Large Format Prints"],
    featured: true,
  },
  {
    id: "soniq-sphere-x9",
    title: "SONIQ SPHERE X9",
    category: "PRODUCT ADS",
    client: "Soniq Audio Labs",
    year: "2026",
    description: "Weightless acoustic engineering meets tactile carbon aesthetics in a dynamic AI product launch film featuring precision audio resonance waveforms.",
    creativeDirection: "Zero-gravity levitation physics, micro-texture macro zooms, laser acoustic grid pulses, crisp studio lighting.",
    thumbnail: "/src/assets/images/portfolio_audio_product_1790433581856.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    mediaType: "video",
    videoDuration: "00:42",
    aspectRatio: "square",
    tools: ["ComfyUI", "Runway Gen-3", "Flux Realism LoRA", "Logic Pro X"],
    deliverables: ["45s Product Launch Video", "E-Commerce 3D Product Loop", "Digital OOH Billboards"],
    featured: false,
  },
  {
    id: "bioma-transcendence",
    title: "BIOMA TRANSCENDENCE",
    category: "AI IMAGES",
    client: "Art Basel Digital Pavilion",
    year: "2025",
    description: "Macro fine art series exploring bio-synthetic botanical mutations with translucent glowing sky-blue veins and microscopic crystalline structures.",
    creativeDirection: "Microscopic electron-microscope aesthetics, translucent petal subsurface scattering, deep obsidian contrast, hyper-detailed organic texturing.",
    thumbnail: "/src/assets/images/portfolio_botanical_art_1790433592602.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    mediaType: "image",
    aspectRatio: "vertical",
    tools: ["Midjourney v6.1", "Magnific AI 8K Upscale", "Photoshop Camera Raw"],
    deliverables: ["6-Piece Fine Art Gallery Print Series (300DPI)", "Animated Screen Loops"],
    featured: false,
  },
  {
    id: "nexus-kinetic-world",
    title: "NEXUS KINETIC WORLD",
    category: "AI VIDEO",
    client: "Nexus Media Global",
    year: "2026",
    description: "High-octane world-building sequence integrating real-time camera tracking with neural generative rendering engines for an international keynote reveal.",
    creativeDirection: "Dynamic drone choreography, cinematic velocity speed ramps, glowing sky-blue telemetry arcs, atmospheric depth of field.",
    thumbnail: "/src/assets/images/hero_cinematic_film_1790433526595.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    mediaType: "video",
    videoDuration: "01:05",
    aspectRatio: "wide",
    tools: ["Runway Gen-3", "Kling AI", "EbSynth Neural Track", "Topaz Video"],
    deliverables: ["Keynote Cinematic Opener", "4K Social Promo Cuts", "Brand Identity Assets"],
    featured: false,
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "commercials",
    number: "01",
    title: "AI VIDEO COMMERCIALS",
    description: "Cinematic AI-generated commercials designed for brands, products and campaigns with photorealistic lighting, dynamic motion, and unforgettable narrative punch.",
    highlights: ["Global TV & Streaming Broadcasts", "Full Creative Production Pipeline", "Bespoke Prompt & Motion Architecture"]
  },
  {
    id: "product-ads",
    number: "02",
    title: "AI PRODUCT ADS",
    description: "High-end product visuals and advertisements created with AI. Zero-gravity levitation, liquid caustics, and macro textures impossible in traditional live shoots.",
    highlights: ["Luxury & Beauty Packaging", "High-Tech Hardware Launches", "3D Motion Loops & Digital Ads"]
  },
  {
    id: "cinematic-films",
    number: "03",
    title: "CINEMATIC AI FILMS",
    description: "Atmospheric cinematic sequences, fashion films, brand worldbuilding, and concept films with intentional art direction, deep emotion, and filmic composition.",
    highlights: ["Digital Fashion Week Films", "Sci-Fi & Narrative Concept Films", "Experiential & Festival Screenings"]
  },
  {
    id: "image-generation",
    number: "04",
    title: "AI IMAGE GENERATION",
    description: "Editorial-quality AI images for campaigns, advertising, social media and creative concepts. Ultra-high resolution outputs suitable for print, billboards, and luxury magazines.",
    highlights: ["Key Visual Advertising", "Lookbooks & Magazine Spreads", "8K–16K Ultra-Res Mastering"]
  },
  {
    id: "brand-visuals",
    number: "05",
    title: "AI BRAND VISUALS",
    description: "Visual identities, campaign concepts, and brand asset libraries powered by AI. Establishing a distinctive visual signature that sets your company apart from competitors.",
    highlights: ["Seasonal Campaign Aesthetics", "Generative Brand Worlds", "Multi-Platform Asset Kits"]
  },
  {
    id: "creative-direction",
    number: "06",
    title: "CREATIVE DIRECTION",
    description: "Concept development, visual storytelling, moodboards, shot design and AI production direction. Guiding agency and brand teams from napkin sketch to final master.",
    highlights: ["Narrative & Script Development", "Shot Composition & Mood Design", "Post-Production & Audio Synergy"]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "CONCEPT & BRIEF",
    subtitle: "Discovery & Narrative Architecture",
    description: "We deconstruct the brand DNA, product goals, target audience, and emotional resonance. We define core story arcs and script key visual beats.",
    deliverable: "Creative Treatment & Narrative Deck"
  },
  {
    number: "02",
    title: "ART DIRECTION",
    subtitle: "Visual Language & Aesthetic Framework",
    description: "We architect the visual language: lighting design, color grading palette, spatial camera rules, wardrobe textures, and typographic cues.",
    deliverable: "Visual Moodboard & Style Frames"
  },
  {
    number: "03",
    title: "AI PRODUCTION",
    subtitle: "Generative Generation & Neural Motion",
    description: "Using proprietary prompt engineering pipelines across Runway Gen-3, Kling, Flux, and custom LoRA models, we generate and direct cinematic sequences frame by frame.",
    deliverable: "Raw Cinematic Scene Takes & Motion Passes"
  },
  {
    number: "04",
    title: "FINAL EDIT & MASTER",
    subtitle: "Color Grading, Foley & 4K Output",
    description: "Every cut is polished in DaVinci Resolve with film emulation, bespoke sound design, spatial audio, and pristine 4K delivery across all aspect ratios.",
    deliverable: "4K Master Delivery & Format Cutdowns"
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "1",
    quote: "Valen delivered an AI automotive commercial that looked like a multi-million-dollar live production shoot. The volumetric lighting, rain reflections, and sound design mesmerized our executive board and our global audience.",
    clientName: "Marcus Vance",
    role: "Head of Global Marketing",
    company: "AURA Automotive",
    project: "Titan EV Global Launch"
  },
  {
    id: "2",
    quote: "Working with Valen transformed how we approach fashion week. The digital chrome fabrics moved with an organic grace that captivated over 4.2 million viewers across our channels.",
    clientName: "Camille Delacroix",
    role: "Creative Director",
    company: "Maison Valoir Paris",
    project: "Paris Fashion Week 2026"
  },
  {
    id: "3",
    quote: "Our luxury fragrance ad campaign achieved a 48% higher engagement rate than traditional agency shoots. Valen's artistic eye and mastery of generative liquid caustics is unmatched in the industry.",
    clientName: "Elena Rostova",
    role: "VP of Brand Strategy",
    company: "Lumen Luxe Brands",
    project: "Aquaria Fragrance Campaign"
  }
];

export const ARTIST_STATS = [
  { value: "50+", label: "Creative Projects Delivered" },
  { value: "18+", label: "Global Brand Campaigns" },
  { value: "100%", label: "AI Directed & Mastered" },
  { value: "4.9★", label: "Client Satisfaction Rating" }
];

export const SPECIALIZATIONS = [
  "AI VIDEO COMMERCIALS",
  "PRODUCT ADS & PACKAGING",
  "CINEMATIC CONCEPT FILMS",
  "AI IMAGE GENERATION",
  "FASHION & LUXURY VISUALS",
  "BRAND STORYTELLING"
];
