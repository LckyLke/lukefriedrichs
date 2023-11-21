'use client';
import Head from 'next/head';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import HomeContent from '@/components/HomeContent';
import Navbar from '@/components/navbar/Navbar';
import { useState, useEffect } from 'react';
import { SectionType } from '@/types/types';
import Contact from '@/components/Contact';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const ARROW_SIZE = '3em';

let curDefault: SectionType = 'home';
export default function Home() {
  const [section, setSection] = useState<SectionType>('home');
  const order: SectionType[] = ['home', 'about', 'projects', 'contact'];

  const nextSection = (): void => {
    const currentIndex = order.indexOf(section);
    const nextIndex = (currentIndex + 1) % order.length;
    setSection(order[nextIndex]);
    scrollToSection(order[nextIndex])();
  };

  const previousSection = (): void => {
    const currentIndex = order.indexOf(section);
    const previousIndex = (currentIndex - 1 + order.length) % order.length;
    setSection(order[previousIndex]);
    scrollToSection(order[previousIndex])();
  };
  const [isDisabled, setIsDisabled] = useState(false);

  // Handle button click
  const handleClick = (sectionNavigation: () => void) => {
    if (isDisabled) {
      return;
    }
    sectionNavigation(); // Call the original onClick function

    setIsDisabled(true); // Disable button

    // Re-enable the button after 1 second
    setTimeout(() => setIsDisabled(false), 950);
  };

  //returns a function that, when excuted, to the sectionId passed as parameter
  const scrollToSection = (sectionId: SectionType) => () => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      setTimeout(() => {
        sectionElement.scrollIntoView();
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 50);
      }, 900); //todo: remove this bad solution maybe?
      setSection(sectionId);
    } else {
      console.warn(`Element with ID '${sectionId}' not found.`);
    }
  };

  return (
    <div className="bg-background dark:bg-background mainpage">
      <Head>
        <title>Luke Friedrichs' Portfolio</title>
        <meta name="description" content="Luke Friedrichs - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar activeSection={section} scrollToSection={scrollToSection} />
      <main className="scrollContainer">
        <HomeContent />
        <About />
        <Projects />
        <Contact />
      </main>
      <button
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 p-2 rounded-full wiggle"
        onClick={() => handleClick(previousSection)}
      >
        <AiOutlineArrowLeft size={ARROW_SIZE} />
      </button>
      <button
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50  p-2 rounded-full wiggle"
        onClick={() => handleClick(nextSection)}
      >
        <AiOutlineArrowRight size={ARROW_SIZE} />
      </button>
    </div>
  );
}
