import About from '@/components/About';
import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Web Developer Portfolio</title>
        <meta name="description" content="Portfolio of a web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
