
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
            I craft beautiful, functional, and user-centered digital experiences. 
            Let's build something amazing together.
          </p>
        </div>

        <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
            View My Work
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full">
            Download CV
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="#"
            className="text-white/60 hover:text-white transition-colors duration-300 transform hover:scale-110"
          >
            <Github size={28} />
          </a>
          <a
            href="#"
            className="text-white/60 hover:text-white transition-colors duration-300 transform hover:scale-110"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="#"
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
