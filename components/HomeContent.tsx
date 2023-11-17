import React from 'react';
import SectionWrapper from './SectionWrapper';
import Image from 'next/image';
import me from '../images/me.png';
import { Canvas } from '@react-three/fiber';
import ThreeDText from './ThreeDText';
import Box from './Box';
import TextGrowOnHover from './TextGrowOnHover';
const HomeContent = () => {
  return (
    <SectionWrapper id="home">
      <section className="flex flex-col items-center justify-center min-h-screen text-gray-800">
        <div className="text-6xl font-bold">
          <TextGrowOnHover text="Hello world, I'm" />
          <TextGrowOnHover text="Luke Friedrichs" />
        </div>
        <div className="mt-4 text-xl">
          <TextGrowOnHover
            text="
          Web Developer | Computer Science Graduate 
          "
          />
        </div>
      </section>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]} />
      </Canvas>
      <div className="image-container">
        <Image
          src={me}
          alt="Picture of me"
          width={450}
          height={600}
          quality={100}
          className=" "
        />
      </div>
    </SectionWrapper>
  );
};

export default HomeContent;
