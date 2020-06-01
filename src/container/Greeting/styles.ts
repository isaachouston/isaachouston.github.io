import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  padding: 20px 10px;
  margin: 0px auto;
`;

export const GrettingTextDiv = styled.div`
  display: flex;
  margin-top: 5em;
  flex-direction: column;
  width: 47%;
  h1 {
    font-size: 45px;
    color: #ddd;
  }
  p {
    font-size: 22px;
    margin: 10px 0;
  }
`;

export const GrettingImgDiv = styled.div`
  width: 43%;
  img {
    max-width: 100%;
    height: auto;
    top: 70px;
    right: 0;
  }
`;

export const GrettingButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  a {
    margin-right: 30px;
  }
`;
