import styled from 'styled-components';

export const Container = styled.footer`
  max-width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  p {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
