
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Publications from "../components/Publications";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Scene3D from "../components/3d/Scene3D";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState<'hero' | 'about' | 'experience' | 'projects' | 'skills'>('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Determine current section based on scroll position
      const sections = ['hero', 'about', 'experience', 'projects', 'skills'] as const;
      const sectionHeight = window.innerHeight;
      const currentIndex = Math.floor(scrollY / sectionHeight);
      const section = sections[Math.min(currentIndex, sections.length - 1)];
      setCurrentSection(section);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  useEffect(() => {
    // Update CSS custom property for scroll-based animations
    document.documentElement.style.setProperty('--scroll-progress', (scrollY / window.innerHeight).toString());
  }, [scrollY]);

  const scrollProgress = scrollY / (document.documentElement.scrollHeight - window.innerHeight);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Subtle data grid overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Moving data ribbons */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-2 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -rotate-12"
            style={{
              width: '200%',
              left: '-50%',
              top: `${10 + i * 12}%`,
              animationName: 'scroll-ribbon',
              animationDuration: `${15 + i * 3}s`,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear',
              animationDelay: `${i * 2}s`
            }}
          />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`reverse-${i}`}
            className="absolute h-1 bg-gradient-to-r from-transparent via-blue-500/15 to-transparent transform rotate-12"
            style={{
              width: '180%',
              left: '-40%',
              top: `${15 + i * 15}%`,
              animationName: 'scroll-ribbon-reverse',
              animationDuration: `${20 + i * 2}s`,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear',
              animationDelay: `${i * 1.5}s`
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Publications />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
