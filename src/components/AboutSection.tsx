import { Code, Database, Globe, Server } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Excellence",
      description: "React.js, Vue.js, Tailwind CSS",
      color: "text-primary"
    },
    {
      icon: Server,
      title: "Backend Mastery", 
      description: "Node.js, FastAPI, Django",
      color: "text-secondary"
    },
    {
      icon: Database,
      title: "Database Expert",
      description: "PostgreSQL, MongoDB",
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "DevOps & Tools",
      description: "Docker, Git, CI/CD",
      color: "text-secondary"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-8 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="glass p-8 rounded-2xl hover-lift">
              <h3 className="text-2xl font-bold text-gradient mb-4">
                Full Stack Developer & Tech Enthusiast
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate Full Stack Developer with hands-on experience in designing and 
                implementing scalable web applications. Currently pursuing my Bachelor's in Computer 
                Applications at Lovely Professional University, I combine academic knowledge with 
                practical industry experience.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                With internship experience at Webs Pro Ltd, I've contributed to building robust 
                web applications using modern technologies like React.js, Node.js, FastAPI, and 
                PostgreSQL. I'm proficient in both frontend and backend development, with a strong 
                focus on creating user-centric and efficient software solutions.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                  BCA Student (Expected 2025)
                </span>
                <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium">
                  Full Stack Developer
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                  Open Source Contributor
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Skills Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card key={index} className="glass border-border/50 group card-hover-enhanced overflow-hidden relative">
                <CardContent className="p-6 text-center relative z-10">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-4 group-hover:shadow-glow transition-all duration-500 group-hover:scale-110`}>
                    <item.icon className={`h-8 w-8 ${item.color} transition-all duration-300 group-hover:scale-110`} />
                  </div>
                  <h4 className="font-bold text-foreground mb-2 transition-all duration-300 group-hover:text-primary">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground transition-all duration-300 group-hover:text-foreground">
                    {item.description}
                  </p>
                </CardContent>
                
                {/* Enhanced Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg blur-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg" />
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "1+", label: "Years Experience" },
            { value: "7+", label: "Projects Built" },
            { value: "4+", label: "Technologies" },
            { value: "100%", label: "Dedication" }
          ].map((stat, index) => (
            <div key={index} className="text-center glass p-6 rounded-xl hover-lift stat-card-hover group">
              <div className="text-3xl font-bold text-gradient mb-2 transition-all duration-300 group-hover:scale-110">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm transition-all duration-300 group-hover:text-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .gradient-primary {
          background: linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)));
        }
        
        .hover-lift {
          transition: all 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-2px);
        }
        
        .card-hover-enhanced {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }
        
        .card-hover-enhanced:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        
        .stat-card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .stat-card-hover:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.4);
        }
        
        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .shadow-glow {
          box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.3);
        }
      `}</style>
    </section>
  );
};

export default AboutSection;