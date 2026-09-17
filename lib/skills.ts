export type SkillCategory = {
  category: string;
  description?: string;
  skills: string[];
};

export const primarySkills: SkillCategory[] = [
  {
    category: "Frontend",
    description: "Building interfaces that feel fast and behave predictably.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    category: "UI / Styling",
    description: "Turning a design system into consistent, reusable code.",
    skills: ["Tailwind CSS"],
  },
];

export const additionalSkills: SkillCategory[] = [
  {
    category: "Language / Runtime",
    skills: ["TypeScript", "Node.js"],
  },
  {
    category: "Animation / 3D",
    skills: ["GSAP", "Three.js"],
  },
  {
    category: "Cloud / Tools",
    skills: ["AWS", "Git", "GitHub"],
  },
  {
    category: "Design",
    skills: ["Figma"],
  },
];

// A flat strip used for the homepage marquee.
export const techStrip = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "GSAP",
  "Three.js",
  "Figma",
  "Git",
];
