import { createContext } from "react";
import { useState, useEffect } from "react";
import api from "../services/api";
import BurguerKenzieImg from "../assets/BurguerKenzie.png";

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

const repoNames = ["kenziehub-api"] as const;

type iRepo = (typeof repoNames)[number];

type iRepoImages = Record<iRepo, string>;

const repoImages: iRepoImages = {
  "kenziehub-api": BurguerKenzieImg,
};

interface iRepoData {
  name: string;
  description: string;
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
    const response = await api.get("/users/VinnyPine");

    setUser(response.data);
  };

  const requestRepos = async () => {
    const response = await api.get("/users/VinnyPine/repos");

    const reposResponse: Array<iRepoData> = response.data;

    const getRepoDescription = (name: iRepo) => {
      const repoData = reposResponse.find((repo) => repo.name === name);

      return repoData?.description || "";
    };

    const repoData: Array<iRepoCustom> = repoNames.map((name) => {
      return {
        name: name,
        image: repoImages[name],
        description: getRepoDescription(name),
      };
    });

    setRepos(repoData);
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
