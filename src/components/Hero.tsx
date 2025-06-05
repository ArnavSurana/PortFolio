
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
              Arnav Surana
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
            Computer Science Engineering Student & Full Stack Developer
          </p>
          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
            B.Tech CSE student at MANIT Bhopal with expertise in MERN Stack, AI/ML integration, 
            and competitive programming. Winner of Smart India Hackathon 2024.
          </p>
        </div>

        <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
            View My Work
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full">
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/arnav-surana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-300 transform hover:scale-110"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/arnav-surana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-300 transform hover:scale-110"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:arnav.surana051175@gmail.com"
            className="text-white/60 hover:text-white transition-colors duration-300 transform hover:scale-110"
          >
            <Mail size={28} />
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="text-white/60 mx-auto" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
