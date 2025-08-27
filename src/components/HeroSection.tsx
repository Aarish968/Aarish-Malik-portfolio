import { useState, useEffect } from 'react';
import { Github, Linkedin, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

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
        <img 
          src={heroImage} 
          alt="Developer workspace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-72 h-72 gradient-glow rounded-full opacity-30 animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 gradient-primary rounded-full opacity-20 animate-pulse-glow" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-secondary/20 rounded-full opacity-40 animate-glow" />
      </div>

      {/* Main Content */}
      <div className={`relative z-20 text-center max-w-4xl mx-auto px-6 transition-all duration-1000 ${
        isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
      }`}>
        <div className={`relative z-20 text-center max-w-4xl mx-auto px-6 pt-20 md:pt-32 transition-all duration-1000 ${
  isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
}`}>
  <h2 className="text-6xl md:text-8xl font-bold mb-6">
    <span className="text-gradient">AARISH MALIK</span>
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
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-primary hover-lift px-8 py-3 text-lg font-medium"
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-16">
          <a 
            href="https://github.com/Aarish468" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 hover-lift group"
          >
            <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary" />
          </a>
          
          <a 
            href="https://linkedin.com/in/aarish-malik" 
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
    </section>
  );
};

export default HeroSection;