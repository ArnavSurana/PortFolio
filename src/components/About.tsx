
import { Code, Award, Brain, Users, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    { name: 'React/JavaScript', level: 90 },
    { name: 'Node.js/Express', level: 85 },
    { name: 'MongoDB/MySQL', level: 80 },
    { name: 'C/C++', level: 95 },
    { name: 'Python', level: 75 },
    { name: 'Appwrite', level: 85 },
  ];

  const features = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'MERN Stack expertise with modern web technologies'
    },
    {
      icon: Brain,
      title: 'AI/ML Integration',
      description: 'Experience with LangChain, RAG systems, and NLP'
    },
    {
      icon: Award,
      title: 'Competitive Programming',
      description: 'CodeForces Pupil, CodeChef 3-Star, 500+ problems solved'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'SIH 2024 Winner, experienced in team projects'
    }
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-400/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <Star className="text-amber-400 mr-2" size={24} />
            <span className="text-amber-400 font-semibold tracking-wide uppercase text-sm">Get to know me</span>
            <Star className="text-amber-400 ml-2" size={24} />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            About <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-yellow-300 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            B.Tech Computer Science Engineering student at MANIT Bhopal with a passion for 
            full-stack development, AI/ML, and competitive programming.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="w-1 h-8 bg-gradient-to-b from-amber-400 to-yellow-300 mr-4 rounded-full"></span>
              My Journey
            </h3>
            <div className="space-y-6 text-white/80 leading-relaxed">
              <p className="text-lg">
                Currently pursuing B.Tech in Computer Science from MANIT Bhopal with a CGPA of 9.33. 
                I'm passionate about solving real-world problems through technology and have experience 
                in full-stack development with modern technologies.
              </p>
              <p className="text-lg">
                Winner of Smart India Hackathon 2024, where our team developed an AI/ML solution for 
                newspaper title similarity detection. I enjoy competitive programming and have solved 
                500+ problems across various platforms.
              </p>
              <div className="bg-black/30 p-6 rounded-xl border border-amber-400/20">
                <p className="mb-4 text-amber-400 font-semibold text-lg">Education Highlights:</p>
                <div className="space-y-3">
                  <p>🎓 B.Tech CSE, MANIT Bhopal (2023-2027) - CGPA: 9.33</p>
                  <p>📚 12th CBSE (2022-2023) - 94.6%</p>
                  <p>📖 10th CBSE (2020-2021) - 94.6%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="w-1 h-8 bg-gradient-to-b from-amber-400 to-yellow-300 mr-4 rounded-full"></span>
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between text-white/90 mb-3">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-amber-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 h-3 rounded-full transition-all duration-1000 shadow-lg shadow-amber-400/30"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-black/30 p-6 rounded-xl border border-amber-400/20 mt-8">
              <p className="mb-4 text-amber-400 font-semibold text-lg">🏆 Achievements:</p>
              <div className="space-y-2 text-white/80">
                <p>🥇 SIH 2024 Winner (PS-1782)</p>
                <p>🌟 IICPC Global Rank 1132/40,000+</p>
                <p>💻 CodeForces: 1271 Rating (Pupil)</p>
                <p>⭐ CodeChef: 1647 Rating (3-Star)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={feature.title} className="bg-black/40 backdrop-blur-md border border-amber-400/20 hover:border-amber-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-amber-400/20 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400/20 to-yellow-300/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:from-amber-400/30 group-hover:to-yellow-300/30 transition-all duration-300">
                  <feature.icon className="text-amber-400 group-hover:scale-110 transition-transform duration-300" size={32} />
                </div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">{feature.title}</h4>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
