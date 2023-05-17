import { Variants } from "framer-motion";

export const showCenterVariant: Variants = {
  appear: {
    opacity: 1,
    scale: [0.5, 1],
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
  deappear: {
    opacity: 0,
  },
};

export const showRightVariant: Variants = {
  appear: {
    opacity: 1,
    scale: [0.7, 1],
    x: [-100, 0],
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1.5,
    },
  },
  deappear: {
    opacity: 0,
  },
};

export const showSkillsVariant: Variants = {
  appear: {
    opacity: 1,
    x: [-100, 0],
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1.5,
    },
  },
  deappear: {
    opacity: 0,
  },
};

export const showUpVariant: Variants = {
  appear: {
    opacity: 1,
    y: [-80, 0],
    scale: [0.5, 1],
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
  deappear: {
    opacity: 0,
  },
};
