
import { ExternalLink, Github, Star, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'ScholarBridge - RAG System',
      description: 'A full-stack website implementing Retrieval-Augmented Generation (RAG) system for querying PDF books using natural language. Features Appwrite authentication, vector embeddings for semantic search, and LLM capabilities.',
      tech: ['Appwrite', 'PineCone', 'Python', 'React', 'JavaScript'],
      github: '#',
      live: '#',
      year: '2025',
      featured: true
    },
    {
      title: 'Smart India Hackathon - SLIFTEX',
      description: 'Frontend website for AI/ML model (PS-1782) to detect similarities between newspaper titles. Integrated LangChain for NLP-based similarity detection and won 1st place at SIH 2024.',
      tech: ['React', 'LangChain', 'Vite', 'FastAPI', 'MongoDB'],
      github: '#',
      live: '#',
      year: 'Dec 2024',
      featured: true
    },
    {
      title: 'Crop Disease Detection Platform',
      description: 'MERN Stack website with AI/ML backend for crop disease detection. Features LangChain integration for image and symptom analysis, WebSocket communication for real-time updates.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'WebSockets'],
      github: '#',
      live: '#',
      year: '2025'
    },
    {
      title: 'Competitive Programming Profile',
      description: 'Active competitive programmer with 500+ problems solved across multiple platforms. Achieved significant rankings in global competitions and contests.',
      tech: ['C++', 'Data Structures', 'Algorithms', 'Problem Solving'],
      github: '#',
      live: '#',
      year: 'Ongoing'
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <Star className="text-amber-400 mr-2" size={24} />
            <span className="text-amber-400 font-semibold tracking-wide uppercase text-sm">My Work</span>
            <Star className="text-amber-400 ml-2" size={24} />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Featured <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-yellow-300 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on, ranging from full-stack web applications 
            to AI/ML integration and competitive programming achievements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <Card key={index} className={`bg-black/40 backdrop-blur-md border transition-all duration-300 transform hover:scale-105 group overflow-hidden ${
              project.featured 
                ? 'border-amber-400/40 hover:border-amber-400/80 hover:shadow-2xl hover:shadow-amber-400/20' 
                : 'border-white/20 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-400/10'
            }`}>
              {project.featured && (
                <div className="bg-gradient-to-r from-amber-400 to-yellow-300 text-black text-xs font-bold px-3 py-1 absolute top-4 right-4 rounded-full flex items-center">
                  <Star size={12} className="mr-1" />
                  FEATURED
                </div>
              )}
              
              <div className="aspect-video bg-gradient-to-br from-amber-400/10 to-yellow-300/10 relative overflow-hidden border-b border-amber-400/20">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">{project.title}</h3>
                  <div className="flex items-center text-amber-400 text-sm font-semibold">
                    <Calendar size={16} className="mr-2" />
                    {project.year}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <p className="text-white/80 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-amber-400/10 text-amber-400 border border-amber-400/30 rounded-full text-sm font-medium hover:bg-amber-400/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="border-amber-400/50 text-amber-400 hover:bg-amber-400/10 hover:border-amber-400 flex items-center gap-2 flex-1 transition-all duration-300"
                  >
                    <Github size={18} />
                    Code
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black hover:from-amber-500 hover:to-yellow-600 flex items-center gap-2 flex-1 transition-all duration-300 shadow-lg shadow-amber-400/25"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <Card className="bg-black/40 backdrop-blur-md border border-amber-400/30 hover:border-amber-400/50 transition-all duration-300">
            <CardContent className="p-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Technical <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Expertise</span>
                </h3>
                <div className="h-1 w-16 bg-gradient-to-r from-amber-400 to-yellow-300 mx-auto rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <h4 className="text-lg font-bold text-amber-400 mb-4">Programming Languages</h4>
                  <p className="text-white/80 leading-relaxed">C/C++, JavaScript, Python, HTML, CSS</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-amber-400 mb-4">Frameworks & Tools</h4>
                  <p className="text-white/80 leading-relaxed">React.js, Node.js, Express.js, Vite, Postman</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-amber-400 mb-4">Databases</h4>
                  <p className="text-white/80 leading-relaxed">MongoDB, MySQL, Appwrite, MongoDB Atlas</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-amber-400 mb-4">Areas of Interest</h4>
                  <p className="text-white/80 leading-relaxed">Web Development, Competitive Programming, AI/ML</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
