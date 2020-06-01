import React from 'react';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaReact,
  FaDocker,
} from 'react-icons/fa';
import { DiPostgresql } from 'react-icons/di';

import { Container, Icon } from './styles';

const ProfessionalSkills: React.FC = () => {
  return (
    <Container>
      <Icon>
        <li>
          <FaHtml5 />
        </li>
        <li>
          <FaCss3 />
        </li>
        <li>
          <FaJs />
        </li>
        <li>
          <FaNodeJs />
        </li>
        <li>
          <FaReact />
        </li>
        <li>
          <FaDocker />
        </li>
        <li>
          <DiPostgresql />
        </li>
      </Icon>
    </Container>
  );
};

export default ProfessionalSkills;
