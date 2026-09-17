import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "h-12 w-full rounded border bg-surface px-4 font-body text-[15px] text-ink placeholder:text-faint transition-colors duration-200",
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
Input.displayName = "Input";

export { Input };
