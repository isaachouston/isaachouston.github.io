import React from 'react';
import { Flip } from 'react-awesome-reveal';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Flip delay={1000} triggerOnce>
      <Container>
        <p>Feito por Isaac Houston - 2020 🐱‍🏍</p>
      </Container>
    </Flip>
  );
};
export default Footer;
