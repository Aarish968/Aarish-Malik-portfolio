import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Frontend",
      color: "from-blue-500 via-purple-500 to-pink-500",
      bgColor: "from-blue-500/10 to-purple-500/10",
      skills: [
        { name: "React.js", level: 75 },
        { name: "Vue.js", level: 65 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "JavaScript", level: 80 }
      ]
    },
    {
      title: "Backend",
      color: "from-emerald-500 via-teal-500 to-cyan-500",
      bgColor: "from-emerald-500/10 to-teal-500/10",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 80 },
        { name: "FastAPI", level: 90 },
        { name: "Django REST", level: 85 },
        { name: "Python", level: 90 }
      ]
    },
    {
      title: "Database & DevOps",
      color: "from-orange-500 via-red-500 to-pink-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Docker", level: 75 },
        { name: "Git/GitHub", level: 90 },
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
    <>
      <style jsx>{`
        @keyframes magical-glow {
          0%, 100% { 
            text-shadow: 0 0 20px rgba(147, 51, 234, 0.6), 0 0 40px rgba(59, 130, 246, 0.4), 0 0 60px rgba(236, 72, 153, 0.3);
            filter: hue-rotate(0deg);
          }
          25% { 
            text-shadow: 0 0 25px rgba(59, 130, 246, 0.8), 0 0 50px rgba(236, 72, 153, 0.5), 0 0 75px rgba(147, 51, 234, 0.4);
            filter: hue-rotate(90deg);
          }
          50% { 
            text-shadow: 0 0 30px rgba(236, 72, 153, 0.8), 0 0 60px rgba(147, 51, 234, 0.6), 0 0 90px rgba(59, 130, 246, 0.4);
            filter: hue-rotate(180deg);
          }
          75% { 
            text-shadow: 0 0 25px rgba(16, 185, 129, 0.8), 0 0 50px rgba(59, 130, 246, 0.5), 0 0 75px rgba(236, 72, 153, 0.4);
            filter: hue-rotate(270deg);
          }
        }

        @keyframes letter-dance {
          0%, 100% { transform: translateY(0px) rotateZ(0deg) scale(1); }
          25% { transform: translateY(-8px) rotateZ(2deg) scale(1.1); }
          50% { transform: translateY(-4px) rotateZ(-1deg) scale(1.05); }
          75% { transform: translateY(-6px) rotateZ(1deg) scale(1.08); }
        }

        @keyframes morphing-bg {
          0% { 
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
            border-radius: 1rem;
          }
          25% { 
            background: linear-gradient(225deg, rgba(147, 51, 234, 0.15), rgba(236, 72, 153, 0.1));
            border-radius: 2rem;
          }
          50% { 
            background: linear-gradient(315deg, rgba(236, 72, 153, 0.1), rgba(16, 185, 129, 0.15));
            border-radius: 1.5rem;
          }
          75% { 
            background: linear-gradient(45deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.15));
            border-radius: 2.5rem;
          }
          100% { 
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
            border-radius: 1rem;
          }
        }

        @keyframes liquid-wave {
          0%, 100% { transform: translateX(0px) translateY(0px) rotate(0deg); }
          25% { transform: translateX(2px) translateY(-3px) rotate(0.5deg); }
          50% { transform: translateX(-1px) translateY(-2px) rotate(-0.3deg); }
          75% { transform: translateX(1px) translateY(-4px) rotate(0.2deg); }
        }

        @keyframes skill-bar-wave {
          0%, 100% { transform: scaleY(1) skewX(0deg); }
          50% { transform: scaleY(1.1) skewX(2deg); }
        }

        @keyframes particle-float {
          0%, 100% { transform: translateY(0px) scale(1) rotate(0deg); opacity: 0.7; }
          33% { transform: translateY(-10px) scale(1.2) rotate(120deg); opacity: 1; }
          66% { transform: translateY(-5px) scale(0.8) rotate(240deg); opacity: 0.8; }
        }

        .card-hover:hover {
          animation: morphing-bg 2s ease-in-out infinite;
        }

        .card-hover:hover .floating-content {
          animation: liquid-wave 1.5s ease-in-out infinite;
        }

        .card-hover:hover .skill-bar {
          animation: skill-bar-wave 2s ease-in-out infinite;
        }

        .card-hover:hover .particle {
          animation: particle-float 3s ease-in-out infinite;
        }

        .glass-morphism {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .holographic {
          background: linear-gradient(45deg, 
            rgba(255, 0, 150, 0.1) 0%, 
            rgba(0, 255, 255, 0.1) 25%, 
            rgba(255, 255, 0, 0.1) 50%, 
            rgba(255, 0, 150, 0.1) 75%, 
            rgba(0, 255, 255, 0.1) 100%);
          background-size: 400% 400%;
          animation: holographic-shift 3s ease-in-out infinite;
        }

        @keyframes holographic-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>

      <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-br from-background to-muted/20 relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `particle-float ${3 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 perspective-1000">
              Technical{' '}
              <span 
                className="relative inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold cursor-pointer select-none"
                style={{
                  transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transformStyle: 'preserve-3d'
                }}
                onMouseEnter={(e) => {
                  e.target.style.animation = 'magical-glow 1s ease-in-out infinite, letter-dance 0.8s ease-in-out infinite';
                  e.target.style.transform = 'perspective(1000px) rotateX(15deg) rotateY(-10deg) scale(1.2) translateZ(50px)';
                  e.target.style.letterSpacing = '0.1em';
                  
                  // Split text into letters for individual animation
                  const text = e.target.textContent;
                  e.target.innerHTML = text.split('').map((letter, i) => 
                    `<span style="display: inline-block; animation: letter-dance 0.8s ease-in-out infinite; animation-delay: ${i * 0.1}s; transform-origin: center;">${letter}</span>`
                  ).join('');
                }}
                onMouseLeave={(e) => {
                  e.target.style.animation = '';
                  e.target.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateZ(0px)';
                  e.target.style.letterSpacing = 'normal';
                  e.target.innerHTML = 'Skills';
                }}
              >
                Skills
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full shadow-lg shadow-purple-500/50" />
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              A comprehensive toolkit of modern technologies and frameworks that I use to build 
              exceptional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex} 
                className="card-hover glass-morphism border-0 group relative overflow-hidden cursor-pointer"
                style={{
                  transition: 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transformStyle: 'preserve-3d'
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  
                  // Main card transformation
                  card.style.transform = 'perspective(1000px) rotateX(10deg) rotateY(5deg) scale(1.08) translateY(-20px) translateZ(50px)';
                  card.style.filter = 'brightness(0.7) contrast(1.3) saturate(1.4)';
                  card.style.boxShadow = `
                    0 25px 50px rgba(0, 0, 0, 0.5),
                    0 0 100px rgba(147, 51, 234, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `;
                  
                  // Add holographic background
                  card.classList.add('holographic');
                  
                  // Floating animation for content
                  const floatingElements = card.querySelectorAll('.floating-content');
                  floatingElements.forEach((el, index) => {
                    el.style.animation = `liquid-wave ${1.5 + index * 0.3}s ease-in-out infinite`;
                    el.style.animationDelay = `${index * 0.2}s`;
                  });
                  
                  // Skill bars wave effect
                  const skillBars = card.querySelectorAll('.skill-bar');
                  skillBars.forEach((bar, index) => {
                    bar.style.animation = `skill-bar-wave ${2 + index * 0.1}s ease-in-out infinite`;
                    bar.style.animationDelay = `${index * 0.1}s`;
                  });

                  // Create magical particles
                  for (let i = 0; i < 8; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full pointer-events-none particle';
                    particle.style.left = `${Math.random() * 100}%`;
                    particle.style.top = `${Math.random() * 100}%`;
                    particle.style.animation = `particle-float ${2 + Math.random()}s ease-in-out infinite`;
                    particle.style.animationDelay = `${Math.random() * 2}s`;
                    card.appendChild(particle);
                  }
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  
                  card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0px) translateZ(0px)';
                  card.style.filter = 'brightness(1) contrast(1) saturate(1)';
                  card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                  card.classList.remove('holographic');
                  
                  // Reset animations
                  const floatingElements = card.querySelectorAll('.floating-content');
                  floatingElements.forEach((el) => {
                    el.style.animation = '';
                  });
                  
                  const skillBars = card.querySelectorAll('.skill-bar');
                  skillBars.forEach((bar) => {
                    bar.style.animation = '';
                  });

                  // Remove particles
                  const particles = card.querySelectorAll('.particle');
                  particles.forEach(particle => particle.remove());
                }}
              >
                <CardContent className="p-6 relative">
                  <div className="text-center mb-6 floating-content">
                    <div className={`inline-block p-4 rounded-full bg-gradient-to-r ${category.color} mb-4 shadow-lg relative overflow-hidden`}>
                      <div className="w-10 h-10 bg-white/20 rounded-full backdrop-blur-sm" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-3 floating-content">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-white/90">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-300 font-mono bg-black/20 px-2 py-1 rounded">
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden shadow-inner">
                          <div 
                            className={`skill-bar h-full bg-gradient-to-r ${category.color} rounded-full relative overflow-hidden shadow-lg`}
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`,
                              transition: 'width 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-2000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Ambient glow effect */}
                  <div 
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-br ${category.bgColor} rounded-xl blur-xl`}
                    style={{ zIndex: -1 }}
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Tech Stack */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Technologies I{' '}
              <span className="relative">
                Work With
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </span>
            </h3>
            
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "React.js", "Vue.js", "Node.js", "Express.js", "FastAPI", "Django",
                "PostgreSQL", "MongoDB", "Docker", "Git", "GitHub", "GitLab",
                "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Python", "TypeScript"
              ].map((tech, index) => (
                <span 
                  key={index}
                  className={`group px-6 py-3 glass-morphism rounded-full text-sm font-semibold cursor-pointer transition-all duration-500 relative overflow-hidden ${
                    isVisible ? 'animate-slide-up' : 'opacity-0'
                  }`}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-8px) scale(1.15) rotateZ(5deg)';
                    e.target.style.boxShadow = '0 20px 40px rgba(147, 51, 234, 0.4), 0 0 30px rgba(59, 130, 246, 0.3)';
                    e.target.style.background = 'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2))';
                    e.target.style.color = '#ffffff';
                    e.target.style.fontWeight = '700';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0px) scale(1) rotateZ(0deg)';
                    e.target.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.target.style.color = '';
                    e.target.style.fontWeight = '600';
                  }}
                >
                  {tech}
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;