import React from 'react';
import GreetingImg from '../../assets/desktopgretting.jpg';
import SocialMedia from '../../components/SocialMedia';
import Button from '../../components/Button';

import {
  Container,
  GrettingTextDiv,
  GrettingImgDiv,
  GrettingButtonDiv,
} from './styles';

const Greeting: React.FC = () => {
  return (
    <Container>
      <GrettingTextDiv>
        <h1>Oi, sou Isaac Houston</h1>
        <p>
          Desenvolvedor Full Stack, com base em NodeJS, ReactJS, React Native
        </p>
        <SocialMedia />
        <GrettingButtonDiv>
          <a href="/">
            <Button type="submit">Contato</Button>
          </a>
          <a href="/">
            <Button type="submit">Currículo</Button>
          </a>
        </GrettingButtonDiv>
      </GrettingTextDiv>
      <GrettingImgDiv>
        <img src={GreetingImg} alt="gretting" />
      </GrettingImgDiv>
    </Container>
  );
};

export default Greeting;
