
import React from "react";

interface SkillCategory {
  title: string;
  skills: string[];
  delay: number;
}

const SkillCategory = ({ category }: { category: SkillCategory }) => (
  <div 
    className="bg-card rounded-lg p-6 border border-border animate-fade-in"
    style={{ animationDelay: `${category.delay}s` }}
  >
    <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
    <div className="flex flex-wrap gap-2">
      {category.skills.map((skill, index) => (
        <span key={index} className="skill-tag">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages & Technologies",
      skills: ["Python", "C", "Machine Learning", "Deep Learning", "NLP", "LLMs", "Generative AI", "Transformer models", "Network analysis"],
      delay: 0
    },
    {
      title: "Tools & Libraries",
      skills: ["TensorFlow", "Keras", "Pandas", "NumPy", "Power BI", "Scrapy", "LaTeX", "Scikit-learn", "npm", "Adafruit IO", "Jupyter Notebook"],
      delay: 0.1
    },
    {
      title: "Cloud & Databases",
      skills: ["MySQL", "DataBricks", "MongoDB", "AWS", "Google Cloud Platform (GCP)"],
      delay: 0.2
    },
    {
      title: "Soft Skills",
      skills: ["Communication", "Leadership", "Adaptability", "Project Management", "Problem Solving", "Team Collaboration", "Critical Thinking", "Technical Writing", "Event Management", "Paper Reviewing", "Public Speaking / Presentation"],
      delay: 0.3
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
