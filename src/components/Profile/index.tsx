import profileImage from "../../assets/profileImage.jpg";
import StyledProfile from "./style";

interface iProps {
  name: string;
  role: string;
}

const Profile = ({ name, role }: iProps) => {
  return (
    <StyledProfile>
      <div className="imageCase">
        <img src={profileImage} alt="imagem de perfil" />
      </div>
      <div className="textCase">
        <h1 className="title-profile gray-700">{name}</h1>
        <h3 className="text-profile gray-700">{role}</h3>
      </div>
    </StyledProfile>
  );
};

export default Profile;
