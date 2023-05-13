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
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <SectionProfile>
        <Container>
          <Profile role="Desenvolvedor Web Front End" />
          <Menu />
        </Container>
      </SectionProfile>
      <SectionAbout id="About">
        <Container>
          <h2 className="title-section">Sobre mim</h2>
          <p className="text-section">
            Olá, eu sou um entusiasta de tecnologia, música, games e histórias.
            Acredito que a imaginação é uma fonte inesgotável de criatividade e
            inovação, e quero compartilhar essa visão com o mundo.
          </p>
          <p className="text-section">
            Tenho habilidades em desenvolvimento web, usando HTML5 semântico,
            CSS3 responsivo, Javascript(ES6), Typescript, Nodejs e bibliotecas
            como React, Styled Components, router dom, Hook Form, yup, zod,
            express e typeORM. Também domino outras linguagens como python e
            php, e sei usar git para controle de versão. Além disso, tenho
            experiência com metodologias ágeis como scrum e kanban, e um nível
            intermediário de inglês.
          </p>
          <p className="text-section">
            Sou um profissional dedicado, proativo e sempre disposto a aprender
            novas tecnologias e ferramentas. Busco oportunidades de trabalho que
            me desafiem e me permitam crescer como desenvolvedor e como pessoa.
          </p>
          <MenuSocial />
        </Container>
      </SectionAbout>
      <SectionSkills id="Skills">
        <Container>
          <h2 className="title-section gray-700">Skills</h2>
          <SkillsCase
            advanced={["ReactJs", "JavaScript", "HTML5", "CSS3"]}
            intermediary={["Figma", "Adobe Xd"]}
            basic={["Material UI", "NodeJs"]}
          />
        </Container>
      </SectionSkills>
      <SectionProjects id="Projects">
        <Container>
          <h2 className="title-section">Projetos</h2>
          <Projects />
        </Container>
      </SectionProjects>
      <Footer />
    </div>
  );
}

export default App;
