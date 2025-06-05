
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
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
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Interested in collaborating on a project or discussing opportunities? 
            I'd love to hear from you. Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="flex items-center space-x-4 text-white/80 hover:text-white transition-colors duration-300 group"
                >
                  <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-300">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    <p className="text-white/60">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
            <div className="space-y-4 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-white/80 hover:text-white transition-colors duration-300 group"
                >
                  <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-300">
                    <link.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{link.title}</h4>
                    <p className="text-white/60">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-white mb-4">Why Work With Me?</h4>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <span>Strong academic background with 9.33 CGPA</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <span>Proven track record with SIH 2024 victory</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <span>Full-stack development expertise</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <span>Competitive programming skills and problem-solving</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-purple-400"
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
                    className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-purple-400"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-purple-400 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
                >
                  <Send size={20} />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-white/60">
            © 2024 Arnav Surana. Built with React and passion for technology ⚡
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
