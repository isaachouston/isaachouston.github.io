import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  height: 40px;
  border-radius: 5px;
  border: 0;
  padding: 0 16px;
  background: #e14b5a;
  margin-top: 15px;
  text-transform: uppercase;
  color: #111;
  margin-right: 20px;

  transition: background-color 0.4s;

  &:hover {
    background: ${shade(0.4, '#e14b5a')};
  }
`;
