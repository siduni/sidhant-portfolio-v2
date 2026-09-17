export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  category: string;
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  placeholder?: boolean;
};

// Demo/placeholder projects — replace with real work and links.
export const projects: Project[] = [
  {
    slug: "aperture-commerce",
    title: "Aperture Commerce",
    description:
      "A modern storefront with instant search, saved carts and a checkout that gets out of the way.",
    longDescription:
      "A full-featured e-commerce front end built around speed and clarity: server-rendered product pages, optimistic cart updates, and a two-step checkout designed to reduce drop-off.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    category: "E-commerce",
    year: "2024",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    placeholder: true,
  },
  {
    slug: "pulse-analytics",
    title: "Pulse Analytics",
    description:
      "A dashboard for tracking product metrics, with live charts and a query builder for custom reports.",
    longDescription:
      "An analytics dashboard focused on legibility at a glance: composable chart widgets, keyboard-first navigation, and a saved-views system so teams can return to the reports they use most.",
    stack: ["React", "TypeScript", "Recharts", "Node.js"],
    category: "Dashboard",
    year: "2024",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    placeholder: true,
  },
  {
    slug: "loop-habit-tracker",
    title: "Loop",
    description:
      "A minimal habit tracker with streaks, gentle reminders, and a week-at-a-glance view.",
    longDescription:
      "A small, focused habit tracker built to explore offline-first data with local persistence and background sync, plus a calm interface that avoids guilt-driven design patterns.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Productivity",
    year: "2023",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    placeholder: true,
  },
  {
    slug: "atlas-portfolio-cms",
    title: "Atlas",
    description:
      "A lightweight, self-hosted CMS that developers use to write and ship their own portfolio content.",
    longDescription:
      "A content layer built for developer portfolios: Markdown-based project entries, a preview mode for drafts, and a typed content schema so the front end never breaks on missing fields.",
    stack: ["Next.js", "TypeScript", "Zod", "MDX"],
    category: "Tooling",
    year: "2023",
    githubUrl: "#",
    placeholder: true,
  },
];
