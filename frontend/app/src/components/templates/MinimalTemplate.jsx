import React from 'react';

const MinimalTemplate = ({ data }) => (
  <div className="min-h-screen bg-gray-50 p-8">
    <div className="max-w-3xl mx-auto">
      <header className="border-b border-gray-300 pb-6 mb-8">
        <h1 className="text-5xl font-light text-gray-900 mb-2">
          {data.name || 'Your Name'}
        </h1>
        <p className="text-lg text-gray-600">
          {data.title || 'Your Title'}
        </p>
      </header>
      
      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
          About
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          {data.bio || 'Tell us about yourself...'}
        </p>
      </section>
      
      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
          Work
        </h2>
        <div className="space-y-6">
          {data.projects && data.projects.length > 0 ? (
            data.projects.map((project, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-medium text-gray-900 mb-1">
                  {project.name}
                </h3>
                <p className="text-gray-600">
                  {project.description}
                </p>
                {project.url && (
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-900 underline text-sm mt-1 inline-block hover:text-gray-700"
                  >
                    {project.url}
                  </a>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">No projects added yet</p>
          )}
        </div>
      </section>
      
      <section>
        <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
          Contact
        </h2>
        <div className="space-y-2">
          {data.email && (
            <p className="text-gray-700">
              <a href={`mailto:${data.email}`} className="hover:underline">
                {data.email}
              </a>
            </p>
          )}
          {data.github && (
            <p className="text-gray-700">
              <a 
                href={data.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline"
              >
                {data.github}
              </a>
            </p>
          )}
          {data.linkedin && (
            <p className="text-gray-700">
              <a 
                href={data.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline"
              >
                {data.linkedin}
              </a>
            </p>
          )}
        </div>
      </section>
    </div>
  </div>
);

export default MinimalTemplate;