import styled from 'styled-components';

export const Container = styled.div`
  max-width: 90%;
  padding: 20px 10px;
  margin: 0 auto;
  h1 {
    color: #ccc;
    font-size: 40px;
    margin-bottom: 1.6em;
  }

  a {
    text-decoration: none;
  }
`;

export const RepositoryDiv = styled.div`
  background: #ccc;
  width: 220px;
  height: 150px;
  border-radius: 2px;
  transition: transform 0.2s linear;
  color: rgba(4, 18, 48, 0.9);
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
  }
`;
