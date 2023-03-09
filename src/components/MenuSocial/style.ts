import Button, { ButtonProps } from "@mui/material/Button";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import styled from "styled-components";
import { styled as styledMui } from "@mui/material/styles";

const StyledSocialMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-top: auto;
  height: 20%;
`;

export const StyledButton = styledMui(Button)<ButtonProps>({
  border: "1px solid var(--color-gray-100)",
  color: "var(--color-gray-100)",
});

export const StyledIconButton = styledMui(IconButton)<IconButtonProps>({
  color: "var(--color-gray-100)",
});

export default StyledSocialMenu;
