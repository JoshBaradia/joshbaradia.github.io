import React from "react";
const ExperienceItem = ({
  title,
  company,
  period,
  description,
  delay
}: {
  title: string;
  company: string;
  period: string;
  description: string[];
  delay: number;
}) => (
  <div 
    className="relative pl-10 pb-10 animate-fade-in" 
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="timeline-circle"></div>
    <div className="mb-1">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-primary font-medium">{company}</p>
      <p className="text-sm text-muted-foreground mb-2">{period}</p>
    </div>
    <ul className="list-disc pl-5 space-y-2">
      {description.map((item, index) => (
        <li key={index} className="text-muted-foreground">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "Shyena Solutions Pvt Ltd.",
      period: "August 2024 – June 2025",
      description: [
        "Designed and implemented a user profiling system leveraging LSTM and XGBoost for anomaly detection, as part of a project with the Indian Air Force.", 
        "Led machine learning pipeline development for NLP projects.",
        "Implemented and fine-tuned language models for text classification.",
        "Created efficient data processing pipelines for large datasets."
      ],
      delay: 0
    },
    {
      title: "Research Assistant Intern",
      company: "IIT Jodhpur",
      period: "Jan 2024 – Aug 2024",
      description: [
        "Conducted research in LLM-generated content detection.",
        "Developed novel approaches for identifying AI-generated text.",
        "Published research findings at COLING 2025.",
        "Collaborated with international researchers on NLP projects."
      ],
      delay: 0.2
    },
    {
      title: "Data Science Intern",
      company: "InCred Financial Services",
      period: "Jun 2023 – Aug 2023",
      description: [
        "Worked on financial data analysis and predictive modeling.",
        "Developed ML models for credit risk assessment.",
        "Created visualizations and reports using Power BI.",
        "Implemented data pipelines for automated reporting."
      ],
      delay: 0.4
    },
    {
      title: "Internship Trainee",
      company: "Bharat Sanchar Nigam Limited(BSNL, Govt. of INDIA)",
      period: "Jun 2022 – July 2022",
      description: [
        "Gained knowledge in the field of Data Networks & Cyber Security.",
        "Carried out a mini-project in Networking on CAN using Coupled Network Pair (CNP) simulation software."
      ],
      delay: 0.6
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center"><span className="text-primary">💼 </span>Professional Experience</h2>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              delay={exp.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
