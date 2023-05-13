import { ApiContext } from "../../contexts/ApiContext";
import StyledProfile from "./style";
import { useContext } from "react";

interface iProps {
  role: string;
}

const Profile = ({ role }: iProps) => {
  const { user } = useContext(ApiContext);

  return (
    <StyledProfile id="Profile">
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
