import { ApiContext } from "../../contexts/ApiContext";
import StyledProjects from "./style";
import { useContext } from "react";

const Projects = () => {
  const { repos } = useContext(ApiContext);

  return (
    <StyledProjects>
      {repos.map((repo, index) => (
        <div key={index}>
          <h3 className="title-repos">{repo.name}</h3>
          <img src={repo.image} alt="screenshot of site" />
          <p className="text-repos">{repo.description}</p>
        </div>
      ))}
    </StyledProjects>
  );
};

export default Projects;
