import styled from "styled-components";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled as styledMui } from "@mui/material/styles";

const StyledProjects = styled.div`
  max-width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 30px;
  flex-wrap: wrap;

  > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    background-color: var(--color-white);
    padding: 15px;
    border-radius: 10px;
    width: 100%;

    > img {
      width: 100%;
      object-fit: cover;
      object-position: center;
    }

    > .buttonsCase {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 5%;
    }
  }

  @media (min-width: 450px) {
    > div {
      padding: 34px;
    }
  }

  @media (min-width: 900px) {
    flex-direction: row;
    gap: 10px;

    > div {
      padding: 12px;
      width: clamp(200px, 50%, 400px);
    }
  }
`;

export const StyledButton = styledMui(Button)<ButtonProps>({
  border: "1px solid var(--color-gray-100)",
  color: "var(--color-gray-100)",
}) as typeof Button;

export default StyledProjects;
