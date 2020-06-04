import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 2em;
`;

export const Icon = styled.ul`
  list-style: none;
  color: #9c9ca1;
  font-size: 50px;
  display: flex;

  li {
    margin-right: 10px;

    &:hover {
      color: rgba(1, 1, 1, 0.1);
      transition: 0.3s ease-in;
    }
  }
`;
