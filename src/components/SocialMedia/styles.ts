import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  a {
    color: #9c9ca1;
    font-size: 2.4em;
    height: 2.6rem;
    line-height: 2.6rem;
    margin-right: 30px;
    position: relative;
    margin-top: 10px;

    margin-bottom: 10px;

    &:hover {
      transition: 0.5s;
      color: rgba(1, 1, 1, 0.1);
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    max-width: 100%;
  }
`;
