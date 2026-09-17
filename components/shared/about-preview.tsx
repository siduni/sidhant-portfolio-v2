import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./section-header";

export function AboutPreview() {
  return (
    <section className="container-edge py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <SectionHeader index="02" title="A little about me" />
        <div className="max-w-prose">
          <p className="text-[17px] leading-relaxed text-muted">
            I&apos;m a web developer who cares about the details most people
            scroll past — the timing of a transition, the weight of a
            heading, whether a form tells you what went wrong or just leaves
            you guessing. I like turning a rough idea into something that
            works cleanly on every screen.
          </p>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            Most of my time is spent in React and Next.js, with a growing
            interest in the motion and 3D layer that makes an interface feel
            alive rather than static.
          </p>
          <Link
            href="/about"
            className="group mt-7 inline-flex items-center gap-1.5 font-mono text-[13px] text-ink"
          >
            More about me
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
