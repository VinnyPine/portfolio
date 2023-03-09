import { Button } from "@mui/material";
import Profile from "./components/Profile";
import Container from "./styles/Container";
import SectionProfile from "./components/Sections/SectionProfile";

function App() {
  return (
    <div className="App">
      <SectionProfile>
        <Container>
          <Profile
            name="Vinicius Pinheiro da Silva"
            role="Desenvolvedor Web Front End"
          />
        </Container>
      </SectionProfile>
      <Button variant="contained">Clique</Button>
    </div>
  );
}

export default App;
