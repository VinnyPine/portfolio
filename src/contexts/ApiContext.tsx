import { createContext } from "react";
import { useState, useEffect } from "react";
import api from "../services/api";
import projectsData from "../utils/projectsData";
import userData from "../utils/userData";

interface iApiValue {
  user: iUser | undefined;
  repos: Array<iRepoCustom>;
  showButton: boolean;
}
interface iApiProps {
  children: JSX.Element;
}
interface iUser {
  name: string;
  avatar_url: string;
}

interface iRepoData {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
}

interface iRepoCustom extends iRepoData {
  image: string;
}

export const ApiContext = createContext({} as iApiValue);

const ApiProvider = ({ children }: iApiProps) => {
  const [user, setUser] = useState<iUser>();
  const [repos, setRepos] = useState<Array<iRepoCustom>>([]);
  const [showButton, setShowButton] = useState(false);

  const requestUser = async () => {
    const response = await api.get(`/users/${userData.github}`);

    setUser(response.data);
  };

  const requestRepos = async () => {
    const response = await api.get(`/users/${userData.github}/repos`);

    const reposResponse: Array<iRepoData> = response.data;

    const repoData: Array<iRepoCustom> = [];

    projectsData.map((project) => {
      const repoFinded: iRepoData | undefined = reposResponse.find(
        (repo) => repo.name == project.name
      );

      if (repoFinded) {
        repoData.push({
          ...project,
          description: repoFinded?.description,
          language: repoFinded?.language,
          html_url: repoFinded?.html_url,
          homepage: repoFinded?.homepage,
        });
      }
    });

    if (repoData.length > 0) {
      setRepos(repoData);
    }
  };

  const instantiateObserver = () => {
    const profile = document.querySelector("#Profile");

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries.find((entry) => entry.target == profile);

        setShowButton(!entry?.isIntersecting);
      },
      { root: null, rootMargin: "0px", threshold: 0.2 }
    );

    profile && observer.observe(profile);
  };

  useEffect(() => {
    requestUser();
    requestRepos();
    instantiateObserver();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        user,
        repos,
        showButton,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
