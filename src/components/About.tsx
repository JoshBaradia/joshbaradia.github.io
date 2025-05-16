
import React from "react";
const About = () => {
  return <section id="about" className="section bg-muted/10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold text-primary">Bio</h3>
            <p className="text-muted-foreground">
              As a Computer Science and Engineering graduate specializing in Machine Intelligence and Data Science, 
              I'm passionate about pushing the boundaries of what AI can achieve. Currently pursuing a Master's in 
              Management of Technology at New York University, I'm combining my technical expertise with business 
              acumen to drive innovation.
            </p>
            <p className="text-muted-foreground">
              With over 3000 hours of research experience, I've contributed to international publications 
              in Machine Learning, Natural Language Processing, and Generative AI. My goal is to develop 
              AI solutions that address real-world challenges and create meaningful impact.
            </p>
            <p className="text-muted-foreground">
          </p>
          </div>
          
          <div className="space-y-8 animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            <h3 className="text-2xl font-semibold text-primary">Education</h3>
            
            <div className="space-y-6">
              <div className="relative border-l-2 border-primary pl-6 pb-6">
                <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-primary"></div>
                <p className="text-muted-foreground">New York University</p>
                <h4 className="text-xl font-semibold">Master of Science, Management of Technology</h4>
                <p className="text-sm text-muted-foreground">Fall 2025</p>
              </div>
              
              <div className="relative border-l-2 border-primary pl-6">
                <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-primary"></div>
                <p className="text-muted-foreground">PES University, Bengaluru, India</p>
                <h4 className="text-xl font-semibold">B.Tech, CSE (Machine Intelligence & Data Science)</h4>
                <p className="text-sm text-muted-foreground">2020 - 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
