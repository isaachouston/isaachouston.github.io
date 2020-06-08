import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  padding: 20px 10px;
  margin: 1.5em auto 5.5em auto;

  @media (max-width: 768px) {
    max-width: 100%;
    flex-direction: column-reverse;
  }
`;

export const GrettingTextDiv = styled.div`
  display: flex;
  margin-top: 5em;
  flex-direction: column;
  width: 47%;
  h1 {
    font-size: 45px;
    color: #111;
  }
  p {
    color: rgba(1, 1, 1, 0.3);
    font-size: 22px;
    margin: 20px 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const GrettingImgDiv = styled.div`
  width: 43%;
  img {
    max-width: 80%;
    height: auto;
    top: 70px;
    right: 0;
  }
  @media (max-width: 768px) {
    width: 90%;
    img {
      max-width: 100%;
    }
  }
`;

export const GrettingButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  a {
    margin-right: 30px;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    a {
      margin-right: 0px;
    }
  }
`;
