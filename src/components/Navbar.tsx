import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { CREATOR_NAME } from '../data/portfolioData';
import skyverraLogo from '../assets/images/skyverra_logo_1790435929054.jpg';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Showreel', href: '#showreel' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === 'dark'
            ? 'bg-[#05070A]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40'
            : 'bg-[#F8FAFC]/90 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Logo & Wordmark matching mockup */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-3 focus:outline-none"
        >
          {/* Skyverra SV Logo Image */}
          <img
            src={skyverraLogo}
            alt="Skyverra Visuals Logo"
            className="w-10 h-10 rounded-xl object-contain shadow-[0_0_18px_rgba(56,189,248,0.45)] transition-transform duration-300 group-hover:scale-105 border border-white/10"
          />
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-lg tracking-tight leading-tight transition-colors">
              Skyverra Visuals
            </span>
            <span className="text-[9px] font-mono tracking-[0.22em] text-[#38BDF8] uppercase font-semibold">
              AI VIDEO CREATOR
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links matching mockup */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isHome = link.label === 'Home';
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors py-1 relative ${
                  isHome
                    ? 'text-[#38BDF8] font-semibold after:content-[\'\'] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#38BDF8] after:rounded-full after:shadow-[0_0_8px_#38BDF8]'
                    : theme === 'dark'
                    ? 'text-slate-300 hover:text-white after:content-[\'\'] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#38BDF8] after:transition-all after:duration-300 hover:after:w-full'
                    : 'text-slate-600 hover:text-slate-900 after:content-[\'\'] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#38BDF8] after:transition-all after:duration-300 hover:after:w-full'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Actions - Theme Switcher & Let's Work Together Button */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 border ${
              theme === 'dark'
                ? 'border-white/10 bg-white/5 text-slate-300 hover:text-[#38BDF8] hover:border-[#38BDF8]/40 hover:bg-white/10'
                : 'border-slate-200 bg-white text-slate-700 hover:text-[#0EA5E9] hover:border-[#38BDF8]/40 shadow-xs'
            }`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {/* Primary CTA - "Let's Work Together ->" from mockup */}
          <button
            onClick={onContactClick}
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 bg-[#38BDF8] text-[#05070A] hover:bg-[#0EA5E9] hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Let's Work Together</span>
            <span className="text-sm font-bold">→</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${
              theme === 'dark'
                ? 'border-white/10 bg-white/5 text-white'
                : 'border-slate-200 bg-white text-slate-900'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-6 pt-4 pb-8 border-b transition-all ${
            theme === 'dark'
              ? 'bg-[#05070A] border-white/10 text-white'
              : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-display font-medium py-2 border-b border-white/5 flex items-center justify-between hover:text-[#38BDF8] transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#38BDF8] font-mono">→</span>
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="mt-4 w-full py-3 rounded-xl text-center text-xs font-semibold tracking-wider uppercase bg-[#38BDF8] text-[#05070A] hover:bg-[#0EA5E9] transition-all"
            >
              Start a Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
