export const siteConfig = {
  name: "sidhant",
  role: "Web Developer",
  tagline:
    "I build modern, responsive and interactive web experiences with a focus on clean design and thoughtful user experiences.",
  location: "Remote / IST (UTC+5:30)",
  availability: "Open to new opportunities",
  email: "hello@samdev.example",
  socials: {
    github: "https://github.com/samdev",
    linkedin: "https://linkedin.com/in/samdev",
    twitter: "https://twitter.com/samdev",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ],
};

export type NavItem = (typeof siteConfig.nav)[number];
