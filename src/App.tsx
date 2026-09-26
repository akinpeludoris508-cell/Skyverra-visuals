/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { About } from './components/About';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ProjectItem } from './types';
import { PORTFOLIO_PROJECTS } from './data/portfolioData';

function PortfolioApp() {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [inquiryService, setInquiryService] = useState<string>('AI Video Commercial');

  // GSAP Initial Motion Reveals
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('header', {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('#home h1', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  const handleOpenProjectById = (projectId: string) => {
    const found = PORTFOLIO_PROJECTS.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  const handleSelectService = (serviceName: string) => {
    setInquiryService(serviceName);
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollTo = (selector: string) => {
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 font-sans ${
        theme === 'dark'
          ? 'bg-[#05070A] text-[#F8FAFC]'
          : 'bg-[#F8FAFC] text-[#0B1220]'
      }`}
    >
      {/* Sticky Navigation Bar */}
      <Navbar onContactClick={() => handleScrollTo('#contact')} />

      {/* Main Sections */}
      <main id="top">
        {/* 1. Hero Section */}
        <Hero
          onViewWorkClick={() => handleScrollTo('#portfolio')}
          onContactClick={() => handleScrollTo('#contact')}
          onOpenProject={handleOpenProjectById}
        />

        {/* Marquee Section Divider */}
        <Marquee />

        {/* 2. Portfolio Section */}
        <Portfolio onSelectProject={(project) => setSelectedProject(project)} />

        {/* 3. Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 4. Creative Process (Methodology & Workflow - From Idea to Final Frame with Showreel) */}
        <Process />

        {/* 5. About Section */}
        <About onContactClick={() => handleScrollTo('#contact')} />

        {/* 6. Contact & Commission Section */}
        <Contact initialService={inquiryService} />
      </main>

      {/* 9. Minimal Footer */}
      <Footer />

      {/* Project Lightbox / Detail Modal */}
      <ProjectModal
        project={selectedProject}
        projects={PORTFOLIO_PROJECTS}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(project) => setSelectedProject(project)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
