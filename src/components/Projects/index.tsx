import { ApiContext } from "../../contexts/ApiContext";
import StyledProjects, { StyledButton } from "./style";
import { useContext } from "react";
import { motion } from "framer-motion";
import { showSkillsVariant } from "../../styles/motionVariants";
import { Button } from "@mui/material";
import { FaGithub, FaShare } from "react-icons/fa";

const Projects = () => {
  const { repos } = useContext(ApiContext);

  return (
    <StyledProjects>
      {repos.map((repo, index) => (
        <motion.div
          key={index}
          initial="deappear"
          whileInView="appear"
          viewport={{ once: true }}
          variants={showSkillsVariant}
        >
          <h3 className="title-repos">{repo.name}</h3>
          <img src={repo.image} alt="screenshot of site" />
          <span className="text-repos">
            <b>Linguagem: </b>
            {repo.language}
          </span>
          <p className="text-repos">{repo.description}</p>
          <motion.div
            className="buttonsCase"
            initial="deappear"
            whileInView="appear"
            variants={showSkillsVariant}
          >
            <StyledButton
              href={repo.html_url}
              target="_blank"
              variant="text"
              startIcon={<FaGithub />}
            >
              Github Code
            </StyledButton>
            {repo?.homepage && (
              <StyledButton
                href={repo.homepage}
                target="_blank"
                variant="text"
                startIcon={<FaShare />}
              >
                App
              </StyledButton>
            )}
          </motion.div>
        </motion.div>
      ))}
    </StyledProjects>
  );
};

export default Projects;
