import React from 'react';

import SkillImg from '../../assets/developerActivity.svg';

import { Container, SkillImgDiv } from './styles';

const Skills: React.FC = () => {
  return (
    <>
      <Container id="skills">
        <SkillImgDiv>
          <img src={SkillImg} alt="developer activity" />
        </SkillImgDiv>
      </Container>
    </>
  );
};

export default Skills;
