
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
      {/* 3D Background Scene */}
      <div className="fixed inset-0 z-0">
        <Scene3D scrollProgress={scrollProgress} section={currentSection} />
      </div>

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

      {/* Animated data particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
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
