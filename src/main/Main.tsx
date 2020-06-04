import React from 'react';

import Header from '../components/Header';
import Gretting from '../container/Greeting';
import Skills from '../container/Skills';
import Projects from '../container/Projects';
import Contact from '../container/Contact';
import Footer from '../components/Footer';

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <Gretting />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Main;
