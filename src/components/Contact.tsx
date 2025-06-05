
import { useState } from 'react';
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
  const { toast } = useToast();

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
    <section id="contact" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-amber-400/5 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <MessageCircle className="text-amber-400 mr-2" size={24} />
            <span className="text-amber-400 font-semibold tracking-wide uppercase text-sm">Let's Connect</span>
            <MessageCircle className="text-amber-400 ml-2" size={24} />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Get In <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-yellow-300 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Interested in collaborating on a project or discussing opportunities? 
            I'd love to hear from you. Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-amber-400 to-yellow-300 mr-4 rounded-full"></span>
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.href}
                    className="flex items-center space-x-6 text-white/80 hover:text-white transition-all duration-300 group p-4 rounded-xl hover:bg-amber-400/10 border border-transparent hover:border-amber-400/30"
                  >
                    <div className="p-4 bg-amber-400/10 rounded-xl group-hover:bg-amber-400/20 transition-all duration-300 border border-amber-400/30">
                      <info.icon size={24} className="text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-amber-400">{info.title}</h4>
                      <p className="text-white/70">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-amber-400 to-yellow-300 mr-4 rounded-full"></span>
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-6 text-white/80 hover:text-white transition-all duration-300 group p-4 rounded-xl hover:bg-amber-400/10 border border-transparent hover:border-amber-400/30"
                  >
                    <div className="p-4 bg-amber-400/10 rounded-xl group-hover:bg-amber-400/20 transition-all duration-300 border border-amber-400/30">
                      <link.icon size={24} className="text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-amber-400">{link.title}</h4>
                      <p className="text-white/70">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <Card className="bg-black/40 backdrop-blur-md border border-amber-400/30 hover:border-amber-400/50 transition-all duration-300">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Star className="text-amber-400 mr-3" size={24} />
                  Why Work With Me?
                </h4>
                <ul className="space-y-4 text-white/80">
                  <li className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">Strong academic background with 9.33 CGPA</span>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">Proven track record with SIH 2024 victory</span>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">Full-stack development expertise</span>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">Competitive programming skills and problem-solving</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-black/40 backdrop-blur-md border border-amber-400/30 hover:border-amber-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/20">
            <CardContent className="p-10">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Send className="text-amber-400 mr-3" size={28} />
                Send Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-black/30 border-amber-400/30 text-white placeholder-white/50 focus:border-amber-400 focus:ring-amber-400/30 h-14 text-lg rounded-xl"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-black/30 border-amber-400/30 text-white placeholder-white/50 focus:border-amber-400 focus:ring-amber-400/30 h-14 text-lg rounded-xl"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-black/30 border-amber-400/30 text-white placeholder-white/50 focus:border-amber-400 focus:ring-amber-400/30 resize-none text-lg rounded-xl"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black hover:from-amber-500 hover:to-yellow-600 flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-amber-400/25 h-14 text-lg font-semibold rounded-xl"
                >
                  <Send size={20} />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-20 pt-10 border-t border-amber-400/30">
          <p className="text-white/60 text-lg">
            © 2024 Arnav Surana. Built with React and passion for technology{' '}
            <span className="text-amber-400">⚡</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
