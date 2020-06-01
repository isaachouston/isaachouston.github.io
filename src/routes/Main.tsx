import React from 'react';

import Header from '../components/Header';
import Gretting from '../container/Greeting';
import Skills from '../container/Skills';
import Projects from '../container/Projects';

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <Gretting />
      <Skills />
      <Projects />
    </>
  );
};

export default Main;
