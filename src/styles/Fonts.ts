import { createGlobalStyle } from "styled-components";

const Fonts = createGlobalStyle`
  .title-profile {
    font-size: var(--font-size-title-profile);
    font-weight: bold;
    text-align: center;
  }

  .text-profile {
    font-size: var(--font-size-text-profile);
    font-weight: regular;
    text-align: center;
  }

  .title-section {
    font-size: var(--font-size-title-section);
    font-weight: bold;
    text-align: center;
  }

  .text-section {
    font-size: var(--font-size-text-section);
  }

  .title-skills {
    font-size: var(--font-size-title-skills);
    font-weight: bold;
  }

  .title-repos {
    font-size: var(--font-size-title-repos);
    font-weight: bold;
  }

  .text-repos {
    font-size: var(--font-size-text-repos);
    font-weight: normal;
  }

  .text-footer {
    font-size: var(--font-size-text-footer);
    font-weight: normal;
  }
  
  .gray-100 {
    color: var(--color-gray-100);
  }

  .gray-700 {
    color: var(--color-gray-700);
  }
`;

export default Fonts;
