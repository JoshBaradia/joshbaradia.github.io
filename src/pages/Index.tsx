
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
        left: '10%',
        transform: 'rotate(-5deg)'
      };
    case 'right-left':
      return {
        ...baseStyles,
        top: `${30 + index * 20}%`,
        right: '10%',
        transform: 'rotate(5deg)'
      };
    case 'top-bottom':
      return {
        ...baseStyles,
        left: `${25 + index * 20}%`,
        top: '10%',
        transform: 'rotate(45deg)'
      };
    case 'bottom-top':
      return {
        ...baseStyles,
        right: `${15 + index * 25}%`,
        bottom: '10%',
        transform: 'rotate(-45deg)'
      };
    default:
      return baseStyles;
  }
};

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
    return () => {
      window.removeEventListener('scroll', handleScroll);
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

      {/* Static curvy ribbons */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => {
          const directions = ['left-right', 'right-left', 'top-bottom', 'bottom-top'];
          const direction = directions[i % 4];
          
          return (
            <div
              key={i}
              className={`absolute curvy-ribbon ribbon-${direction}`}
              style={{
                background: `linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.3) 20%, hsl(var(--primary) / 0.2) 50%, hsl(var(--primary) / 0.3) 80%, transparent 100%)`,
                width: direction.includes('left') || direction.includes('right') ? '80%' : '4px',
                height: direction.includes('top') || direction.includes('bottom') ? '80%' : '3px',
                borderRadius: '50px',
                clipPath: direction.includes('left') || direction.includes('right') 
                  ? 'ellipse(60% 40% at 50% 50%)' 
                  : 'ellipse(40% 60% at 50% 50%)',
                ...getDirectionStyles(direction, i)
              }}
            />
          );
        })}
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
