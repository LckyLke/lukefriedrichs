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

let curDefault: SectionType = 'home';
export default function Home() {
  const [section, setSection] = useState<SectionType>('home');
  useEffect(() => {
    const sections: SectionType[] = ['home', 'about', 'projects', 'contact']; // Add your section IDs here

    const handleScroll = () => {
      let currentSection = section; // Start with the current active section

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the section is within a certain range in the viewport
          if (rect.top < window.innerHeight / 2 && rect.bottom > 0) {
            currentSection = sectionId;
          }
        }
      });

      setSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div>
      <Head>
        <title>Luke Friedrichs' Portfolio</title>
        <meta name="description" content="Luke Friedrichs - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar activeSection={section} setSection={setSection} />
      <HomeContent />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
