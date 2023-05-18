import StyledSocialMenu, { StyledButton, StyledIconButton } from "./style";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import user from "../../utils/userData";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

type iLinks = Record<"linkedin" | "github" | "whatsapp" | "curriculum", string>;

const MenuSocial = () => {
  const links: iLinks = {
    linkedin: `https://www.linkedin.com/in/${user?.linkedin}/`,
    github: `https://www.github.com/${user?.github}/`,
    whatsapp: `https://api.whatsapp.com/send?phone=+55${user?.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`,
    curriculum:
      "https://drive.google.com/file/d/1RQa6fshHqgB4OpTcoXZ7Wyv-bF9Ag92J/view?usp=sharing",
  };

  return (
    <StyledSocialMenu>
      {user.whatsappNumber && (
        <StyledButton
          href={links.whatsapp}
          target="_blank"
          variant="text"
          endIcon={<WhatsAppIcon />}
        >
          Falar no whatsapp
        </StyledButton>
      )}
      <div>
        {user.linkedin && (
          <StyledIconButton
            href={links.linkedin}
            target="_blank"
            title="Acesse meu linkedin"
          >
            <LinkedInIcon />
          </StyledIconButton>
        )}
        {user.github && (
          <StyledIconButton
            href={links.github}
            target="_blank"
            title="Acesse meu github"
          >
            <GitHubIcon />
          </StyledIconButton>
        )}
        {user.email && (
          <StyledIconButton
            href={`mailto:${user.email}`}
            target="_blank"
            title="me mande um email"
          >
            <EmailIcon />
          </StyledIconButton>
        )}
      </div>
      <StyledButton
        href={links.curriculum}
        target="_blank"
        variant="outlined"
        startIcon={<DescriptionOutlinedIcon />}
      >
        Curriculo
      </StyledButton>
    </StyledSocialMenu>
  );
};

export default MenuSocial;
