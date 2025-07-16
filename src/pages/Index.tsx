
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

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Update CSS custom property for scroll-based animations
    document.documentElement.style.setProperty('--scroll-progress', (scrollY / window.innerHeight).toString());
  }, [scrollY]);

  return (
    <div className="min-h-screen relative">
      {/* Moving ribbons background */}
      <div className="moving-ribbons">
        <div className="ribbon"></div>
        <div className="ribbon"></div>
        <div className="ribbon"></div>
        <div className="ribbon"></div>
      </div>

      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-3xl floating"></div>
        <div className="absolute top-1/3 right-10 w-80 h-80 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl floating" style={{animationDelay: "2s"}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 sm:w-80 sm:h-80 bg-cyan-500/5 rounded-full blur-3xl floating" style={{animationDelay: "4s"}}></div>
      </div>
      
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
  );
};

export default Index;
