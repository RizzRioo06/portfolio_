import React from 'react';
import { Code2, Boxes, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={32} />,
      skills: [
        'Java',
        'JavaScript / TypeScript',
        'Python',
        'SQL',
        'HTML / CSS'
      ]
    },
    {
      title: 'AI Productivity and Stacks',
      icon: <Boxes size={32} />,
      skills: [
        'Cursor (Expert)',
        'ChatGPT',
        'GitHub Copilot',
        'Gemini AI'
      ]
    },
    {
      title: 'Frameworks & Technologies',
      icon: <Boxes size={32} />,
      skills: [
        'Spring Boot',
        'React.js',
        'Tailwind CSS',
        'Node.js',
        'Hibernate / JPA',
        'RESTful APIs'
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: <Wrench size={32} />,
      skills: [
        'Git / GitHub',
        'Docker',
        'Postman',
        'Linux',
        'Maven / Gradle',
        'PostgreSQL / MySQL'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 transform hover:-translate-y-2"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-primary">{category.icon}</div>
                <h3 className="text-xl font-bold text-slate-100">{category.title}</h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-base">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
