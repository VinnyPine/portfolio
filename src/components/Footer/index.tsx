import StyledFooter from "./style";
import { TfiArrowCircleUp } from "react-icons/tfi";
import { IconButton } from "@mui/material";
import { ApiContext } from "../../contexts/ApiContext";
import { ReactNode, useContext } from "react";
import { motion } from "framer-motion";

interface iProps {
  children: string | ReactNode;
}

const Footer = ({ children }: iProps) => {
  const { showButton } = useContext(ApiContext);

  return (
    <StyledFooter showButton={showButton}>
      <span className="text-footer gray-700">{children}</span>
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
