
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Star, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'arnav.surana051175@gmail.com',
      href: 'mailto:arnav.surana051175@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91-9399707667',
      href: 'tel:+919399707667'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'MANIT Bhopal, Madhya Pradesh',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/arnav-surana',
      href: 'https://github.com/arnav-surana'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/arnav-surana',
      href: 'https://linkedin.com/in/arnav-surana'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-t from-amber-400/5 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="flex items-center justify-center mb-6">
            <MessageCircle className="text-amber-400 mr-2 animate-pulse" size={24} />
            <span className="text-amber-400 font-semibold tracking-wide uppercase text-sm">Let's Connect</span>
            <MessageCircle className="text-amber-400 ml-2 animate-pulse" size={24} />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            Get In <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-yellow-300 mx-auto mb-8 rounded-full animate-glow"></div>
          <p className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Interested in collaborating on a project or discussing opportunities? 
            I'd love to hear from you. Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-amber-400 to-yellow-300 mr-4 rounded-full animate-pulse"></span>
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.title}
                    href={info.href}
                    className="flex items-center space-x-6 text-white/80 hover:text-white transition-all duration-300 group p-4 rounded-xl hover:bg-amber-400/10 border border-transparent hover:border-amber-400/30 transform hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-4 bg-amber-400/10 rounded-xl group-hover:bg-amber-400/20 transition-all duration-300 border border-amber-400/30 group-hover:rotate-6">
                      <info.icon size={24} className="text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-amber-400">{info.title}</h4>
                      <p className="text-white/70 text-sm sm:text-base">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-amber-400 to-yellow-300 mr-4 rounded-full animate-pulse"></span>
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.title}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-6 text-white/80 hover:text-white transition-all duration-300 group p-4 rounded-xl hover:bg-amber-400/10 border border-transparent hover:border-amber-400/30 transform hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-4 bg-amber-400/10 rounded-xl group-hover:bg-amber-400/20 transition-all duration-300 border border-amber-400/30 group-hover:rotate-6">
                      <link.icon size={24} className="text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-amber-400">{link.title}</h4>
                      <p className="text-white/70 text-sm sm:text-base">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <Card className="bg-black/40 backdrop-blur-md border border-amber-400/30 hover:border-amber-400/50 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 sm:p-8">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center">
                  <Star className="text-amber-400 mr-3 animate-pulse" size={24} />
                  Why Work With Me?
                </h4>
                <ul className="space-y-4 text-white/80">
                  <li className="flex items-start space-x-4 group">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-sm sm:text-lg group-hover:text-white transition-colors duration-300">Strong academic background with 9.33 CGPA</span>
                  </li>
                  <li className="flex items-start space-x-4 group">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-sm sm:text-lg group-hover:text-white transition-colors duration-300">Proven track record with SIH 2024 victory</span>
                  </li>
                  <li className="flex items-start space-x-4 group">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-sm sm:text-lg group-hover:text-white transition-colors duration-300">Full-stack development expertise</span>
                  </li>
                  <li className="flex items-start space-x-4 group">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-sm sm:text-lg group-hover:text-white transition-colors duration-300">Competitive programming skills and problem-solving</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className={`bg-black/40 backdrop-blur-md border border-amber-400/30 hover:border-amber-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-400/20 transform hover:scale-105 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
            <CardContent className="p-8 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center">
                <Send className="text-amber-400 mr-3 animate-pulse" size={28} />
                Send Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="group">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-black/30 border-amber-400/30 text-white placeholder-white/50 focus:border-amber-400 focus:ring-amber-400/30 h-12 sm:h-14 text-base sm:text-lg rounded-xl group-hover:border-amber-400/50 transition-all duration-300"
                  />
                </div>
                <div className="group">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-black/30 border-amber-400/30 text-white placeholder-white/50 focus:border-amber-400 focus:ring-amber-400/30 h-12 sm:h-14 text-base sm:text-lg rounded-xl group-hover:border-amber-400/50 transition-all duration-300"
                  />
                </div>
                <div className="group">
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-black/30 border-amber-400/30 text-white placeholder-white/50 focus:border-amber-400 focus:ring-amber-400/30 resize-none text-base sm:text-lg rounded-xl group-hover:border-amber-400/50 transition-all duration-300"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black hover:from-amber-500 hover:to-yellow-600 flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-amber-400/25 h-12 sm:h-14 text-base sm:text-lg font-semibold rounded-xl group"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className={`text-center mt-16 sm:mt-20 pt-10 border-t border-amber-400/30 transition-all duration-1000 delay-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <p className="text-white/60 text-base sm:text-lg">
            © 2024 Arnav Surana. Built with React and passion for technology{' '}
            <span className="text-amber-400 animate-pulse">⚡</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
