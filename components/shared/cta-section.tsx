import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="border-t border-border">
      <div className="container-edge flex flex-col items-start gap-8 py-20 md:flex-row md:items-center md:justify-between md:py-24">
        <div>
          <h2 className="font-display text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
            I&apos;m currently open to new opportunities and freelance work.
            Tell me what you&apos;re building.
          </p>
        </div>
        <Button asChild size="lg" className="shrink-0">
          <Link href="/contact">Contact Me</Link>
        </Button>
      </div>
    </section>
  );
}
