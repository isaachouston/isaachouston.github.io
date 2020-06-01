import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Main from './routes/Main';

import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Main />
      </Router>
    </>
  );
};

export default App;
