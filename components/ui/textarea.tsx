import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full resize-none rounded border bg-surface px-4 py-3 font-body text-[15px] text-ink placeholder:text-faint transition-colors duration-200",
          error
            ? "border-red-500/60 focus:border-red-500"
            : "border-border-strong focus:border-accent",
          "outline-none focus-visible:outline-none",
          className
        )}
        aria-invalid={error || undefined}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
