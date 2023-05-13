import StyledMenu, { StyledButton } from "./style";

const Menu = () => {
  return (
    <StyledMenu>
      <StyledButton variant="contained" href="#About">
        Sobre mim
      </StyledButton>
      <StyledButton variant="contained" href="#Skills">
        Skills
      </StyledButton>
      <StyledButton variant="contained" href="#Projects">
        Projetos
      </StyledButton>
    </StyledMenu>
  );
};

export default Menu;
