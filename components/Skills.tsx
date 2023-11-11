import SecitonWrapper from './SectionWrapper';

const Skills = () => {
  return (
    <SecitonWrapper id="skills">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center">Skills</h2>
        <div className="flex flex-wrap justify-center mt-8">
          {/* Skills List */}
          <div className="m-4">
            <span className="text-lg font-semibold">JavaScript</span>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: '90%' }}
              ></div>
            </div>
          </div>
          {/* Repeat for other skills */}
        </div>
      </div>
    </SecitonWrapper>
  );
};

export default Skills;
