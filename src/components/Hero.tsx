
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-yellow-300/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-500/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="text-center max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Sparkles className="text-amber-400 mr-3 animate-pulse" size={32} />
              <span className="text-amber-400 font-semibold tracking-wide uppercase text-sm">Welcome to my portfolio</span>
              <Sparkles className="text-amber-400 ml-3 animate-pulse" size={32} />
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent animate-gradient">
                  Arnav Surana
                </span>
              </h1>
              
              <div className="h-1 w-32 bg-gradient-to-r from-amber-400 to-yellow-300 mx-auto lg:mx-0 rounded-full animate-glow"></div>
              
              <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 leading-relaxed font-light">
                Computer Science Engineering Student
              </p>
              <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                B.Tech CSE student at MANIT Bhopal with expertise in MERN Stack, AI/ML integration, 
                and competitive programming. Winner of Smart India Hackathon 2024.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
              <Button 
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black hover:from-amber-500 hover:to-yellow-600 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl shadow-amber-400/25 font-semibold text-lg group"
              >
                View My Work
                <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" size={20} />
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-amber-400/50 text-white hover:bg-amber-400/10 hover:border-amber-400 px-8 py-4 rounded-full transition-all duration-300 font-semibold text-lg group"
              >
                <Download className="mr-2 group-hover:translate-y-1 transition-transform duration-300" size={20} />
                Download Resume
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/arnav-surana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-amber-400 transition-all duration-300 transform hover:scale-125 p-4 rounded-full border border-white/20 hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-400/25 group"
              >
                <Github size={28} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="https://linkedin.com/in/arnav-surana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-amber-400 transition-all duration-300 transform hover:scale-125 p-4 rounded-full border border-white/20 hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-400/25 group"
              >
                <Linkedin size={28} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="mailto:arnav.surana051175@gmail.com"
                className="text-white/70 hover:text-amber-400 transition-all duration-300 transform hover:scale-125 p-4 rounded-full border border-white/20 hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-400/25 group"
              >
                <Mail size={28} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-amber-400/20 to-yellow-300/20 border-4 border-amber-400/30 shadow-2xl shadow-amber-400/20 animate-float flex items-center justify-center overflow-hidden">
                {/* Photo placeholder - replace with actual photo */}
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center text-amber-400 text-6xl font-bold">
                  AS
                </div>
                {/* Uncomment and update src when you have your photo */}
                {/* <img 
                  src="/path-to-your-photo.jpg" 
                  alt="Arnav Surana" 
                  className="w-full h-full object-cover rounded-full"
                /> */}
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full animate-pulse opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full animate-pulse opacity-15"></div>
            </div>
          </div>
        </div>

        <div className="mt-20 animate-bounce">
          <ArrowDown className="text-amber-400 mx-auto animate-pulse" size={36} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
