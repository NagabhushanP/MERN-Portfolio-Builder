import React from 'react';
import { User, Briefcase, Mail, Github, Linkedin } from 'lucide-react';

const CreativeTemplate = ({ data }) => (
  <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 p-8">
    <div className="max-w-5xl mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-12 text-white">
          <h1 className="text-6xl font-bold mb-4">
            {data.name || 'Your Name'}
          </h1>
          <p className="text-2xl opacity-90">
            {data.title || 'Your Title'}
          </p>
        </div>
        
        <div className="p-12">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <User className="text-purple-600" /> 
              About
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {data.bio || 'Tell us about yourself...'}
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Briefcase className="text-purple-600" /> 
              Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.projects && data.projects.length > 0 ? (
                data.projects.map((project, idx) => (
                  <div 
                    key={idx} 
                    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {project.description}
                    </p>
                    {project.url && (
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        View →
                      </a>
                    )}
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center py-8">
                  <p className="text-gray-500 text-lg">No projects added yet</p>
                </div>
              )}
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Mail className="text-purple-600" /> 
              Get in Touch
            </h2>
            <div className="flex gap-6 flex-wrap">
              {data.email && (
                <a 
                  href={`mailto:${data.email}`} 
                  className="flex items-center gap-2 bg-purple-100 px-6 py-3 rounded-full text-purple-700 hover:bg-purple-200 transition-colors"
                >
                  <Mail size={20} /> 
                  Email
                </a>
              )}
              {data.github && (
                <a 
                  href={data.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 bg-purple-100 px-6 py-3 rounded-full text-purple-700 hover:bg-purple-200 transition-colors"
                >
                  <Github size={20} /> 
                  GitHub
                </a>
              )}
              {data.linkedin && (
                <a 
                  href={data.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 bg-purple-100 px-6 py-3 rounded-full text-purple-700 hover:bg-purple-200 transition-colors"
                >
                  <Linkedin size={20} /> 
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CreativeTemplate;