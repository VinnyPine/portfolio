import StyledFooter from "./style";
import { TfiArrowCircleUp } from "react-icons/tfi";
import { IconButton } from "@mui/material";
import { ApiContext } from "../../contexts/ApiContext";
import { useContext } from "react";

const Footer = () => {
  const { showButton } = useContext(ApiContext);

  return (
    <StyledFooter showButton={showButton}>
      <span className="text-footer gray-700"> Vinicius • 2023</span>
      <IconButton href="#Profile" aria-label="back to top" size="large">
        <TfiArrowCircleUp />
      </IconButton>
    </StyledFooter>
  );
};

export default Footer;
