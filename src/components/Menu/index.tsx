import StyledMenu, { StyledButton } from "./style";
import { motion } from "framer-motion";
import { showUpVariant } from "../../styles/motionVariants"

const Menu = () => {
  return (
    <StyledMenu>
      <motion.div initial="deappear" whileInView="appear" variants={showUpVariant}>
        <StyledButton variant="contained" href="#About">
          Sobre mim
        </StyledButton>
        <StyledButton variant="contained" href="#Skills">
          Skills
        </StyledButton>
        <StyledButton variant="contained" href="#Projects">
          Projetos
        </StyledButton>
      </motion.div>
    </StyledMenu>
  );
};

export default Menu;
