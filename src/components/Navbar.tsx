
import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const navbarHeight = 80; // Approximate navbar height
    
    if (element) {
      const topPos = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: topPos,
        behavior: "smooth",
      });
    }
    
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", sectionId: "home" },
    { name: "About", sectionId: "about" },
    { name: "Experience", sectionId: "experience" },
    { name: "Projects", sectionId: "projects" },
    { name: "Skills", sectionId: "skills" },
    { name: "Publications", sectionId: "publications" },
    { name: "Contact", sectionId: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a 
            href="#home" 
            className="text-xl font-bold text-primary"
          >
            JB
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.slice(0, -1).map((link) => (
            <button
              key={link.sectionId}
              onClick={() => scrollToSection(link.sectionId)}
              className="text-sm font-medium hover:text-primary animated-underline py-1 whitespace-nowrap"
            >
              {link.name}
            </button>
          ))}
          <Link 
            to="/certificates"
            className="text-sm font-medium hover:text-primary animated-underline py-1 whitespace-nowrap"
          >
            Certifications
          </Link>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium hover:text-primary animated-underline py-1 whitespace-nowrap"
          >
            Contact
          </button>
          <ThemeToggle />
        </div>

        {/* Tablet Navigation */}
        <div className="hidden md:flex lg:hidden items-center space-x-4">
          {navLinks.slice(0, 4).map((link) => (
            <button
              key={link.sectionId}
              onClick={() => scrollToSection(link.sectionId)}
              className="text-sm font-medium hover:text-primary animated-underline py-1"
            >
              {link.name}
            </button>
          ))}
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md bg-secondary text-secondary-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md bg-secondary text-secondary-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-3">
              {navLinks.slice(0, -1).map((link) => (
                <button
                  key={link.sectionId}
                  onClick={() => scrollToSection(link.sectionId)}
                  className="py-2 px-2 text-sm font-medium hover:text-primary hover:bg-secondary/50 rounded-md transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
              <Link 
                to="/certificates"
                className="py-2 px-2 text-sm font-medium hover:text-primary hover:bg-secondary/50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Certifications
              </Link>
              <button
                onClick={() => scrollToSection("contact")}
                className="py-2 px-2 text-sm font-medium hover:text-primary hover:bg-secondary/50 rounded-md transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
