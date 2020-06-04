import React from 'react';
import { Fade } from 'react-awesome-reveal';

import SkillImg from '../../assets/developer_activity.svg';

import ProfessionalSkills from '../../components/ProfessionalSkills';

import { Container, SkillImgDiv, SkillsDiv } from './styles';

const Skills: React.FC = () => {
  return (
    <Fade direction="right" delay={1000} triggerOnce>
      <Container id="skills">
        <SkillImgDiv>
          <img src={SkillImg} alt="developer activity" />
        </SkillImgDiv>
        <SkillsDiv>
          <h1>Skills</h1>
          <p>Habilidades profissionais</p>
          <ProfessionalSkills />
        </SkillsDiv>
      </Container>
    </Fade>
  );
};

export default Skills;
