
type Generator = {
  title: string;
  subTitle: string;
  type: "account" | "profile" | "skills" | "social" | "supports";
};

export const generators: Generator[] = [
  {
    title: "Account",
    subTitle: "Starting from entering your GitHub",
    type: "account",
  },
  {
    title: "Profile",
    subTitle: "Some public information about you",
    type: "profile",
  },
  {
    title: "Skills",
    subTitle: "Showcase your skills",
    type: "skills",
  },
  {
    title: "Social Links",
    subTitle: "Add some social media links",
    type: "social",
  },
  {
    title: "Supports",
    subTitle: "",
    type: "supports",
  },
];