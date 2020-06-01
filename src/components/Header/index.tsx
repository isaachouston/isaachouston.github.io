import React from 'react';
import { Container, Logo, Lista } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <a href="/">
          <h1> &lt; Isaac Houston /&gt; </h1>
        </a>
      </Logo>
      <Lista>
        <a href="#skills">
          <li>Skills</li>
        </a>
        <a href="/">
          <li>Projetos</li>
        </a>
        <a href="/">
          <li>Contato</li>
        </a>
      </Lista>
    </Container>
  );
};

export default Header;
