
import React, { useState } from "react";
import { ArrowRight, Github, Linkedin, Brain, Database, Cpu, Network } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Scene3D from "./3d/Scene3D";

const Hero = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5"></div>

      {/* Neural network pattern overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32">
          <Brain className="w-full h-full text-primary animate-pulse" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24">
          <Database className="w-full h-full text-blue-500 animate-pulse" style={{animationDelay: "1s"}} />
        </div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2">
          <Network className="w-full h-full text-cyan-500 animate-pulse" style={{animationDelay: "2s"}} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 pt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Hero Text Content */}
          <div className="flex flex-col space-y-6 lg:space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-3 py-2 sm:px-4 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm border border-primary/20 flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  AI Research Engineer
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <span className="block text-foreground">Building the Future of</span>
                <span className="gradient-text block mt-2">
                  Artificial Intelligence
                </span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground">
                Advancing AI through Deep Learning, Neural Networks & LLMs
              </h2>
            </div>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Specializing in cutting-edge AI research, from transformer architectures to neural network optimization. 
              Developing intelligent systems that push the boundaries of machine learning and artificial intelligence.
            </p>

            {/* AI/ML Technology Stack */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                { icon: Brain, text: "Neural Networks" },
                { icon: Cpu, text: "Deep Learning" },
                { icon: Database, text: "Computer Vision" },
                { icon: Network, text: "NLP & LLMs" }
              ].map((tech, index) => (
                <div 
                  key={tech.text}
                  className="flex items-center gap-2 px-3 py-2 bg-secondary/50 backdrop-blur-sm rounded-full text-sm font-medium border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <tech.icon className="w-4 h-4 text-primary" />
                  <span>{tech.text}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <Button 
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }} 
                size="lg"
                className="group text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-primary hover:bg-primary/90 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                <Brain className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Explore AI Research
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </Button>
            </div>

            <div className="flex gap-4 pt-6">
              <a 
                href="https://www.linkedin.com/in/josh-baradia-158637157/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 border border-border/50 neural-glow"
                onMouseEnter={() => setHoveredIcon('linkedin')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 border border-border/50 neural-glow"
                onMouseEnter={() => setHoveredIcon('github')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Floating background elements */}
              <div className="absolute -top-4 -left-4 w-64 h-64 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-56 h-56 sm:w-64 sm:h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: "1s"}}></div>
              
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 animate-fade-in floating" style={{animationDelay: "0.3s"}}>
                <div className="glass-effect rounded-3xl p-4 sm:p-6 h-full border border-border/50">
                  <AspectRatio ratio={1 / 1} className="bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-2xl overflow-hidden">
                    <Avatar className="w-full h-full rounded-2xl">
                      <AvatarImage 
                        src="https://i.postimg.cc/JnT93DZ9/Josh.png" 
                        alt="Josh Baradia" 
                        className="object-cover" 
                      />
                      <AvatarFallback className="text-4xl sm:text-6xl font-bold gradient-text text-primary rounded-2xl">
                        JB
                      </AvatarFallback>
                    </Avatar>
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Button 
          onClick={() => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }
          }} 
          variant="ghost" 
          size="icon" 
          className="animate-bounce rounded-full hover:bg-primary/10 transition-colors backdrop-blur-sm border border-border/30"
          aria-label="Scroll down"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
