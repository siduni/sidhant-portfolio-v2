"use client";

import * as React from "react";

type Line = {
  prompt: string;
  command: string;
  output: string[];
};

const lines: Line[] = [
  {
    prompt: "sid@dev",
    command: "whoami",
    output: ["Sam — Web Developer", "Building interfaces that feel considered."],
  },
  {
    prompt: "sid@dev",
    command: "cat stack.json",
    output: ["Next.js · TypeScript · Tailwind CSS", "React · Node.js · GSAP"],
  },
  {
    prompt: "sid@dev",
    command: "status --current",
    output: ["Open to new opportunities ✓"],
  },
];

function useReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const listener = () => setReduced(mq.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);
  return reduced;
}

export function TerminalPanel() {
  const reduced = useReducedMotion();
  const [lineIndex, setLineIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [showOutput, setShowOutput] = React.useState<number[]>([]);
  const [done, setDone] = React.useState(reduced);

  React.useEffect(() => {
    if (reduced) {
      setDone(true);
      return;
    }

    if (lineIndex >= lines.length) {
      setDone(true);
      return;
    }

    const current = lines[lineIndex];

    if (charIndex < current.command.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 38);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setShowOutput((prev) => [...prev, lineIndex]);
      const next = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, 550);
      return () => clearTimeout(next);
    }, 220);
    return () => clearTimeout(t);
  }, [charIndex, lineIndex, reduced]);

  return (
    <div
      role="img"
      aria-label="Terminal showing: whoami returns Sam, Web Developer. cat stack.json returns the technologies Sam works with. status returns open to new opportunities."
      className="relative w-full max-w-md overflow-hidden rounded-md border border-border-strong bg-surface shadow-[0_1px_0_0_hsl(var(--border-strong))]"
    >
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="ml-2 font-mono text-[11px] text-faint">sam.sh</span>
      </div>

      <div className="min-h-[220px] p-5 font-mono text-[13px] leading-relaxed sm:min-h-[240px] sm:text-[14px]">
        {done
          ? lines.map((line, i) => (
              <div key={i} className="mb-3 last:mb-0">
                <p>
                  <span className="text-accent">{line.prompt}</span>
                  <span className="text-faint"> ~ </span>
                  <span className="text-ink">{line.command}</span>
                </p>
                {line.output.map((out) => (
                  <p key={out} className="text-muted">
                    {out}
                  </p>
                ))}
              </div>
            ))
          : lines.slice(0, lineIndex + 1).map((line, i) => {
              const isCurrent = i === lineIndex;
              const commandText = isCurrent ? line.command.slice(0, charIndex) : line.command;
              return (
                <div key={i} className="mb-3 last:mb-0">
                  <p>
                    <span className="text-accent">{line.prompt}</span>
                    <span className="text-faint"> ~ </span>
                    <span className="text-ink">{commandText}</span>
                    {isCurrent && !showOutput.includes(i) && (
                      <span className="ml-0.5 inline-block h-[14px] w-[7px] translate-y-[2px] animate-caret bg-accent" />
                    )}
                  </p>
                  {showOutput.includes(i) &&
                    line.output.map((out) => (
                      <p key={out} className="text-muted">
                        {out}
                      </p>
                    ))}
                </div>
              );
            })}
      </div>
    </div>
  );
}
