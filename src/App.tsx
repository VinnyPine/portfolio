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
            Sou um desenvolvedor web com competências em criar páginas
            semânticas e responsivas, aplicações de página única (SPA), e APIs
            Rest usando Node JS e Python. Também tenho conhecimento de
            metodologias ágeis como scrum e kanban, e um nível intermediário de
            inglês.
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
      <Footer />
    </div>
  );
}

export default App;
