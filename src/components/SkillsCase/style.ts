import styled from "styled-components";
import { styled as styledMui } from "@mui/material/styles";
import Chip from "@mui/material/Chip";

const StyledSkillsCase = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 30px;

  > div {
    margin-top: 10px;
    width: 100%;

    > h3 {
      margin-bottom: 10px;
    }
  }

  @media (min-width: 600px) {
    gap: 50px;
  }
`;

export const StyledChip = styledMui(Chip)({
  color: "var(--color-gray-500)",
  borderColor: "transparent",
  borderRadius: "5px",
  "&:hover": {
    borderColor: "var(--color-gray-500)",
  },
  padding: "1em 0.4em",
});

export default StyledSkillsCase;
