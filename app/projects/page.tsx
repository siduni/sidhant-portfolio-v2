import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { CtaSection } from "@/components/shared/cta-section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Projects — ${siteConfig.name}`,
  description: "A selection of projects — demo and placeholder work included.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="container-edge pb-16 pt-16 md:pb-24 md:pt-24">
        <SectionHeader
          index="Work"
          title="Projects"
          description="A mix of real builds and demo projects used to explore an idea or a stack. Each is labeled where it's a placeholder."
        />
        <div className="mt-12">
          <ProjectsGrid />
        </div>
      </section>
      <CtaSection />
    </>
  );
}
