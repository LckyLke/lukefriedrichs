// components/Navbar.tsx
import React from 'react';
import Button from './Button';
import { SectionType } from '@/types/types';

const Navbar = ({
  activeSection,
  setSection,
}: {
  activeSection: SectionType;
  setSection: React.Dispatch<React.SetStateAction<SectionType>>;
}) => {
  //returns a function that, when excuted, to the sectionId passed as parameter
  const scrollToSection = (sectionId: SectionType) => () => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      setSection(sectionId);
    } else {
      console.warn(`Element with ID '${sectionId}' not found.`);
    }
  };

  return (
    <nav className=" text-white ">
      <div className=" fixed top-0 z-10 pt-2 w-full flex items-center justify-between ">
        <a href="#" className="pl-4 text-xl font-bold">
          Brand
        </a>
        <ul className=" flex  justify-around w-5/6">
          <Button
            text={'Home'}
            onClick={scrollToSection('home')}
            active={activeSection == 'home'}
          />
          <Button
            text={'About'}
            onClick={scrollToSection('about')}
            active={activeSection == 'about'}
          />
          <Button
            text={'Projects'}
            onClick={scrollToSection('projects')}
            active={activeSection == 'projects'}
          />
          <Button
            text={'Contact'}
            onClick={scrollToSection('contact')}
            active={activeSection == 'contact'}
          />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
