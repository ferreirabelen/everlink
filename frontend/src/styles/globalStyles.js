
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.colors.cream};
    color: ${({ theme }) => theme.colors.text};
    font-family: "DM Sans", sans-serif;
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Fraunces", serif;
    line-height: 1.2;
  }

  button, input, textarea, select {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
