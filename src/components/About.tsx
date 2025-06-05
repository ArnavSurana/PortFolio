
import { Code, Palette, Zap, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'MongoDB', level: 85 },
  ];

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful and intuitive user interfaces'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimizing for speed and seamless user experience'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborating effectively with diverse teams'
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
            I'm passionate about creating digital experiences that make a difference. 
            With expertise in modern web technologies and a keen eye for design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">My Story</h3>
            <p className="text-white/70 mb-4 leading-relaxed">
              With over 5 years of experience in web development, I've worked with startups 
              and established companies to bring their visions to life. I believe in the power 
              of technology to solve real-world problems.
            </p>
            <p className="text-white/70 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or enjoying a good cup of coffee while sketching new ideas.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
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
