import * as React from "react";
import { cn } from "./classNames";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "accent" | "neutral" | "outline";
  size?: "sm" | "md";
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "neutral", size = "md", children, ...props }, ref) => {
    const variantClasses = {
      accent: "text-[var(--brand-cyan)] bg-[var(--brand-navy)]/40 border-[var(--border-accent)]",
      neutral: "text-[var(--text-secondary)] bg-[var(--surface-secondary)] border-[var(--border-subtle)]",
      outline: "text-[var(--text-secondary)] bg-transparent border-[var(--border-medium)]",
    };

    const sizeClasses = {
      sm: "px-2 py-0.5 text-[10px]",
      md: "px-3 py-1 text-xs",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full border type-eyebrow uppercase tracking-wider transition-colors font-normal select-none",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
