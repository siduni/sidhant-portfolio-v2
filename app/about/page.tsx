import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";
import { SkillsGrid } from "@/components/skills/skills-grid";
import { AdditionalSkills } from "@/components/skills/additional-skills";
import { CtaSection } from "@/components/shared/cta-section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `About — ${siteConfig.name}`,
  description: "Web developer focused on building modern, considered web experiences.",
};

const principles = [
  {
    title: "Start with the content",
    body: "Layout and motion should serve what's actually being said, not the other way around.",
  },
  {
    title: "Sweat the small interactions",
    body: "Focus states, loading states, and error messages get the same attention as the hero section.",
  },
  {
    title: "Build for every screen",
    body: "Responsive isn't an afterthought — it's part of the first draft, not a pass at the end.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-edge pb-16 pt-16 md:pb-24 md:pt-24">
        <SectionHeader index="Profile" title="About Me" />

        <div className="mt-10 grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div className="font-display text-2xl font-medium leading-snug tracking-tight text-balance sm:text-3xl">
            Sidhant is a web developer focused on building modern, responsive
            and interactive web experiences.
          </div>
          <div className="max-w-prose space-y-5 text-[16px] leading-relaxed text-muted">
            <p>
              I work mainly with React and Next.js, styling with Tailwind
              CSS and reaching for TypeScript to keep larger projects
              honest. I care about the craft side of front-end work: type
              scale, spacing rhythm, and interactions that respond to what a
              person is actually doing rather than animating for its own
              sake.
            </p>
            <p>
              Outside of layout and styling, I&apos;m drawn to the parts of
              the browser that feel a little more experimental — motion
              with GSAP, and dipping into Three.js when a project calls for
              something more spatial. I&apos;m equally comfortable
              tightening up a design system as I am wiring up the
              back-of-house Node.js that supports it.
            </p>
          </div>
        </div>
      </section>

      <section className="container-edge border-t border-border py-16 md:py-24">
        <SectionHeader
          index="Skills"
          title="Primary skills"
          description="The tools I reach for on most projects."
        />
        <div className="mt-10">
          <SkillsGrid />
        </div>
      </section>

      <section className="container-edge border-t border-border py-16 md:py-24">
        <SectionHeader
          index="Also"
          title="Additional skills"
          description="Supporting technologies I use depending on what a project needs."
        />
        <div className="mt-10">
          <AdditionalSkills />
        </div>
      </section>

      <section className="container-edge border-t border-border py-16 md:py-24">
        <SectionHeader index="Approach" title="How I work" />
        <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
          {principles.map((p) => (
            <div key={p.title} className="bg-bg p-6">
              <h3 className="font-display text-lg font-medium tracking-tight">{p.title}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
