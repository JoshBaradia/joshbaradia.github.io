import React from "react";
import { ExternalLink } from "lucide-react";
interface Project {
  title: string;
  description: string;
  technologies: string[];
  pdfLink?: string;
  imageUrl?: string;
  delay: number;
}
const ProjectCard = ({
  project
}: {
  project: Project;
}) => <div className="project-card animate-fade-in" style={{
  animationDelay: `${project.delay}s`
}}>
    {project.imageUrl ? <div className="aspect-video rounded-md overflow-hidden mb-4 bg-muted">
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-fill" />
      </div> : <div className="aspect-video rounded-md overflow-hidden mb-4 bg-muted flex items-center justify-center">
        <span className="text-muted-foreground">Project Image</span>
      </div>}
    
    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
    <p className="text-muted-foreground mb-4">{project.description}</p>
    
    <div className="flex flex-wrap gap-2 mb-4">
      {project.technologies.map((tech, index) => <span key={index} className="skill-tag">{tech}</span>)}
    </div>
    
    {project.pdfLink && <a href={project.pdfLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium">
        View Publication <ExternalLink size={14} />
      </a>}
  </div>;
const Projects = () => {
  const projects: Project[] = [
    {
      title: "Mirror Minds: Detecting LLM-Generated Text",
      description: "Deep learning approach for identifying AI-generated text from various models including GPT, LLaMA, and Mistral. Published at COLING 2025, Abu Dhabi.",
      technologies: ["NLP", "Deep Learning", "LLMs", "Python", "PyTorch"],
      pdfLink: "#",
      // Replace with actual PDF link
      imageUrl: "https://i.postimg.cc/pXhVcx0w/A-conceptual-digital-artwork-in-landscape-ratio-illustrating-the-theme-Mirror-Minds-Detecting-LLM.jpg",
      delay: 0
    }, {
      title: "ML-PIE: Underwater Image Enhancement",
      description: "Enhanced underwater visuals using UFPN-ESRGAN architecture, improving clarity and color accuracy for underwater photography and research.",
      technologies: ["Computer Vision", "GANs", "Image Enhancement", "TensorFlow"],
      pdfLink: "#",
      // Replace with actual PDF link
      imageUrl: "https://i.postimg.cc/PJjKNTmq/results.png",
      delay: 0.1
    }, {
      title: "Fake News Detection in Hindi",
      description: "Developed a Hindi news scraper and machine learning classifier to detect fake news in the Hindi language. Published at ICCCNT 2023, IIT-Delhi.",
      technologies: ["NLP", "Web Scraping", "Classification", "Scikit-Learn"],
      pdfLink: "#",
      // Replace with actual PDF link
      imageUrl: "https://i.postimg.cc/vmSZQmwW/comparisons.png",
      delay: 0.2
    }, {
      title: "Keychain Finder",
      description: "ESP8266-based tracking device using GPS technology with Adafruit visualization for locating lost items.",
      technologies: ["IoT", "ESP8266", "GPS", "Embedded Systems"],
      imageUrl: "https://i.postimg.cc/vmxpV867/Io-T-Based-Smart-Key-Finder.jpg",
      delay: 0.3
    }, {
      title: "Automated Smart Door Model",
      description: "Home safety system using gas, fire, and ultrasound sensors for enhanced security and automated responses.",
      technologies: ["IoT", "Sensors", "Automation", "Safety Systems"],
      imageUrl: "https://i.postimg.cc/yNh2PQvW/engproc-82-00009-g001-550.jpg",
      delay: 0.4
    }
  ];
  return <section id="projects" className="section bg-muted/10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => <ProjectCard key={index} project={project} />)}
        </div>
      </div>
    </section>;
};
export default Projects;
