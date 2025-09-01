import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91-9837258458",
      link: "tel:+919837258458",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Mail,
      title: "Email",
      value: "aarishmalik222@email.com",
      link: "mailto:aarishmalik222@email.com",
      gradient: "from-secondary to-secondary-glow"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Sahibabad, Ghaziabad",
      link: "",
      gradient: "from-primary to-secondary"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/Aarish968",
      color: "hover:text-primary"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aarish-malik-624499320/",
      color: "hover:text-secondary"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gradient">
                Get In Touch
              </h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm currently open to full-time opportunities and freelance projects. 
                Whether you have a project in mind, want to collaborate, or just want to 
                say hello, I'd love to hear from you!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="glass border-border/50 hover-lift group">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${contact.gradient}`}>
                        <contact.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">
                          {contact.title}
                        </h4>
                        {contact.link ? (
                          <a 
                            href={contact.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">
                            {contact.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Follow Me On
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 glass rounded-full border border-border/50 hover-lift group ${social.color} transition-all duration-300`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="glass border-border/50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-gradient">
                  Send Message
                </h3>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input 
                        placeholder="Your Name"
                        className="bg-input border-border focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input 
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-input border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input 
                      placeholder="Project Discussion"
                      className="bg-input border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="bg-input border-border focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full gradient-primary text-primary-foreground hover:shadow-glow hover-lift"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border/50">
          <p className="text-muted-foreground">
            © 2025 Aarish Malik. Built with React, TypeScript & Tailwind CSS.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Designed & Developed with ❤️ in India
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;