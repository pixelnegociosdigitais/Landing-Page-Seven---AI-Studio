import * as React from "react";
import { cn } from "./classNames";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "solid" | "soft" | "glass" | "outlined";
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "solid", interactive = false, children, ...props }, ref) => {
    const variantClasses = {
      solid: "bg-[var(--surface-primary)] border-[var(--border-subtle)] shadow-[var(--shadow-soft)]",
      soft: "bg-[var(--surface-secondary)] border-[var(--border-subtle)]",
      glass: "bg-[var(--surface-glass)] border-[var(--border-subtle)] backdrop-blur-lg shadow-[var(--shadow-soft)]",
      outlined: "bg-transparent border-[var(--border-medium)]",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border text-[var(--text-primary)] transition-all duration-200",
          variantClasses[variant],
          interactive && "hover:-translate-y-[3px] hover:border-[var(--border-accent)] motion-reduce:transform-none",
          props.onClick && "cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("p-5 sm:p-6 flex flex-col gap-1.5", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = "CardHeader";

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h2" | "h3" | "h4";
}

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, as = "h3", children, ...props }, ref) => {
    const Tag = as;
    return (
      <Tag
        ref={ref as React.Ref<HTMLHeadingElement>}
        className={cn("type-card-title text-[var(--text-primary)]", className)}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

CardTitle.displayName = "CardTitle";

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("type-body text-[var(--text-secondary)]", className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);

CardDescription.displayName = "CardDescription";

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("px-5 sm:px-6 pb-5 sm:pb-6", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardContent.displayName = "CardContent";

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  divided?: boolean;
}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, divided = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-row items-center gap-4 px-5 sm:px-6 pb-5 sm:pb-6",
          divided && "border-t border-[var(--border-subtle)] pt-4 mt-2",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = "CardFooter";
