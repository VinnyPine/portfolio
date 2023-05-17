import { ApiContext } from "../../contexts/ApiContext";
import StyledProfile from "./style";
import { useContext } from "react";
import { motion } from "framer-motion";
import { showCenterVariant } from "../../styles/motionVariants";

interface iProps {
  role: string;
}

const Profile = ({ role }: iProps) => {
  const { user } = useContext(ApiContext);

  return (
    <StyledProfile id="Profile">
      <motion.div
        className="imageCase"
        initial="deappear"
        whileInView="appear"
        variants={showCenterVariant}
      >
        {user?.avatar_url && (
          <img src={user?.avatar_url} alt="imagem de perfil" />
        )}
      </motion.div>
      <motion.div
        className="textCase"
        initial="deappear"
        whileInView="appear"
        variants={showCenterVariant}
      >
        <h1 className="title-profile gray-700">{user?.name}</h1>
        <h3 className="text-profile gray-700">{role}</h3>
      </motion.div>
    </StyledProfile>
  );
};

export default Profile;
