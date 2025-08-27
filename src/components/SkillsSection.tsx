import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Frontend",
      color: "from-primary to-primary-glow",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      title: "Backend",
      color: "from-secondary to-secondary-glow",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "FastAPI", level: 85 },
        { name: "Django REST", level: 80 },
        { name: "Python", level: 85 }
      ]
    },
    {
      title: "Database & DevOps",
      color: "from-primary to-secondary",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Docker", level: 75 },
        { name: "Git/GitHub", level: 90 },
        { name: "CI/CD", level: 70 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to build 
            exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="glass border-border/50 hover-lift group">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className={`inline-block p-3 rounded-full bg-gradient-to-r ${category.color} mb-4`}>
                    <div className="w-8 h-8 bg-background/20 rounded-full" />
                  </div>
                  <h3 className="text-xl font-bold text-gradient">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out ${
                            isVisible ? 'animate-pulse-glow' : ''
                          }`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Tech Stack */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">
            Technologies I <span className="text-gradient">Work With</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React.js", "Vue.js", "Node.js", "Express.js", "FastAPI", "Django",
              "PostgreSQL", "MongoDB", "Docker", "Git", "GitHub", "GitLab",
              "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Python", "TypeScript"
            ].map((tech, index) => (
              <span 
                key={index}
                className={`px-4 py-2 glass rounded-full text-sm font-medium hover-lift cursor-default transition-all duration-300 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;