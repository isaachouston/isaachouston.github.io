import React from 'react';
import { Fade } from 'react-awesome-reveal';
import GreetingImg from '../../assets/coding.svg';
// import GreetingImg from '../../assets/isaac.png';
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
    <Fade direction="left" delay={1000} triggerOnce>
      <Container>
        <GrettingTextDiv>
          <h1>Oi, sou Isaac Houston</h1>
          <p>
            Desenvolvedor Full Stack, com base em NodeJS, ReactJS, React Native
          </p>
          <SocialMedia />
          <GrettingButtonDiv>
            <a href="#contact">
              <Button>Contato</Button>
            </a>
            <a href="https://docs.google.com/document/d/1mjXzJeqGhY9OqpTbF3o9zk586fYiPxdn1wIMoJFz5gM/edit?usp=sharing">
              <Button>Currículo</Button>
            </a>
          </GrettingButtonDiv>
        </GrettingTextDiv>
        <GrettingImgDiv>
          <img src={GreetingImg} alt="gretting" />
        </GrettingImgDiv>
      </Container>
    </Fade>
  );
};

export default Greeting;
