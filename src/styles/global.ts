import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;

  }



  body {

    -webkit-font-smoothing: antialiased;

  }


  body, input, button {
    font: 16px "Raleway", sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
