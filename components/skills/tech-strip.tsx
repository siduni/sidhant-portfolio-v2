import { techStrip } from "@/lib/skills";

export function TechStrip() {
  const items = [...techStrip, ...techStrip];

  return (
    <section className="border-y border-border py-8" aria-label="Technologies I work with">
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10 motion-reduce:animate-none">
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="whitespace-nowrap font-mono text-sm text-faint"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
