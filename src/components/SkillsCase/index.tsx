import StyledSkillsCase, { StyledChip } from "./style";
import Stack from "@mui/material/Stack";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { MdIndeterminateCheckBox } from "react-icons/md";
import {
  SiCss3,
  SiTypescript,
  SiFigma,
  SiAdobexd,
  SiMui,
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";

const icons = {
  JavaScript: <IoLogoJavascript color="var(--color-gray-500)" size="20px" />,
  HTML5: <AiFillHtml5 color="var(--color-gray-500)" size="20px" />,
  CSS3: <SiCss3 color="var(--color-gray-500)" size="20px" />,
  ReactJs: <GrReactjs color="var(--color-gray-500)" size="20px" />,
  TypeScript: <SiTypescript color="var(--color-gray-500)" size="20px" />,
  Figma: <SiFigma color="var(--color-gray-500)" size="20px" />,
  "Adobe Xd": <SiAdobexd color="var(--color-gray-500)" size="20px" />,
  NodeJs: <FaNodeJs color="var(--color-gray-500)" size="20px" />,
  "Material UI": <SiMui color="var(--color-gray-500)" size="20px" />,
  default: (
    <MdIndeterminateCheckBox color="var(--color-gray-500)" size="20px" />
  ),
};

const ArrType = [
  "JavaScript",
  "HTML5",
  "CSS3",
  "ReactJs",
  "TypeScript",
  "Figma",
  "Adobe Xd",
  "NodeJs",
  "Material UI",
] as const;

type iTechs = typeof ArrType[number];

type iSkillCaseProps = Partial<
  Record<"advanced" | "intermediary" | "basic", Array<iTechs>>
>;

const SkillsCase = ({ advanced, intermediary, basic }: iSkillCaseProps) => {
  return (
    <StyledSkillsCase>
      {advanced && (
        <div>
          <h3 className="title-skills gray-700">Avançado</h3>
          <Stack
            direction="row"
            spacing={0}
            sx={{ flexWrap: "wrap", gap: "3px" }}
          >
            {advanced?.map((tech, index) => (
              <StyledChip
                key={index}
                label={tech}
                variant="outlined"
                sx={{ "&&": { fontSize: "15px" } }}
                icon={icons[tech]}
              />
            ))}
          </Stack>
        </div>
      )}
      {intermediary && (
        <div>
          <h3 className="title-skills gray-700">Intermediário</h3>
          <Stack
            direction="row"
            spacing={0}
            sx={{ flexWrap: "wrap", gap: "3px" }}
          >
            {intermediary?.map((tech, index) => (
              <StyledChip
                key={index}
                label={tech}
                variant="outlined"
                sx={{ "&&": { fontSize: "15px" } }}
                icon={icons[tech]}
              />
            ))}
          </Stack>
        </div>
      )}
      {basic && (
        <div>
          <h3 className="title-skills gray-700">Basico</h3>
          <Stack
            direction="row"
            spacing={0}
            sx={{ flexWrap: "wrap", gap: "3px" }}
          >
            {basic?.map((tech, index) => (
              <StyledChip
                key={index}
                label={tech}
                variant="outlined"
                sx={{ "&&": { fontSize: "15px" } }}
                icon={icons[tech]}
              />
            ))}
          </Stack>
        </div>
      )}
    </StyledSkillsCase>
  );
};

export default SkillsCase;
