
import React from "react";
import { Brain, Cpu, Database, Network, BookOpen, Award } from "lucide-react";
import Scene3D from "./3d/Scene3D";

const About = () => {
  return (
    <section id="about" className="section bg-muted/30 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: "1s"}}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm border border-primary/20 mb-4 flex items-center gap-2 w-fit mx-auto">
            <Brain className="w-4 h-4" />
            AI Research Engineer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">Advancing AI Through Research</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-4 leading-relaxed">
            Specialized in cutting-edge artificial intelligence research and development
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="space-y-6 lg:space-y-8 animate-fade-in">
            <div className="floating-card border border-primary/20">
              <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4 lg:mb-6 flex items-center gap-2">
                <Brain className="w-6 h-6" />
                Research Profile
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-sm sm:text-base">
                  As an <strong className="text-primary">AI Research Engineer</strong> specializing in Machine Intelligence and Data Science, 
                  I focus on developing state-of-the-art neural network architectures and advancing the frontiers of artificial intelligence. 
                  Currently pursuing a Master's in Management of Technology at New York University, combining deep technical expertise 
                  with strategic innovation capabilities.
                </p>
                <p className="text-sm sm:text-base">
                  With extensive research experience in <strong className="text-primary">Deep Learning</strong>, <strong className="text-primary">Large Language Models</strong>, 
                  and <strong className="text-primary">Computer Vision</strong>, I've contributed to multiple international publications. 
                  My research focuses on developing more efficient, interpretable, and scalable AI systems that can solve complex real-world problems.
                </p>
              </div>

              {/* Research metrics */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">5+</div>
                  <div className="text-xs text-muted-foreground">AI Models Deployed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">3000+</div>
                  <div className="text-xs text-muted-foreground">Research Hours</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 lg:space-y-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <div className="floating-card border border-primary/20">
              <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-6 lg:mb-8 flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                Academic Background
              </h3>
              
              <div className="space-y-6 lg:space-y-8">
                <div className="relative border-l-4 border-primary/30 pl-6 lg:pl-8">
                  <div className="absolute top-0 left-[-10px] lg:left-[-12px] h-5 w-5 lg:h-6 lg:w-6 rounded-full bg-primary shadow-lg border-3 lg:border-4 border-background"></div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <img 
                      src="https://i.postimg.cc/G3gVPRBT/images.png" 
                      alt="NYU Logo" 
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain flex-shrink-0 rounded-lg shadow-md bg-white p-2"
                    />
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm text-muted-foreground mb-1">New York University</p>
                      <h4 className="text-lg sm:text-xl font-semibold mb-2">Master of Science, Management of Technology</h4>
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium">
                        Fall 2025
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="relative border-l-4 border-primary/30 pl-6 lg:pl-8">
                  <div className="absolute top-0 left-[-10px] lg:left-[-12px] h-5 w-5 lg:h-6 lg:w-6 rounded-full bg-primary shadow-lg border-3 lg:border-4 border-background"></div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <img 
                      src="https://i.postimg.cc/hjMVY4Qk/PES-University-Logo1.png" 
                      alt="PES University Logo" 
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain flex-shrink-0 rounded-lg shadow-md bg-white p-2"
                    />
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm text-muted-foreground mb-1">PES University, Bengaluru, India</p>
                      <h4 className="text-lg sm:text-xl font-semibold mb-2">B.Tech, CSE (Machine Intelligence & Data Science)</h4>
                      <span className="inline-block px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-xs sm:text-sm font-medium">
                        2020 - 2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
