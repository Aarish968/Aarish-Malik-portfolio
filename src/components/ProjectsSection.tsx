import { ExternalLink, Github, Calendar, Users, Database } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Hello Porter",
      subtitle: "Healthcare Management Platform",
      description: "Advanced healthcare and appointment management platform with secure authentication, online appointments, benefits tracking, and additional healthcare services.",
      technologies: ["React.js", "PostgreSQL", "Authentication", "Healthcare APIs"],
      features: [
        "Secure user authentication system",
        "Online appointment scheduling",
        "Benefits and insurance tracking",
        "Patient dashboard with medical history",
        "Healthcare provider management"
      ],
      category: "Web Application",
      status: "Completed",
      icon: Users,
      gradient: "from-primary to-primary-glow"
    },
    {
      title: "Easy-Reports",
      subtitle: "Digital Medical Reporting System",
      description: "Comprehensive digital medical reporting system where doctors and staff can upload patient reports with advanced security measures, notifications, and intuitive dashboards.",
      technologies: ["React.js", "Node.js", "Security Framework", "Dashboard UI"],
      features: [
        "Secure file upload and management",
        "Real-time notifications system",
        "Advanced security measures",
        "Intuitive admin dashboard",
        "Patient report management"
      ],
      category: "Web Application",
      status: "Completed",
      icon: Database,
      gradient: "from-secondary to-secondary-glow"
    },
    {
      title: "Password Generator",
      subtitle: "Secure Password Tool",
      description: "Customizable password generator web tool allowing users to set password length and include alphanumeric/special characters for enhanced security.",
      technologies: ["JavaScript", "Web APIs", "Security", "UI/UX"],
      features: [
        "Customizable password length",
        "Include/exclude character types",
        "Copy to clipboard functionality",
        "Strength indicator",
        "Secure random generation"
      ],
      category: "Web Tool",
      status: "Completed",
      icon: Calendar,
      gradient: "from-primary to-secondary"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-muted/10 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work, demonstrating expertise in full-stack development, 
            user experience design, and modern web technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass border-border/50 hover-lift group overflow-hidden">
              <CardHeader className="p-0">
                {/* Project Header with Gradient */}
                <div className={`p-6 pb-4 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                        <project.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 bg-white/20 text-white rounded text-xs font-medium backdrop-blur-sm">
                          {project.category}
                        </span>
                        <span className="px-2 py-1 bg-white/20 text-white rounded text-xs font-medium backdrop-blur-sm">
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 gradient-primary text-primary-foreground hover:shadow-glow"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Want to see more of my work?
            </h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub profile for more projects, contributions, and code samples.
            </p>
            <Button >
              <a 
            href="https://github.com/Aarish968" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 hover-lift group"
          >
            <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary" />
          </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;