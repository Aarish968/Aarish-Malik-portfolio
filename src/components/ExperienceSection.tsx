import { Calendar, MapPin, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Wcits Pvt.Ltd",
      location: "Ghaziabad, India",
      period: "Dec 2024 - June 2025",
      description: [
        "Contributed to the design and development of scalable web applications using React.js, Node.js, FastAPI, and PostgreSQL",
        "Built RESTful APIs with FastAPI and Django REST Framework to improve backend performance and data management",
        "Collaborated with a team of developers using Git and GitLab for version control and CI/CD automation",
        "Deployed and containerized applications using Docker for reliable delivery across environments"
      ],
      technologies: ["React.js", "Node.js", "FastAPI", "PostgreSQL", "Docker", "Git"],
      isActive: true
    }
  ];

  const education = {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    period: "2022 - 2025 (Expected)",
    description: "Comprehensive computer science education focusing on software development, algorithms, and modern programming practices."
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-8 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Building2 className="mr-3 h-6 w-6 text-primary" />
              Professional Experience
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative mb-12 last:mb-0">
                  {/* Timeline Dot */}
                  <div className={`absolute left-3 w-6 h-6 rounded-full ${
                    exp.isActive ? 'bg-primary animate-glow' : 'bg-muted'
                  } border-4 border-background z-10`} />
                  
                  {/* Content Card */}
                  <div className="ml-16">
                    <Card className="glass border-border/50 hover-lift">
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-gradient mb-1">
                              {exp.title}
                            </h4>
                            <p className="text-primary font-medium">
                              {exp.company}
                            </p>
                          </div>
                          
                          {exp.isActive && (
                            <span className="mt-2 sm:mt-0 px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                              Current
                            </span>
                          )}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-2 h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                        
                        <ul className="space-y-2 mb-4">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-muted-foreground text-sm leading-relaxed flex">
                              <span className="text-secondary mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span 
                              key={i}
                              className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Calendar className="mr-3 h-6 w-6 text-secondary" />
              Education
            </h3>
            
            <Card className="glass border-border/50 hover-lift">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 mb-4">
                    <Building2 className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gradient text-center mb-2">
                  {education.degree}
                </h4>
                
                <p className="text-primary font-medium text-center mb-4">
                  {education.institution}
                </p>
                
                <div className="flex justify-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    {education.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    {education.location}
                  </div>
                </div>
                
                <p className="text-muted-foreground text-center leading-relaxed">
                  {education.description}
                </p>
                
                <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <div className="text-primary font-bold">GPA</div>
                    <div className="text-sm text-muted-foreground">Maintaining Excellence</div>
                  </div>
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <div className="text-secondary font-bold">Focus</div>
                    <div className="text-sm text-muted-foreground">Full-Stack Development</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Extracurricular Activities */}
            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4 text-gradient">
                Extracurricular Activities
              </h4>
              
              <div className="space-y-3">
                {[
                  "Participate in hackathons and coding competitions",
                  "Actively build side projects exploring full-stack development",
                  "Contribute to open-source repositories on GitHub",
                  "Collaborate with peers on coding projects"
                ].map((activity, index) => (
                  <div key={index} className="flex items-start glass p-3 rounded-lg hover-lift">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span className="text-muted-foreground text-sm">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;