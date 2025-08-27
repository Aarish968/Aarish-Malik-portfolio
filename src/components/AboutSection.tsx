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
              <Card key={index} className="glass border-border/50 hover-lift group">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-4 group-hover:shadow-glow transition-all duration-300`}>
                    <item.icon className={`h-8 w-8 ${item.color}`} />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "2+", label: "Years Experience" },
            { value: "10+", label: "Projects Built" },
            { value: "5+", label: "Technologies" },
            { value: "100%", label: "Dedication" }
          ].map((stat, index) => (
            <div key={index} className="text-center glass p-6 rounded-xl hover-lift">
              <div className="text-3xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;