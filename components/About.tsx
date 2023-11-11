import SecitonWrapper from './SectionWrapper';

const About = () => {
  return (
    <SecitonWrapper id="about">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="mt-4">
          I'm a passionate Web Developer with a Bachelor's degree in Computer
          Science. I love building responsive and interactive web applications.
          My journey in coding started in high school and has been an exciting
          adventure ever since.
        </p>
      </div>
    </SecitonWrapper>
  );
};

export default About;
