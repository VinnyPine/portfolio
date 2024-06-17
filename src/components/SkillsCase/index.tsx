import StyledSkillsCase, { StyledChip } from "./style";
import Stack from "@mui/material/Stack";
import { stackData } from "../../utils/stackData";
import { motion } from "framer-motion";
import { showSkillsVariant } from "../../styles/motionVariants";

const SkillsCase = () => {
  return (
    <StyledSkillsCase>
      <motion.div
        initial={false}
        whileInView="appear"
        variants={showSkillsVariant}
      >
        <h3 className="title-skills gray-700">Techs que domino</h3>
        <Stack
          direction="row"
          spacing={0}
          sx={{ flexWrap: "wrap", gap: "3px" }}
        >
          {stackData.map((tech, index) => (
            <StyledChip
              key={index}
              label={tech.title}
              variant="outlined"
              sx={{ "&&": { fontSize: "var(--font-size-skills)" } }}
              icon={<tech.img color="var(--color-gray-500)" size="1.5em" />}
            />
          ))}
        </Stack>
      </motion.div>
    </StyledSkillsCase>
  );
};

export default SkillsCase;
