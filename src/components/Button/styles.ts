import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  height: 40px;
  border-radius: 5px;
  border: 0;
  padding: 0 16px;
  background: #f24130;
  margin-top: 15px;
  text-transform: uppercase;
  color: #edf1f3;
  margin-right: 20px;

  transition: background-color 0.4s;

  &:hover {
    background: ${shade(0.4, '#F24130')};
  }
`;
