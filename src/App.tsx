import Profile from "./components/Profile";
import Container from "./styles/Container";
import SectionProfile from "./components/Sections/SectionProfile";
import Menu from "./components/Menu";
import SectionAbout from "./components/Sections/SectionAbout";

import MenuSocial from "./components/MenuSocial";
import SectionSkills from "./components/Sections/SectionSkills";
import SkillsCase from "./components/SkillsCase";
import SectionProjects from "./components/Sections/SectionProjects";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import { showCenterVariant, showRightVariant } from "./styles/motionVariants";

function App() {
  return (
    <div className="App">
      <SectionProfile>
        <Container>
          <Profile role="Desenvolvedor Web Full Stack" />
          <Menu />
        </Container>
      </SectionProfile>
      <SectionAbout id="About">
        <Container>
          <motion.h2
            className="title-section"
            initial="deappear"
            whileInView="appear"
            variants={showCenterVariant}
            viewport={{ once: true }}
          >
            Sobre mim
          </motion.h2>
          <motion.p
            className="text-section"
            initial="deappear"
            whileInView="appear"
            variants={showRightVariant}
            viewport={{ once: true }}
          >
            Olá, eu sou um entusiasta de tecnologia, música, games e histórias.
            Acredito que a imaginação é uma fonte inesgotável de criatividade e
            inovação, e quero compartilhar essa visão com o mundo.
          </motion.p>
          <motion.p
            className="text-section"
            initial="deappear"
            whileInView="appear"
            variants={showRightVariant}
            viewport={{ once: true }}
          >
            Sou um desenvolvedor com competências em criar páginas web semânticas e adaptáveis a diferentes dispositivos, bem como no desenvolvimento de aplicações de página única (SPA), Landing Pages (LP) e na implementação de APIs Rest, WebSocket e GraphQL. Em experiências profissionais passadas, desenvolvi desde páginas de relatórios intuitivas, que permitem aos usuários visualizar dados essenciais, facilitando a tomada de decisões a sistemas de autenticação com Single Sign-On (SSO), proporcionando uma experiência de usuário contínua e segura.
          </motion.p>
          <motion.p
            className="text-section"
            initial="deappear"
            whileInView="appear"
            variants={showRightVariant}
            viewport={{ once: true }}
          >
            Minha experiência com metodologias ágeis, como Scrum e Kanban, complementa minha capacidade técnica, permitindo-me trabalhar de forma eficiente e colaborativa em ambientes dinâmicos. Também possuo proficiência em inglês em nível intermediário, o que me permite colaborar em projetos multiculturais e diversificados.
          </motion.p>
          <motion.p
            className="text-section"
            initial="deappear"
            whileInView="appear"
            variants={showRightVariant}
            viewport={{ once: true }}
          >
            Sou um profissional dedicado, proativo e sempre disposto a aprender
            novas tecnologias e ferramentas. Busco oportunidades de trabalho que
            me desafiem e me permitam crescer como desenvolvedor e como pessoa.
          </motion.p>
          <motion.div
            initial="deappear"
            whileInView="appear"
            variants={showCenterVariant}
            viewport={{ once: true }}
          >
            <MenuSocial />
          </motion.div>
        </Container>
      </SectionAbout>
      <SectionSkills id="Skills">
        <Container>
          <motion.h2
            className="title-section gray-700"
            initial="deappear"
            whileInView="appear"
            variants={showCenterVariant}
            viewport={{ once: true }}
          >
            Skills
          </motion.h2>
          <SkillsCase />
        </Container>
      </SectionSkills>
      <SectionProjects id="Projects">
        <Container>
          <motion.h2
            className="title-section"
            initial="deappear"
            whileInView="appear"
            variants={showCenterVariant}
            viewport={{ once: true }}
          >
            Projetos
          </motion.h2>
          <Projects />
        </Container>
      </SectionProjects>
      <Footer>Vinicius • 2024</Footer>
    </div>
  );
}

export default App;
