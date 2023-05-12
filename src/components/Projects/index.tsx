import { useEffect, useState } from "react";
import api from "../../services/api";
import StyledProjects from "./style";
import BurguerKenzieImg from "../../assets/BurguerKenzie.png";

const repo = ["kenziehub-api", "abc", "cbd"] as const;

type iRepo = (typeof repo)[number];

type iRepoImages = Record<iRepo, string>;

const repoImages: iRepoImages = {
  "kenziehub-api": BurguerKenzieImg,
  abc: BurguerKenzieImg,
  cbd: BurguerKenzieImg,
};

interface iRepoData {
  name: string;
  description: string;
}

const Projects = () => {
  const [repos, setRepos] = useState<Array<iRepoData>>([]);

  const requestApi = async () => {
    const response = await api.get("/users/VinnyPine/repos");

    setRepos(response.data);
  };

  const getRepoDescription = (repoName: iRepo) => {
    const repoData = repos.find((repo) => repo.name === repoName);

    return repoData?.description || "";
  };

  useEffect(() => {
    requestApi();
  }, []);

  return (
    <StyledProjects>
      {repo.map((name, index) => (
        <div key={index}>
          <h3 className="title-repos">{name}</h3>
          <img src={repoImages[name]} alt="screenshot of site" />
          <p className="text-repos">{getRepoDescription(name)}</p>
        </div>
      ))}
    </StyledProjects>
  );
};

export default Projects;
