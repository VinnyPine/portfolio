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
    --color-white: #ececec;

    

    --font-size-skills: 1.2rem;

    --font-size-title-profile: 1.375rem;
    --font-size-text-profile: 0.9375rem;
    --font-size-title-section: 1.5625rem;
    --font-size-text-section: 1rem;
    --font-size-title-skills: 1.125rem;
    --font-size-title-repos: 1.25rem;
    --font-size-text-repos: 0.9375rem;
    --font-size-text-footer: 0.9375rem;

    @media (min-width: 600px) {
      --font-size-title-profile: 1.875rem;
      --font-size-text-profile: 1.125rem;
      --font-size-title-section: 1.5625rem;
      --font-size-text-section: 1.1rem;
      --font-size-title-skills: 1.125rem;
      --font-size-title-repos: 1.25rem;
      --font-size-text-repos: 0.9375rem;
      --font-size-text-footer: 0.9375rem;
    }

    @media (min-width: 900px) {
    --font-size-skills: 1.8rem;
    }

    @media (min-width: 1000px) {
      --font-size-title-profile: 1.875rem;
      --font-size-text-profile: 1.125rem;
      --font-size-title-section: 2.1875rem;
      --font-size-text-section: 1.5625rem;
      --font-size-title-skills: 1.5625rem;
      --font-size-title-repos: 1.25rem;
      --font-size-text-repos: 0.9375rem;
      --font-size-text-footer: 0.9375rem;
    }
  }

  body {
    font-family: "Space Mono", sans-serif;
  }

`;

export default GlobalStyles;
