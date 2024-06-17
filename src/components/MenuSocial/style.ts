import styled from "styled-components";
import Button, { ButtonProps } from "@mui/material/Button";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { styled as styledMui } from "@mui/material/styles";

const StyledSocialMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-top: 20px;

  div > a > svg {
    font-size: 32px;
  }

  a > svg {
    font-size: 28px;
  }

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    width: 600px;

    div > a > svg {
      font-size: 40px;
    }

    a {
      font-size: 16px;

      > span > svg {
        font-size: 35px !important;
      }
    }
  }
`;

export const StyledButton = styledMui(Button)<ButtonProps>({
  border: "1px solid var(--color-gray-100)",
  color: "var(--color-gray-100)",
}) as typeof Button;

export const StyledIconButton = styledMui(IconButton)<IconButtonProps>({
  color: "var(--color-gray-100)",
}) as typeof IconButton;

export default StyledSocialMenu;
