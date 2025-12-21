import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
  {
    title: 'AI Power Online Learning Platform',
    description: 'A full-stack LMS evolved from a Java console app. Built with Spring Boot and React, utilizing AI-driven workflows to accelerate delivery by 40%.',
    tech: ['Spring Boot', 'React', 'SQL', 'Cursor', 'GitHub Copilot'],
    github: 'https://github.com/kyaw-hmue-San/group2_ELearningManagementSystem', //
    demo: 'https://lms-frontend-882950565528.us-central1.run.app/'
  },
  {
    title: 'AI Diplomacy Translator',
    description: 'A real-time tool that uses AI to translate speech into constructive, diplomatic tones to prevent conflict.',
    tech: ['AI/ML', 'Cursor', 'React', 'Tailwind CSS'],
    github: 'https://github.com/RizzRioo06/hackthonTest'
  },
  {
    title: 'CareerMate AI',
    description: 'An AI/ML Hackathon project providing personalized career guidance by matching student skills with industry demands using machine learning.',
    tech: ['Java', 'AI/ML', 'React'],
    github: 'https://github.com/RizzRioo06/hackathon_CareerMate_AlcholicHut', //
    demo: 'https://hackathon-career-mate-alcholic-hut-eight.vercel.app/'
  }
];

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            What I've Built
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Featured projects showcasing my skills in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center overflow-hidden">
                {/* Placeholder - Replace with actual image */}
                <div className="text-slate-500 text-center">
                  <div className="text-4xl mb-2">🖼️</div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
                
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-xs font-semibold rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-slate-700">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/RizzRioo06"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-semibold transition-colors"
          >
            View all projects on GitHub
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
