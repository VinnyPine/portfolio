import { createGlobalStyle } from "styled-components";

const Fonts = createGlobalStyle`
  height: 50%;


  .title-profile {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }

  .text-profile {
    font-size: 15px;
    font-weight: regular;
    text-align: center;
  }

  .title-section {
    font-size: 25px;
    font-weight: bold;
    text-align: center;
  }

  .title-skills {
    font-size: 18px;
    font-weight: bold;
  }

  .gray-100 {
    color: var(--color-gray-100);
  }

  .gray-700 {
    color: var(--color-gray-700);
  }

`;

export default Fonts;
