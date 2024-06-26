import Button, { ButtonProps } from "@mui/material/Button";
import styled from "styled-components";
import { styled as styledMui } from "@mui/material/styles";

const StyledMenu = styled.div`
  width: 90%;

  > div {
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 30%;

    @media (min-width: 600px) {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 30px;
    }

    @media (min-width: 700px) {
      gap: 50px;
    }

    @media (min-width: 2000px) {
      scale: 1.4;
    }
  }
`;

export const StyledButton = styledMui(Button)<ButtonProps>({
  backgroundColor: "#ededed36",
  borderRadius: "20px",
  "@media (min-width: 600px)": {
    width: "120px",
  },
  "@media (min-width: 700px)": {
    width: "150px",
  },
  ":hover": {
    backgroundColor: "#b4b4b436",
  },
});

export default StyledMenu;
