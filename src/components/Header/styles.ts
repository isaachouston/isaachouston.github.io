import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 90%;
  padding: 20px 10px;
  margin: 0px auto;
`;

export const Logo = styled.div`
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1em;

    h1 {
      font-family: 'OrtisanSignature';
      font-weight: bold;
      padding: 0 5px;
      color: #e14b5a;
      transition: color 0.4s;
      &:hover {
        color: ${shade(0.2, '#e14b5a')};
      }
    }
    span {
      color: #111;
    }
  }
`;
export const Lista = styled.ul`
  display: flex;
  list-style: none;
  overflow: hidden;
  margin-right: 50px;

  a {
    text-decoration: none;
    transition: color 0.4s;
    li {
      margin-left: 30px;
      color: #111;
      &:hover {
        color: ${shade(0.1, '#e14b5a')};
      }
    }
  }
`;
