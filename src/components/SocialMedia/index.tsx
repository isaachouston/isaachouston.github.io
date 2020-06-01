import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaGoogle } from 'react-icons/fa';

import { Container } from './styles';

const SocialMedia: React.FC = () => {
  return (
    <Container>
      <a href="https://github.com/isaachouston">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/isaac-houston-6068ba10a/">
        <FaLinkedin />
      </a>
      <a href="isaacprh@gmail.com">
        <FaGoogle />
      </a>
      <a href="https://www.facebook.com/isaac.houston.9">
        <FaFacebook />
      </a>
    </Container>
  );
};

export default SocialMedia;
