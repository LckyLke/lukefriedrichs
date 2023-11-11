import React from 'react';
import SecitonWrapper from './SectionWrapper';

const HomeContent = () => {
  return (
    <SecitonWrapper id="home">
      <section className="flex flex-col items-center justify-center min-h-screen text-gray-800">
        <h1 className="text-6xl font-bold">
          Hello, I'm <span className="text-blue-600">Luke Friedrichs</span>
        </h1>
        <p className="mt-4 text-xl">
          Web Developer | Computer Science Graduate
        </p>
      </section>
    </SecitonWrapper>
  );
};

export default HomeContent;
