import styled from "styled-components";
import { styled as styledMui } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import { ToggleButtonGroup, ToggleButtonProps } from "@mui/material";

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

export const StyledToggleButtonGroup = styledMui(ToggleButtonGroup)<ToggleButtonProps>({
  flexWrap: "wrap",
  width: "280px",
  margin: "0.6em 0.2em",
  // Buttons
  "& .MuiToggleButtonGroup-grouped": {
    width: "100%",
    maxWidth: "fit-content",
    padding: "0.2em 0.5em",
    borderRadius: "20px",
    backgroundColor: "#0000000f",
    color: "var(--color-white)",
    "&:hover": {
      backgroundColor: "#0000003b"
    },
    "&.Mui-selected": {
      backgroundColor: "#00000048"
    },
  },
  "@media (min-width: 600px)": {
    width: "100%",
  },
});

export default StyledSkillsCase;
