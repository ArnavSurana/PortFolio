
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: '/placeholder.svg',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/placeholder.svg',
      tech: ['Vue.js', 'Firebase', 'Socket.io', 'Tailwind'],
      github: '#',
      live: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '/placeholder.svg',
      tech: ['React', 'API Integration', 'Charts.js', 'CSS Grid'],
      github: '#',
      live: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with smooth animations, contact forms, and CMS integration for easy content management.',
      image: '/placeholder.svg',
      tech: ['Next.js', 'Framer Motion', 'Sanity CMS', 'Vercel'],
      github: '#',
      live: '#'
    },
    {
      title: 'Social Media App',
      description: 'A social media platform with real-time messaging, image sharing, and advanced privacy controls built with modern technologies.',
      image: '/placeholder.svg',
      tech: ['React Native', 'GraphQL', 'PostgreSQL', 'AWS'],
      github: '#',
      live: '#'
    },
    {
      title: 'Learning Management System',
      description: 'An educational platform with course management, progress tracking, and interactive learning modules for students and instructors.',
      image: '/placeholder.svg',
      tech: ['Angular', 'Express.js', 'MySQL', 'Video.js'],
      github: '#',
      live: '#'
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
            Here are some of the projects I've worked on. Each one represents a unique challenge 
            and learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden group hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
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
      </div>
    </section>
  );
};

export default Projects;
