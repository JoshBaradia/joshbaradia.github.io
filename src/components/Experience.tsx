import React from "react";
const ExperienceItem = ({
  title,
  company,
  period,
  description,
  delay,
  isVisible
}: {
  title: string;
  company: string;
  period: string;
  description: string[];
  delay: number;
  isVisible: boolean;
}) => (
  <div 
    className={`relative pl-16 pb-16 transition-all duration-700 transform hover:scale-105 hover:bg-secondary/20 rounded-lg p-6 cursor-pointer group ${
      isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="timeline-circle group-hover:scale-125 transition-transform duration-300"></div>
    <div className="glass-card p-6 border border-border/50 hover:border-primary/30 transition-all duration-300">
      <div className="mb-4">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-primary font-semibold text-lg">{company}</p>
        <p className="text-muted-foreground font-medium">{period}</p>
      </div>
      <ul className="list-disc pl-5 space-y-3">
        {description.map((item, index) => (
          <li key={index} className="text-muted-foreground leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience = () => {
  const [visibleItems, setVisibleItems] = React.useState<Set<number>>(new Set());

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = document.querySelectorAll('.experience-item');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

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
    <section id="experience" className="min-h-screen section bg-gradient-to-br from-secondary/20 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: "1s"}}></div>
      </div>

      <div className="container mx-auto relative z-10 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
{/*             <span className="text-primary">💼 </span> */}
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Journey through AI research, machine learning development, and cutting-edge technology implementations
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="experience-item"
              data-index={index}
            >
              <ExperienceItem
                title={exp.title}
                company={exp.company}
                period={exp.period}
                description={exp.description}
                delay={exp.delay}
                isVisible={visibleItems.has(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
