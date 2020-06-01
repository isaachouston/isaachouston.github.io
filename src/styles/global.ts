import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #4545E5;
    -webkit-font-smoothing: antialiased
  }


  body, input, button {
    font: 16px "Salsa", sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
