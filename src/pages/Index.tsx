
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

const getDirectionStyles = (direction: string, index: number) => {
  const baseStyles: React.CSSProperties = {};
  
  switch (direction) {
    case 'left-right':
      return {
        ...baseStyles,
        top: `${20 + index * 15}%`,
        left: '-150%',
        transform: 'rotate(-5deg)',
        animation: 'scroll-ribbon-left 8s linear infinite'
      };
    case 'right-left':
      return {
        ...baseStyles,
        top: `${30 + index * 20}%`,
        right: '-150%',
        transform: 'rotate(5deg)',
        animation: 'scroll-ribbon-right 10s linear infinite'
      };
    case 'top-bottom':
      return {
        ...baseStyles,
        left: `${25 + index * 20}%`,
        top: '-150%',
        transform: 'rotate(45deg)',
        animation: 'scroll-ribbon-down 12s linear infinite'
      };
    case 'bottom-top':
      return {
        ...baseStyles,
        right: `${15 + index * 25}%`,
        bottom: '-150%',
        transform: 'rotate(-45deg)',
        animation: 'scroll-ribbon-up 9s linear infinite'
      };
    default:
      return baseStyles;
  }
};

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState<'hero' | 'about' | 'experience' | 'projects' | 'skills'>('hero');
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setScrolling(true);
      
      // Clear timeout and set scrolling to false after scrolling stops
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setScrolling(false);
      }, 150);
      
      // Determine current section based on scroll position
      const sections = ['hero', 'about', 'experience', 'projects', 'skills'] as const;
      const sectionHeight = window.innerHeight;
      const currentIndex = Math.floor(scrollY / sectionHeight);
      const section = sections[Math.min(currentIndex, sections.length - 1)];
      setCurrentSection(section);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
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

      {/* Curvy scroll-triggered ribbons */}
      {scrolling && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          {Array.from({ length: 5 }).map((_, i) => {
            const directions = ['left-right', 'right-left', 'top-bottom', 'bottom-top'];
            const direction = directions[i % 4];
            const randomDelay = Math.random() * 2;
            
            return (
              <div
                key={i}
                className={`absolute curvy-ribbon ribbon-${direction}`}
                style={{
                  background: `linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.8) 20%, hsl(var(--primary) / 0.6) 50%, hsl(var(--primary) / 0.8) 80%, transparent 100%)`,
                  width: direction.includes('left') || direction.includes('right') ? '120%' : '6px',
                  height: direction.includes('top') || direction.includes('bottom') ? '120%' : '5px',
                  borderRadius: '50px',
                  animationDelay: `${randomDelay}s`,
                  clipPath: direction.includes('left') || direction.includes('right') 
                    ? 'polygon(0% 45%, 100% 55%, 100% 45%, 0% 55%)' 
                    : 'polygon(45% 0%, 55% 100%, 45% 100%, 55% 0%)',
                  ...getDirectionStyles(direction, i)
                }}
              />
            );
          })}
        </div>
      )}
      
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
