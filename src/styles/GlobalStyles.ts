import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --color-primary-100: #6f338f;
    --color-gray-100: #333333;
    --color-gray-200: #5d5d5d;
    --color-gray-300: #727272;
    --color-gray-400: #919191;
    --color-gray-500: #E1E1E1;
    --color-gray-600: #E1E1E1;
    --color-gray-700: #E1E1E1;
  }

  body {
    font-family: "Space Mono", sans-serif;
  }

`;

export default GlobalStyles;
