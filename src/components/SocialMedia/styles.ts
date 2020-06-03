import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  a {
    color: #ccc;
    font-size: 1.3rem;
    height: 2.6rem;
    line-height: 2.6rem;
    margin-right: 30px;
    position: relative;

    margin-bottom: 10px;

    &:hover {
      transition: 0.5s;
      color: rgba(4, 18, 48, 0.9);
    }
  }
`;
