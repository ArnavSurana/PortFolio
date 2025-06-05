
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'ScholarBridge - RAG System',
      description: 'A full-stack website implementing Retrieval-Augmented Generation (RAG) system for querying PDF books using natural language. Features Appwrite authentication, vector embeddings for semantic search, and LLM capabilities.',
      image: '/placeholder.svg',
      tech: ['Appwrite', 'PineCone', 'Python', 'React', 'JavaScript'],
      github: '#',
      live: '#',
      year: '2025'
    },
    {
      title: 'Smart India Hackathon - SLIFTEX',
      description: 'Frontend website for AI/ML model (PS-1782) to detect similarities between newspaper titles. Integrated LangChain for NLP-based similarity detection and won 1st place at SIH 2024.',
      image: '/placeholder.svg',
      tech: ['React', 'LangChain', 'Vite', 'FastAPI', 'MongoDB'],
      github: '#',
      live: '#',
      year: 'Dec 2024'
    },
    {
      title: 'Crop Disease Detection Platform',
      description: 'MERN Stack website with AI/ML backend for crop disease detection. Features LangChain integration for image and symptom analysis, WebSocket communication for real-time updates.',
      image: '/placeholder.svg',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'WebSockets'],
      github: '#',
      live: '#',
      year: '2025'
    },
    {
      title: 'Competitive Programming Profile',
      description: 'Active competitive programmer with 500+ problems solved across multiple platforms. Achieved significant rankings in global competitions and contests.',
      image: '/placeholder.svg',
      tech: ['C++', 'Data Structures', 'Algorithms', 'Problem Solving'],
      github: '#',
      live: '#',
      year: 'Ongoing'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Projects
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, ranging from full-stack web applications 
            to AI/ML integration and competitive programming achievements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden group hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <span className="text-purple-300 text-sm">{project.year}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-white/70 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/30 text-white hover:bg-white/10 flex items-center gap-2"
                  >
                    <Github size={16} />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Technical Expertise</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">Programming Languages</h4>
                  <p className="text-white/70">C/C++, JavaScript, Python, HTML, CSS</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">Frameworks & Tools</h4>
                  <p className="text-white/70">React.js, Node.js, Express.js, Vite, Postman</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">Databases</h4>
                  <p className="text-white/70">MongoDB, MySQL, Appwrite, MongoDB Atlas</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">Areas of Interest</h4>
                  <p className="text-white/70">Web Development, Competitive Programming, AI/ML</p>
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
