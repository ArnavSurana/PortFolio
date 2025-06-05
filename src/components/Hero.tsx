
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-300/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="text-center max-w-5xl mx-auto relative z-10">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-amber-400 mr-3" size={32} />
            <span className="text-amber-400 font-semibold tracking-wide uppercase text-sm">Welcome to my portfolio</span>
            <Sparkles className="text-amber-400 ml-3" size={32} />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
              Arnav Surana
            </span>
          </h1>
          
          <div className="h-1 w-32 bg-gradient-to-r from-amber-400 to-yellow-300 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-2xl md:text-3xl text-white/90 mb-6 leading-relaxed font-light">
            Computer Science Engineering Student & Full Stack Developer
          </p>
          <p className="text-lg text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            B.Tech CSE student at MANIT Bhopal with expertise in MERN Stack, AI/ML integration, 
            and competitive programming. Winner of Smart India Hackathon 2024.
          </p>
        </div>

        <div className="animate-fade-in flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black hover:from-amber-500 hover:to-yellow-600 px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl shadow-amber-400/25 font-semibold text-lg">
            View My Work
          </Button>
          <Button variant="outline" className="border-2 border-amber-400/50 text-white hover:bg-amber-400/10 hover:border-amber-400 px-10 py-4 rounded-full transition-all duration-300 font-semibold text-lg">
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center space-x-8 mb-16">
          <a
            href="https://github.com/arnav-surana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-amber-400 transition-all duration-300 transform hover:scale-125 p-3 rounded-full border border-white/20 hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-400/25"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/arnav-surana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-amber-400 transition-all duration-300 transform hover:scale-125 p-3 rounded-full border border-white/20 hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-400/25"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:arnav.surana051175@gmail.com"
            className="text-white/70 hover:text-amber-400 transition-all duration-300 transform hover:scale-125 p-3 rounded-full border border-white/20 hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-400/25"
          >
            <Mail size={28} />
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="text-amber-400 mx-auto" size={36} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
