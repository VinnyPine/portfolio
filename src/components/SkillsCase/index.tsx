import StyledSkillsCase, { StyledChip, StyledToggleButtonGroup } from "./style";
import Stack from "@mui/material/Stack";
import { stackData } from "../../utils/stackData";
import { motion } from "framer-motion";
import { showSkillsVariant } from "../../styles/motionVariants";
import { ToggleButton } from "@mui/material";
import { useState } from "react";

enum Filters {
  ALL = "all",
  FRONTEND = "frontend",
  BACKEND = "backend",
  MOBILE = "mobile",
  TOOLS = "tools"
}

const SkillsCase = () => {
  const [filter, setFilter] = useState(Filters.ALL);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newFilter: Filters,
  ) => {
    setFilter(newFilter);
  };

  return (
    <StyledSkillsCase>
      <motion.div
        initial={false}
        whileInView="appear"
        variants={showSkillsVariant}
      >
        <h3 className="title-skills gray-700">Techs que domino</h3>
        <StyledToggleButtonGroup
          value={filter}
          exclusive
          onChange={handleChange}
          aria-label="Filter Techs"
        >
          <ToggleButton  value={Filters.ALL}>Todas</ToggleButton>
          <ToggleButton value={Filters.FRONTEND}>Front End</ToggleButton>
          <ToggleButton value={Filters.BACKEND}>Back End</ToggleButton>
          <ToggleButton value={Filters.MOBILE}>Mobile</ToggleButton>
          <ToggleButton value={Filters.TOOLS}>Tools</ToggleButton>
        </StyledToggleButtonGroup>
        <Stack
          direction="row"
          spacing={0}
          sx={{ flexWrap: "wrap", gap: "3px" }}
        >
          {stackData.filter((tech) => 
            filter === Filters.ALL || tech.tags.includes(filter))
            .map((tech, index) => (
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
