import { useState, useEffect } from 'react';
import { Github, Linkedin, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-72 h-72 gradient-glow rounded-full opacity-30 animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 gradient-primary rounded-full opacity-20 animate-pulse-glow" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-secondary/20 rounded-full opacity-40 animate-glow" />
      </div>

      {/* Main Content */}
      <div className={`relative z-20 text-center max-w-4xl mx-auto px-6 pt-20 md:pt-32 transition-all duration-1000 ${
        isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Animated Name with Hover Effect */}
        <div className="relative mb-6 overflow-hidden">
          <h2 
            className="text-4xl md:text-6xl lg:text-7xl font-bold cursor-pointer relative whitespace-nowrap"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main Text Container */}
            <div className="relative h-16 md:h-20 lg:h-24 flex items-center justify-center">
              {/* AARISH MALIK Text */}
              <span 
                className={`absolute inset-0 flex items-center justify-center text-gradient transition-all duration-700 ease-in-out whitespace-nowrap ${
                  isHovered 
                    ? 'opacity-0 transform -translate-y-full scale-95' 
                    : 'opacity-100 transform translate-y-0 scale-100'
                }`}
              >
                AARISH MALIK
              </span>
              
              {/* FULL STACK DEVELOPER Text */}
              <span 
                className={`absolute inset-0 flex items-center justify-center text-gradient transition-all duration-700 ease-in-out whitespace-nowrap ${
                  isHovered 
                    ? 'opacity-100 transform translate-y-0 scale-100' 
                    : 'opacity-0 transform translate-y-full scale-95'
                }`}
              >
                <span className="text-2xl md:text-4xl lg:text-5xl font-bold">
                  FULL STACK DEVELOPER
                </span>
              </span>
            </div>
          </h2>
        </div>
        
        <div className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
          <span className="text-primary">Full Stack Developer</span> & 
          <span className="text-secondary ml-2">Tech Innovator</span>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Passionate about building scalable web applications with cutting-edge technologies. 
          Experienced in React.js, Node.js, Python, and modern DevOps practices.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            className="gradient-primary text-primary-foreground hover:shadow-glow hover-lift px-8 py-3 text-lg font-medium"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          
          {/* <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-primary hover-lift px-8 py-3 text-lg font-medium"
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button> */}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-16">
          <a 
            href="https://github.com/Aarish968" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 hover-lift group"
          >
            <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary" />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/aarish-malik-624499320/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-secondary hover:bg-secondary/10 hover-lift group"
          >
            <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-secondary" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="animate-bounce hover:text-primary transition-colors"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="h-8 w-8 mx-auto" />
        </button>
      </div>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .hover-lift {
          transition: transform 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-2px);
        }
        
        .gradient-glow {
          background: linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)));
        }
        
        .gradient-primary {
          background: linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)));
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;