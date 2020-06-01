import React from 'react';

import Header from '../components/Header';
import Gretting from '../container/Greeting';
import Skills from '../container/Skills';

const Main: React.FC = () => {
  return (
    <>
      <Header />

      <Gretting />

      <Skills />
    </>
  );
};

export default Main;
