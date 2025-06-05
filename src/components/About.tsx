
import { Code, Award, Brain, Users } from 'lucide-react';
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
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            B.Tech Computer Science Engineering student at MANIT Bhopal with a passion for 
            full-stack development, AI/ML, and competitive programming.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
            <p className="text-white/70 mb-4 leading-relaxed">
              Currently pursuing B.Tech in Computer Science from MANIT Bhopal with a CGPA of 9.33. 
              I'm passionate about solving real-world problems through technology and have experience 
              in full-stack development with modern technologies.
            </p>
            <p className="text-white/70 mb-4 leading-relaxed">
              Winner of Smart India Hackathon 2024, where our team developed an AI/ML solution for 
              newspaper title similarity detection. I enjoy competitive programming and have solved 
              500+ problems across various platforms.
            </p>
            <div className="text-white/70">
              <p className="mb-2"><strong>Education:</strong></p>
              <p className="mb-1">• B.Tech CSE, MANIT Bhopal (2023-2027) - CGPA: 9.33</p>
              <p className="mb-1">• 12th CBSE (2022-2023) - 94.6%</p>
              <p>• 10th CBSE (2020-2021) - 94.6%</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-white/80 mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-white/70">
              <p className="mb-2"><strong>Achievements:</strong></p>
              <p className="mb-1">• SIH 2024 Winner (PS-1782)</p>
              <p className="mb-1">• IICPC Global Rank 1132/40,000+</p>
              <p className="mb-1">• CodeForces: 1271 Rating (Pupil)</p>
              <p>• CodeChef: 1647 Rating (3-Star)</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <feature.icon className="text-purple-400 mx-auto mb-4" size={48} />
                <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-white/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
