
import React from "react";

const About = () => {
  return (
    <section id="about" className="section section-gradient">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm border border-primary/20 mb-4">
            👨‍💻 About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Know Me Better</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 animate-fade-in">
            <div className="floating-card">
              <h3 className="text-2xl font-semibold text-primary mb-6">Bio</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  As a Computer Science and Engineering graduate specializing in Machine Intelligence and Data Science, 
                  I'm passionate about pushing the boundaries of what AI can achieve. Currently pursuing a Master's in 
                  Management of Technology at New York University, I'm combining my technical expertise with business 
                  acumen to drive innovation.
                </p>
                <p>
                  With over 3000 hours of research experience, I've contributed to international publications 
                  in Machine Learning, Natural Language Processing, and Generative AI. My goal is to develop 
                  AI solutions that address real-world challenges and create meaningful impact.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <div className="floating-card">
              <h3 className="text-2xl font-semibold text-primary mb-8">Education</h3>
              
              <div className="space-y-8">
                <div className="relative border-l-4 border-primary/30 pl-8">
                  <div className="absolute top-0 left-[-12px] h-6 w-6 rounded-full bg-primary shadow-lg border-4 border-background"></div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <img 
                      src="https://i.postimg.cc/G3gVPRBT/images.png" 
                      alt="NYU Logo" 
                      className="w-16 h-16 object-contain flex-shrink-0 rounded-lg shadow-md bg-white p-2"
                    />
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">New York University</p>
                      <h4 className="text-xl font-semibold mb-2">Master of Science, Management of Technology</h4>
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        Fall 2025
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="relative border-l-4 border-primary/30 pl-8">
                  <div className="absolute top-0 left-[-12px] h-6 w-6 rounded-full bg-primary shadow-lg border-4 border-background"></div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <img 
                      src="https://i.postimg.cc/hjMVY4Qk/PES-University-Logo1.png" 
                      alt="PES University Logo" 
                      className="w-16 h-16 object-contain flex-shrink-0 rounded-lg shadow-md bg-white p-2"
                    />
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">PES University, Bengaluru, India</p>
                      <h4 className="text-xl font-semibold mb-2">B.Tech, CSE (Machine Intelligence & Data Science)</h4>
                      <span className="inline-block px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium">
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
