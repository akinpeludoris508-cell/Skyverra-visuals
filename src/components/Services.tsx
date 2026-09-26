import React from 'react';
import { Box, Clapperboard, Smartphone, Sparkles, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

interface ServiceCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const { theme } = useTheme();

  const servicesList: ServiceCard[] = [
    {
      id: 'product-ads',
      icon: <Box className="w-6 h-6 text-[#05070A] stroke-[2.2]" />,
      title: 'AI Product Ads & Commercials',
      description: 'High-converting, visually stunning ads for your brand or product.',
    },
    {
      id: 'cinematic-videos',
      icon: <Clapperboard className="w-6 h-6 text-[#05070A] stroke-[2.2]" />,
      title: 'AI Cinematic Videos',
      description: 'Story-driven, cinematic visuals that leave a lasting impression.',
    },
    {
      id: 'social-media',
      icon: <Smartphone className="w-6 h-6 text-[#05070A] stroke-[2.2]" />,
      title: 'Social Media Videos',
      description: 'Short-form, engaging content for TikTok, Instagram, YouTube & more.',
    },
    {
      id: 'custom-solutions',
      icon: <Sparkles className="w-6 h-6 text-[#05070A] stroke-[2.2]" />,
      title: 'Custom AI Video Solutions',
      description: 'Tailored videos for your unique ideas and goals.',
    },
  ];

  const handleExploreAll = () => {
    const target = document.querySelector('#portfolio');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Subtitle & Action */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#38BDF8] uppercase mb-4">
              MY SERVICES
            </span>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15] mb-6">
              Professional AI Video Solutions for{' '}
              <span className="text-[#38BDF8]">Every Need</span>
            </h2>

            <p
              className={`text-base sm:text-lg leading-relaxed mb-8 max-w-md ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              From eye-catching product ads to cinematic storytelling, I deliver high-quality,
              AI-powered videos that engage, inspire and convert.
            </p>

            <button
              onClick={handleExploreAll}
              className="group px-7 py-3 rounded-full border border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8] hover:text-[#05070A] transition-all duration-300 inline-flex items-center gap-2.5 text-sm font-semibold cursor-pointer shadow-[0_0_15px_rgba(56,189,248,0.15)] hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column: 2x2 Service Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {servicesList.map((service) => (
                <div
                  key={service.id}
                  onClick={() => onSelectService(service.title)}
                  className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group hover:-translate-y-1 ${
                    theme === 'dark'
                      ? 'bg-[#090E17]/90 border-white/10 hover:border-[#38BDF8]/60 hover:shadow-[0_0_25px_rgba(56,189,248,0.12)]'
                      : 'bg-white border-slate-200 hover:border-[#38BDF8] hover:shadow-xl'
                  }`}
                >
                  <div>
                    {/* Vibrant Cyan Squircle Icon Container */}
                    <div className="w-12 h-12 rounded-2xl bg-[#38BDF8] flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform duration-300">
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-lg sm:text-xl tracking-tight mb-2.5 text-white group-hover:text-[#38BDF8] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-sm leading-relaxed ${
                        theme === 'dark' ? 'text-slate-300/90' : 'text-slate-600'
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

