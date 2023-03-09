import StyledMenu, { StyledButton } from "./style";

const Menu = () => {
  return (
    <StyledMenu>
      <StyledButton variant="contained">Sobre mim</StyledButton>
      <StyledButton variant="contained">Skills</StyledButton>
      <StyledButton variant="contained">Projetos</StyledButton>
    </StyledMenu>
  );
};

export default Menu;
