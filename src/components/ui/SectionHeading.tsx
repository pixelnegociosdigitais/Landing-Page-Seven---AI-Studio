import * as React from "react";
import { cn } from "./classNames";

export interface SectionHeadingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  level?: 1 | 2 | 3;
  titleClassName?: string;
  descriptionClassName?: string;
}

export const SectionHeading = React.forwardRef<HTMLDivElement, SectionHeadingProps>(
  (
    {
      eyebrow,
      title,
      description,
      align = "center",
      level = 2,
      className,
      titleClassName,
      descriptionClassName,
      ...props
    },
    ref
  ) => {
    const isCenter = align === "center";

    const titleClasses = cn(
      "text-[var(--text-primary)]",
      level === 1 && "type-hero-title",
      level === 2 && "type-section-title",
      level === 3 && "type-subsection-title",
      titleClassName
    );

    const renderTitle = () => {
      if (level === 1) {
        return <h1 className={titleClasses}>{title}</h1>;
      }
      if (level === 3) {
        return <h3 className={titleClasses}>{title}</h3>;
      }
      return <h2 className={titleClasses}>{title}</h2>;
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col",
          isCenter ? "text-center items-center" : "text-left items-start",
          className
        )}
        {...props}
      >
        {eyebrow && (
          <span className="type-eyebrow text-[var(--brand-cyan)] mb-4 block">
            {eyebrow}
          </span>
        )}

        {renderTitle()}

        {description && (
          <div
            className={cn(
              "type-body-large text-[var(--text-secondary)] mt-5",
              isCenter && "max-w-3xl mx-auto",
              descriptionClassName
            )}
          >
            {description}
          </div>
        )}
      </div>
    );
  }
);

SectionHeading.displayName = "SectionHeading";
