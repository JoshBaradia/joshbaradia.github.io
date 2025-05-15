import React from "react";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Hero Text Content */}
          <div className="flex flex-col space-y-6 animate-fade-in order-2 md:order-1">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Josh Baradia</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
                AI Researcher | Technologist | ML Enthusiast
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">Engineer and researcher, passionate about machine intelligence and innovation. Bridging technology and business to build impactful AI solutions.</p>
            
            <div className="pt-2">
              <Button onClick={() => {
              const projectsSection = document.getElementById("projects");
              if (projectsSection) {
                projectsSection.scrollIntoView({
                  behavior: "smooth"
                });
              }
            }} className="group text-md transition-all duration-300 hover:pr-8">
                Explore My Work 
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={18} />
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="flex justify-center md:justify-end mb-8 md:mb-0 order-1 md:order-2">
            <div className="relative">
              <div className="absolute -z-10 blur-[80px] opacity-30 rounded-full w-72 h-72 bg-primary top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 animate-fade-in rounded-2xl overflow-hidden border-2 border-primary/20" style={{
              animationDelay: "0.3s"
            }}>
                <AspectRatio ratio={1 / 1} className="bg-gradient-to-br from-muted/80 to-muted/20">
                  <Avatar className="w-full h-full rounded-2xl">
                    <AvatarImage src="https://i.postimg.cc/JnT93DZ9/Josh.png" alt="Josh Baradia" className="object-cover" />
                    <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-secondary to-background text-primary">JB</AvatarFallback>
                  </Avatar>
                </AspectRatio>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/30 rounded-full blur-xl"></div>
              
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8">
        <Button onClick={() => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({
            behavior: "smooth"
          });
        }
      }} aria-label="Scroll down" variant="ghost" size="icon" className="animate-bounce rounded-full hover:bg-secondary/50 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </Button>
      </div>
    </section>;
};
export default Hero;