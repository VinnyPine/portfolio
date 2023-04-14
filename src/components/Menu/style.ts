import Button, { ButtonProps } from "@mui/material/Button";
import styled from "styled-components";
import { styled as styledMui } from "@mui/material/styles";

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 90%;
  height: 30%;
  margin-top: auto;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: auto;
  }

  @media (min-width: 700px) {
    gap: 50px;
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
});

export default StyledMenu;
