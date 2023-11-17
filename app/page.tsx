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

  return (
    <div className="mainpage text-white">
      <Head>
        <title>Luke Friedrichs' Portfolio</title>
        <meta name="description" content="Luke Friedrichs - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar activeSection={section} setSection={setSection} />
      <main className="scrollContainer">
        <HomeContent />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
