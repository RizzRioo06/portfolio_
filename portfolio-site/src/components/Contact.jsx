import React from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-slate-400 text-lg">
            I'm always open to discussing new opportunities, collaborations, or just chatting about tech!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:kyawhmuesan@gmail.com"
            className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 transform hover:-translate-y-1 text-center group"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                <Mail className="text-primary" size={32} />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-slate-100 mb-2">Email</h3>
            <p className="text-primary text-sm break-all">kyawhmuesan@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/kyaw-hmue-san-448a92270/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 transform hover:-translate-y-1 text-center group"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                <Linkedin className="text-primary" size={32} />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-slate-100 mb-2">LinkedIn</h3>
            <p className="text-primary text-sm">kyaw-hmue-san</p>
          </a>

          <a
            href="https://github.com/RizzRioo06"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 transform hover:-translate-y-1 text-center group"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                <Github className="text-primary" size={32} />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-slate-100 mb-2">GitHub</h3>
            <p className="text-primary text-sm">github.com/RizzRioo06</p>
          </a>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-blue-600/10 border border-primary/20 rounded-lg p-8">
          <Send className="text-primary mx-auto mb-4" size={40} />
          <h3 className="text-2xl font-bold text-slate-100 mb-3">Ready to work together?</h3>
          <p className="text-slate-300 mb-6">
            I'm currently available for full-time opportunities and freelance projects.
          </p>
          <a
            href="mailto:kyawhmuesan@gmail.com"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
          >
            Get In Touch
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} KyawHmueSan. All rights reserved.</p>
            <p className="mt-2">Built with React & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
