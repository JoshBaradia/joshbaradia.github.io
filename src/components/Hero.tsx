
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Hero Text Content */}
          <div className="flex flex-col space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Hi, I'm <span className="text-primary">Josh Baradia</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
              AI Researcher | Technologist | ML Enthusiast
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-md">
              Engineer and researcher passionate about machine intelligence and innovation. 
              Bridging technology and business to build impactful AI solutions.
            </p>
            
            <div>
              <button 
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="flex items-center gap-2 bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-3 rounded-md font-medium transition-all"
              >
                Explore My Work <ArrowRight size={16} />
              </button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {/* Replace with actual image URL when available */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-background flex items-center justify-center">
                <span className="text-muted-foreground text-lg">Profile Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8">
        <button
          onClick={() => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          aria-label="Scroll down"
          className="animate-bounce bg-secondary rounded-full p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-secondary-foreground"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
