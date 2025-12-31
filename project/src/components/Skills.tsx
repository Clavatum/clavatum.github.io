import { Code2, Gamepad2, Lightbulb, Users, CheckSquare } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

export default function Skills() {
  const skills: Skill[] = [
    { name: 'C#', icon: <Code2 className="w-8 h-8" /> },
    { name: 'Unity', icon: <Gamepad2 className="w-8 h-8" /> },
    { name: 'OOP', icon: <Code2 className="w-8 h-8" /> },
    { name: 'Design Patterns', icon: <Lightbulb className="w-8 h-8" /> },
    { name: 'Project Management', icon: <CheckSquare className="w-8 h-8" /> },
    { name: 'Teamwork', icon: <Users className="w-8 h-8" /> },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-16 pb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/20 group-hover:to-pink-600/20 rounded-xl transition-all duration-500"></div>

              <div className="relative flex flex-col items-center gap-3">
                <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300 group-hover:scale-110 transform transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-white font-semibold text-center group-hover:text-purple-300 transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}