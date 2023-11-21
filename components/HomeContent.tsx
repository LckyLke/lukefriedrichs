import React from 'react';
import SectionWrapper from './SectionWrapper';
import Image from 'next/image';
import me from '../images/me.png';
import { Canvas } from '@react-three/fiber';
import ThreeDText from './ThreeDText';
import TextGrowOnHover from './TextGrowOnHover';
const HomeContent = () => {
  return (
    <SectionWrapper id="home">
      <section className="flex flex-col items-center justify-center min-h-screen ">
        <div className="text-6xl font-bold flex flex-col ">
          <TextGrowOnHover text="Hello world, " />
          <TextGrowOnHover text="I'm Luke Friedrichs" />
        </div>
        <div className="mt-4 text-xl">
          <TextGrowOnHover
            text="
          Web Developement | Computer Science Student
          "
          />
        </div>
      </section>
      {/*  <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]} />
      </Canvas>
  */}
    </SectionWrapper>
  );
};

export default HomeContent;
