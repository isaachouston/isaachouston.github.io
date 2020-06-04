import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-width: 90%;
  padding: 20px 10px;
  margin: 5em auto;
  display: flex;
  align-items: center;
`;

export const ContactDiv = styled.div`
  width: 60%;

  h1 {
    margin-bottom: 1em;
    font-size: 26px;
    color: #111;
  }
  p {
    line-height: 2.3rem;

    a {
      text-decoration: none;
      color: #111;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.1, '#e14b5a')};
      }
    }
  }
  span {
    animation-duration: 1.8s;
    animation-iteration-count: infinite;
    animation-name: wave;
    display: inline-block;
    transform-origin: 70% 70%;

    @keyframes wave {
      0% {
        transform: rotate(0deg);
      }
      10% {
        transform: rotate(-26deg);
      }
      20% {
        transform: rotate(28deg);
      }
      30% {
        transform: rotate(-26deg);
      }
      40% {
        transform: rotate(26deg);
      }
      50% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
`;

export const ContactImgDiv = styled.div`
  width: 40%;

  img {
    max-width: 100%;
    height: auto;
    margin-left: 40px;
  }
`;
