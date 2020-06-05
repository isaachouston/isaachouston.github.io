import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  padding: 20px 10px;
  margin: 1.5em auto 6.5em auto;
`;

export const SkillImgDiv = styled.div`
  width: 45%;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const SkillsDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  line-height: 2.8em;
  h1 {
    font-size: 35px;
    color: #111;
  }

  p {
    font-size: 18px;
    text-transform: uppercase;
    color: rgba(1, 1, 1, 0.3);
  }
`;
