import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const ModernTemplate = ({ data }) => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <div className="text-center mb-8">
        <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
          {data.name?.charAt(0) || 'U'}
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          {data.name || 'Your Name'}
        </h1>
        <p className="text-xl text-gray-600">
          {data.title || 'Your Title'}
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          {data.bio || 'Tell us about yourself...'}
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>
        <div className="grid gap-4">
          {data.projects && data.projects.length > 0 ? (
            data.projects.map((project, idx) => (
              <div 
                key={idx} 
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-2">
                  {project.description}
                </p>
                {project.url && (
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-purple-600 hover:underline text-sm"
                  >
                    View Project →
                  </a>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-4">No projects added yet</p>
          )}
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact</h2>
        <div className="flex gap-4 flex-wrap">
          {data.email && (
            <a 
              href={`mailto:${data.email}`} 
              className="flex items-center gap-2 text-gray-600 hover:text-purple-600"
            >
              <Mail size={20} /> {data.email}
            </a>
          )}
          {data.github && (
            <a 
              href={data.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-gray-600 hover:text-purple-600"
            >
              <Github size={20} /> GitHub
            </a>
          )}
          {data.linkedin && (
            <a 
              href={data.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-gray-600 hover:text-purple-600"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default ModernTemplate;