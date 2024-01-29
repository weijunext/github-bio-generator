
type Generator = {
  title: string;
  subTitle: string;
  type: "profile" | "skills" | "social" | "addons" | "supports";
};

export const generators: Generator[] = [
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
    title: "Add-ons",
    subTitle: "",
    type: "addons",
  },
  {
    title: "Supports",
    subTitle: "",
    type: "supports",
  },
];