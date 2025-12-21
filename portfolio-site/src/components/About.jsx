import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Bio Section */}
          <div className="md:col-span-2 space-y-4 text-slate-300 text-lg leading-relaxed">
            <p>
              With a strong foundation in full-stack development, I specialize in building modern, 
              scalable web applications that solve real-world problems. My journey in software 
              development began with a fascination for how technology can transform businesses and 
              improve user experiences.
            </p>
            <p>
              I have extensive experience working with enterprise-level frameworks like Spring Boot 
              for robust backend systems, coupled with modern frontend technologies like React to 
              create seamless, responsive user interfaces. My approach combines clean code principles, 
              test-driven development, and a keen eye for performance optimization.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge through technical writing. I believe in continuous learning 
              and staying current with industry best practices to deliver cutting-edge solutions.
            </p>
          </div>

          {/* Quick Facts Card */}
          <div className="bg-slate-900 rounded-lg p-6 border border-slate-700 shadow-xl">
            <h3 className="text-xl font-semibold text-slate-100 mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <GraduationCap className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-slate-200">Education</p>
                  <p className="text-slate-400 text-sm">Bachelor of Software Engineering</p>
                <p className="text-slate-400 text-sm">Mae Fah Luang University</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-slate-200">Graduation</p>
                  <p className="text-slate-400 text-sm">2028</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-slate-200">Location</p>
                  <p className="text-slate-400 text-sm">Chiang Rai, Thailand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
