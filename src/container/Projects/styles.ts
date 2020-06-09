import styled from 'styled-components';

export const Container = styled.div`
  max-width: 90%;
  padding: 20px 10px;
  margin: 1.5em auto 6.5em auto;
  h1 {
    color: #111;
    font-size: 35px;
    margin-bottom: 1.6em;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    h1 {
      text-align: center;
    }
  }
`;

export const RepositoryDiv = styled.div`
  width: 220px;
  color: rgb(88, 96, 105);
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.2) 1px 10px 30px -15px;
  padding: 2rem;
  cursor: pointer;
  height: 150px;
  border-radius: 2px;
  transition: transform 0.2s linear;

  padding: 10px;

  &:hover {
    transform: scale(1.1);
  }

  p {
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
    bottom: 20px;
    position: absolute;
    color: #f24130;
  }
`;

export const ArrowConfig = styled.div`
  .slick-arrow {
    background-color: #bbb;
    box-shadow: rgba(0, 0, 0, 0.2) 1px 10px 30px -15px;
    border-radius: 50%;
  }
`;
