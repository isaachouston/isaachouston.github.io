import React from 'react';

import SkillImg from '../../assets/developerActivity.svg';

import ProfessionalSkills from '../../components/ProfessionalSkills';

import { Container, SkillImgDiv, SkillsDiv } from './styles';

const Skills: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default Skills;
