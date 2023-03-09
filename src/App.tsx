import { Button } from "@mui/material";
import Profile from "./components/Profile";
import Container from "./styles/Container";
import SectionProfile from "./components/Sections/SectionProfile";
import Menu from "./components/Menu";
import SectionAbout from "./components/Sections/SectionAbout";

import MenuSocial from "./components/MenuSocial";

function App() {
  return (
    <div className="App">
      <SectionProfile>
        <Container>
          <Profile
            name="Vinicius Pinheiro da Silva"
            role="Desenvolvedor Web Front End"
          />
          <Menu />
        </Container>
      </SectionProfile>
      <SectionAbout>
        <Container>
          <h2>Sobre mim</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            ut natus quia tenetur voluptatibus, nihil libero repellat. Omnis
            tenetur repudiandae voluptas quisquam accusantium cumque hic
            perspiciatis autem, dolore sed vitae!
          </p>
          <MenuSocial />
        </Container>
      </SectionAbout>
    </div>
  );
}

export default App;
