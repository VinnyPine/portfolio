import StyledSocialMenu, { StyledButton, StyledIconButton } from "./style";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const MenuSocial = () => {
  return (
    <StyledSocialMenu>
      <div>
        <StyledIconButton aria-label="linkedin">
          <LinkedInIcon />
        </StyledIconButton>
        <StyledIconButton aria-label="email">
          <EmailOutlinedIcon />
        </StyledIconButton>
        <StyledIconButton aria-label="whatsapp">
          <WhatsAppIcon />
        </StyledIconButton>
      </div>
      <StyledButton variant="outlined" startIcon={<DescriptionOutlinedIcon />}>
        Curriculo
      </StyledButton>
    </StyledSocialMenu>
  );
};

export default MenuSocial;
