import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

import { Container } from './styles';

const SocialMedia: React.FC = () => {
  return (
    <Container>
      <a id="github" href="https://github.com/isaachouston">
        <FaGithub />
      </a>
      <a
        id="linkedin"
        href="https://www.linkedin.com/in/isaac-houston-6068ba10a/"
      >
        <FaLinkedin />
      </a>
      <a id="email" href="mailto:isaacprh@gmail.com">
        <GrMail />
      </a>
      <a id="facebook" href="https://www.facebook.com/isaac.houston.9">
        <FaFacebook />
      </a>
    </Container>
  );
};

export default SocialMedia;
