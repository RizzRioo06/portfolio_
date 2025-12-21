import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 leading-tight">
                Hi, I'm <span className="text-primary">Kyaw Hmue San</span>.
                <br />
              </h1>
              <p className="text-xl sm:text-2xl text-slate-400 font-medium">
                I am an AI-First Engineer building high-efficiency web applications.
                Specializing in the Java Spring Boot & React ecosystem.
              </p>
            </div>

            <p className="text-lg text-slate-300 max-w-xl">
              Passionate about creating elegant solutions to complex problems. I transform ideas into 
              high-performance, user-centric applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-primary/50"
              >
                View My Work
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
              >
                <Mail size={20} />
                Contact Me
              </a>
            </div>
          </div>

          {/* Placeholder for Professional Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-64 h-64 sm:w-88 sm:h-88 bg-slate-700 rounded-full flex items-center justify-center text-slate-400">
                  {/* Placeholder - Replace with actual image */}
                  <div className="text-center">
                    <div className="text-6xl mb-2">👤</div>
                    <p className="text-sm">Your Photo Here</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
