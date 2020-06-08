import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  padding: 20px 10px;
  margin: 1.5em auto 6.5em auto;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 auto 2.5em auto;
    max-width: 100%;
  }
`;

export const SkillImgDiv = styled.div`
  width: 45%;

  img {
    max-width: 100%;
    height: auto;
  }
  @media (max-width: 768px) {
    width: 100%;
    img {
      max-width: 100%;
    }
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

  @media (max-width: 768px) {
    width: 100%;
    font-size: 30px;
    text-align: center;
    line-height: normal;
  }
`;
