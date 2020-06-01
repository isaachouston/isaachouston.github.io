import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 2em;
`;

export const Icon = styled.ul`
  list-style: none;
  color: #fff;
  font-size: 50px;
  display: flex;

  li {
    margin-right: 10px;

    &:hover {
      color: #090818;
      transition: 0.5s ease-in;
    }
  }
`;
