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
    <section id={id} className={' scrollItem ' + bgColor}>
      <div className=" innerScrollItem">{children}</div>
    </section>
  );
};

export default SectionWrapper;
