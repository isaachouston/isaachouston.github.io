import React from 'react';
import { Fade } from 'react-awesome-reveal';
import SocialMedia from '../../components/SocialMedia';
import ContactImg from '../../assets/message.svg';

import { Container, ContactDiv, ContactImgDiv } from './styles';

const Contact: React.FC = () => {
  return (
    <Fade direction="top" delay={1000} triggerOnce>
      <Container id="contact">
        <ContactDiv>
          <h1>Entre em contato!</h1>
          <p>
            Fique a vontade para me mandar uma mensagem sobre trabalhos ou
            projetos, ou até mesmo um oi! <span>👋</span>
          </p>
          <p>Aberto a oportunidades: Sim</p>
          <p>
            <a href="tel:31989233594">+55(31) 98923-3594</a>
          </p>

          <p>
            <a href="mailto:isaacprh@gmail.com">isaacprh@gmail.com</a>
          </p>
          <SocialMedia />
        </ContactDiv>
        <ContactImgDiv>
          <img src={ContactImg} alt="Imagem de contato" />
        </ContactImgDiv>
      </Container>
    </Fade>
  );
};

export default Contact;
