"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GitFork } from "lucide-react";
import type { Project } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";

function ProjectVisual({ title }: { title: string }) {
  // Generative placeholder visual: an abstract grid keyed off the project title,
  // used until a real screenshot is added.
  const seed = title.length;
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-surface-raised">
      <svg
        viewBox="0 0 200 130"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern id={`grid-${seed}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--border))" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="200" height="130" fill={`url(#grid-${seed})`} />
        <circle cx={30 + (seed * 7) % 140} cy={40 + (seed * 11) % 60} r="26" fill="hsl(var(--accent) / 0.14)" />
        <rect
          x={90 + (seed * 5) % 60}
          y={20 + (seed * 3) % 40}
          width="46"
          height="46"
          fill="none"
          stroke="hsl(var(--accent) / 0.5)"
          strokeWidth="1.5"
        />
      </svg>
      <span className="absolute font-display text-2xl font-medium tracking-tight text-ink/15">
        {title}
      </span>
    </div>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
      className="group relative overflow-hidden rounded-md border border-border bg-surface transition-colors duration-300 hover:border-border-strong"
    >
      <div className="aspect-[16/10] overflow-hidden border-b border-border">
        <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]">
          <ProjectVisual title={project.title} />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-medium tracking-tight">
              {project.title}
            </h3>
            <p className="mt-1 font-mono text-[12px] text-faint">
              {project.category} · {project.year}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} source on GitHub`}
                className="flex h-9 w-9 items-center justify-center rounded border border-border text-muted transition-colors hover:border-border-strong hover:text-ink"
              >
                <GitFork className="h-4 w-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View live demo of ${project.title}`}
                className="flex h-9 w-9 items-center justify-center rounded border border-border text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <p className="mt-4 text-[14px] leading-relaxed text-muted">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>

        {project.placeholder && (
          <p className="mt-4 font-mono text-[11px] text-faint">Demo project — placeholder content</p>
        )}
      </div>
    </motion.article>
  );
}
