
import React from "react";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5"></div>
      
      <div className="container mx-auto px-4 pt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text Content */}
          <div className="flex flex-col space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm border border-primary/20">
                  👋 Welcome to my portfolio
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                Hi, I'm{" "}
                <span className="gradient-text">
                  Josh Baradia
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
                AI Researcher | Technologist | ML Enthusiast
              </h2>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Engineer and researcher, passionate about machine intelligence and innovation. 
              Bridging technology and business to build impactful AI solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }} 
                size="lg"
                className="group text-lg px-8 py-4 rounded-full bg-primary hover:bg-primary/90 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Explore My Work 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 rounded-full border-2 backdrop-blur-sm hover:bg-primary/5 transform transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2" size={20} />
                Resume
              </Button>
            </div>

            <div className="flex gap-4 pt-2">
              <a 
                href="https://www.linkedin.com/in/josh-baradia-158637157/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Floating background elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: "1s"}}></div>
              
              <div className="relative w-80 h-80 md:w-96 md:h-96 animate-fade-in floating" style={{animationDelay: "0.3s"}}>
                <div className="glass-effect rounded-3xl p-6 h-full">
                  <AspectRatio ratio={1 / 1} className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-2xl overflow-hidden">
                    <Avatar className="w-full h-full rounded-2xl">
                      <AvatarImage 
                        src="https://i.postimg.cc/JnT93DZ9/Josh.png" 
                        alt="Josh Baradia" 
                        className="object-cover" 
                      />
                      <AvatarFallback className="text-6xl font-bold gradient-text text-primary rounded-2xl">
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
          className="animate-bounce rounded-full hover:bg-primary/10 transition-colors backdrop-blur-sm"
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
