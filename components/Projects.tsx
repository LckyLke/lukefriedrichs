import SecitonWrapper from './SectionWrapper';

const Projects = () => {
  return (
    <SecitonWrapper id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <div className="flex flex-wrap justify-center mt-8">
          {/* Project cards */}
          {/* You will replace these placeholders with actual project data */}
          <div className="m-4 w-80 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src="path_to_project_image"
              alt="Project Image"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold">Project Title</h3>
              <p className="mt-2">Brief description of the project...</p>
            </div>
          </div>

          {/* Repeat for other projects */}
        </div>
      </div>
    </SecitonWrapper>
  );
};

export default Projects;
