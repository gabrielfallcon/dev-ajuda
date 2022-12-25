import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif;
  }
  body {
    background: #0D0F10;
  }
  input, textarea {
    outline: 0;
    border: 0;
  }
`;