import React from 'react';
import { Instagram } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import skyverraLogo from '../assets/images/skyverra_logo_1790435929054.jpg';

export const Footer: React.FC = () => {
  const { theme } = useTheme();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#040810] border-t border-white/10 text-slate-300 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Brand Identity */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3.5 group cursor-pointer focus:outline-none"
          >
            {/* Skyverra SV Logo Image */}
            <img
              src={skyverraLogo}
              alt="Skyverra Visuals Logo"
              className="w-10 h-10 rounded-xl object-contain shadow-[0_0_18px_rgba(56,189,248,0.45)] transition-transform duration-300 group-hover:scale-105 border border-white/10"
            />
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg text-white tracking-tight leading-tight group-hover:text-[#38BDF8] transition-colors">
                Skyverra Visuals
              </span>
              <span className="text-[10px] font-mono tracking-[0.22em] text-[#38BDF8] uppercase font-semibold">
                AI VIDEO CREATOR
              </span>
            </div>
          </a>

          {/* Center: Clean Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-300 hover:text-[#38BDF8] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Social Media Icons & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-3.5">
            <div className="flex items-center gap-5 text-slate-300">
              <a
                href="https://www.instagram.com/skyverra0120/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram @skyverra0120"
                className="hover:text-[#38BDF8] hover:scale-115 transition-all duration-200 cursor-pointer"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>

            <p className="text-xs text-slate-500 font-mono text-center md:text-right">
              © 2026 Skyverra Visuals. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
