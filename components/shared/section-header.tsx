import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  index: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  index,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-[13px] text-accent">{index}</span>
        <span className="h-px w-8 bg-border-strong" aria-hidden="true" />
      </div>
      <h2 className="font-display text-3xl font-medium tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className={cn("max-w-prose text-[15px] leading-relaxed text-muted", align === "center" && "mx-auto")}>
          {description}
        </p>
      )}
    </div>
  );
}
