import React from 'react';
import { SectionType } from '@/types/types';

const SectionWrapper = ({
  children,
  bgColor,
  id,
}: {
  children: React.ReactNode;
  bgColor?: string;
  id: SectionType;
}) => {
  return (
    <section
      id={id}
      className={
        'h-screen flex justify-center items-center scrollItem ' + bgColor
      }
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
