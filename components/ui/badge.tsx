import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm border font-mono text-[12px] leading-none tracking-tight",
  {
    variants: {
      variant: {
        default: "border-border-strong bg-surface-raised text-muted px-2.5 py-1.5",
        accent: "border-accent/40 bg-accent/10 text-accent px-2.5 py-1.5",
        plain: "border-transparent text-faint px-0 py-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
