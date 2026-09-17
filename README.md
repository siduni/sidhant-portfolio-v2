# Sidhant— Developer Portfolio

A premium personal developer portfolio built with Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Design

- **Concept:** "Terminal Editorial" — an editorial type-driven layout paired with a terminal/CRT-inspired accent color, grounded in the subject of a web developer's day-to-day tools.
- **Palette:** warm paper neutrals in light mode, deep ink neutrals in dark mode, with a single amber accent (`--accent`) tuned per theme in `app/globals.css`.
- **Type:** Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono (labels, nav, code). Self-hosted via `@fontsource/*` so there's no runtime call to Google Fonts.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Structure

```
app/
  page.tsx            → Home
  about/page.tsx       → About
  projects/page.tsx    → Projects
  contact/page.tsx     → Contact
  layout.tsx, globals.css

components/
  navbar/, footer/, hero/, projects/, skills/, contact/, shared/, ui/

lib/
  site-config.ts   → name, socials, nav, tagline
  projects.ts      → project data (edit this to add your real projects)
  skills.ts        → skills data, grouped by category
  utils.ts         → cn() className helper
```

## Replacing placeholder content

- **Name / bio / socials / email:** `lib/site-config.ts`
- **Projects:** `lib/projects.ts` — each entry has a `placeholder: true` flag; remove it once it's a real project, and swap the `ProjectVisual` SVG placeholder in `components/projects/project-card.tsx` for a real screenshot (`next/image`) if you like.
- **Skills:** `lib/skills.ts`
- **Contact form submit handler:** `components/contact/contact-form.tsx` currently simulates a submission. Wire it to a real endpoint — an API route, or a service like Formspree or Resend.

## Notes

- Dark mode is the default theme; toggle via the navbar (persisted with `next-themes`).
- Respects `prefers-reduced-motion` throughout (terminal typing effect, marquee, page transitions).
- All routes are statically prerendered.
