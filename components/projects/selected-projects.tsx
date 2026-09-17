import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "./project-card";
import { SectionHeader } from "@/components/shared/section-header";

export function SelectedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="container-edge py-20 md:py-28">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          index="01"
          title="Selected projects"
          description="A few things I've built recently. More on the projects page."
        />
        <Link
          href="/projects"
          className="group inline-flex shrink-0 items-center gap-1.5 font-mono text-[13px] text-muted transition-colors hover:text-ink"
        >
          View all projects
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
