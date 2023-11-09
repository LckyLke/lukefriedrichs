import React from 'react';

const projects = [
  // Add your projects here
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    imageUrl: '/project1.png',
  },
  // ...more projects
];

const Projects = () => {
  return (
    <section id="projects" className="p-8">
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
