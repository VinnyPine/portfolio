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

  .gray-100 {
    color: var(--color-gray-100);
  }

`;

export default Fonts;
