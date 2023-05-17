import StyledFooter from "./style";
import { TfiArrowCircleUp } from "react-icons/tfi";
import { IconButton } from "@mui/material";
import { ApiContext } from "../../contexts/ApiContext";
import { useContext } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const { showButton } = useContext(ApiContext);

  console.log(showButton);

  return (
    <StyledFooter showButton={showButton}>
      <span className="text-footer gray-700"> Vinicius • 2023</span>
      {showButton && (
        <motion.div
          className="btBackToTop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <IconButton href="#Profile" aria-label="back to top">
            <TfiArrowCircleUp />
          </IconButton>
        </motion.div>
      )}
    </StyledFooter>
  );
};

export default Footer;
