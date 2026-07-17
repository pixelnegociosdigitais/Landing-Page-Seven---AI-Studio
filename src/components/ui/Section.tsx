import * as React from "react";
import { cn } from "./classNames";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "compact" | "default" | "large";
  background?: "primary" | "secondary" | "deep" | "transparent";
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = "default", background = "transparent", children, ...props }, ref) => {
    const spacingClasses = {
      compact: "py-14 sm:py-16",
      default: "py-20 sm:py-24 lg:py-28",
      large: "py-24 sm:py-28 lg:py-36",
    };

    const bgClasses = {
      primary: "bg-[var(--background-primary)]",
      secondary: "bg-[var(--background-secondary)]",
      deep: "bg-[var(--background-deep)]",
      transparent: "bg-transparent",
    };

    return (
      <section
        ref={ref}
        className={cn(
          spacingClasses[spacing],
          bgClasses[background],
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
