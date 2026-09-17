import { Hero } from "@/components/hero/hero";
import { TechStrip } from "@/components/skills/tech-strip";
import { SelectedProjects } from "@/components/projects/selected-projects";
import { AboutPreview } from "@/components/shared/about-preview";
import { CtaSection } from "@/components/shared/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStrip />
      <SelectedProjects />
      <AboutPreview />
      <CtaSection />
    </>
  );
}
