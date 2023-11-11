import React from 'react';
import SecitonWrapper from './SectionWrapper';
import Image from 'next/image';
import me from '../images/me.png';

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
      <Image
        src={me}
        alt="Picture of me"
        width={450}
        height={600}
        quality={100}
        className=" rounded-full mix-blend-multiply"
      />
    </SecitonWrapper>
  );
};

export default HomeContent;
