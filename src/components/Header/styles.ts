import styled from 'styled-components';

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
      color: #ccc;
    }
    span {
      color: #ccc;
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

    li {
      margin-left: 30px;
      color: #ccc;
    }
  }
`;
