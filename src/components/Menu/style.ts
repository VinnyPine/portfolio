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
`;

export const StyledButton = styledMui(Button)<ButtonProps>({
  backgroundColor: "#ededed36",
  borderRadius: "20px",
});

export default StyledMenu;
