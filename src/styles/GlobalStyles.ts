import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --color-primary-100: #6f338f;
    --color-gray-100: #E1E1E1;
  }

  body {
    font-family: "Space Mono", sans-serif;
  }

`;

export default GlobalStyles;
