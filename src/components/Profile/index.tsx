import api from "../../services/api";
import StyledProfile from "./style";
import { useState, useEffect } from "react";

interface iProps {
  role: string;
}

interface iUser {
  name: string;
  avatar_url: string;
}

const Profile = ({ role }: iProps) => {
  const [user, setUser] = useState<iUser>();

  const requestApi = async () => {
    const response = await api.get("/users/VinnyPine");

    setUser(response.data);
  };

  useEffect(() => {
    requestApi();
  }, []);

  return (
    <StyledProfile>
      <div className="imageCase">
        <img src={user?.avatar_url} alt="imagem de perfil" />
      </div>
      <div className="textCase">
        <h1 className="title-profile gray-700">{user?.name}</h1>
        <h3 className="text-profile gray-700">{role}</h3>
      </div>
    </StyledProfile>
  );
};

export default Profile;
