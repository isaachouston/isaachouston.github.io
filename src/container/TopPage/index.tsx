import React, { useState } from 'react';

import { FaArrowCircleUp } from 'react-icons/fa';
import { Container } from './styles';

const TopPage: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <Container>
      <FaArrowCircleUp
        className="scrollTop"
        onClick={scrollTop}
        size={40}
        style={{
          color: '#e14b5a',
          display: showScroll ? 'flex' : 'none',
        }}
      />
    </Container>
  );
};

export default TopPage;
