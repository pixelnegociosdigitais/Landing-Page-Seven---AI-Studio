import * as React from "react";
import { Link, LinkProps } from "react-router-dom";
import { cn } from "./classNames";

export interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonBaseProps {}

const getButtonClasses = (
  variant: "primary" | "secondary" | "ghost" | "danger" = "primary",
  size: "sm" | "md" | "lg" = "md",
  fullWidth: boolean = false,
  disabled: boolean = false
) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 type-button rounded-xl border transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--brand-cyan)] motion-reduce:transform-none select-none";

  const sizeClasses = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-5",
    lg: "h-14 px-7",
  };

  const variantClasses = {
    primary:
      "bg-[var(--gradient-primary)] text-[var(--text-primary)] border-[var(--border-accent)] shadow-[var(--shadow-soft)] hover:-translate-y-[2px]",
    secondary:
      "bg-[var(--surface-primary)] text-[var(--text-primary)] border-[var(--border-medium)] hover:bg-[var(--surface-elevated)] hover:border-[var(--border-accent)]",
    ghost:
      "bg-transparent text-[var(--text-secondary)] border-transparent hover:text-[var(--text-primary)] hover:bg-white/5",
    // Note: The actual error/danger color token should come from a future global token.
    // For now, danger keeps background transparent, uses primary text, and uses a medium border.
    danger:
      "bg-transparent text-[var(--text-primary)] border-[var(--border-medium)] hover:bg-white/5",
  };

  return cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    fullWidth ? "w-full" : "",
    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
  );
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const isButtonDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        disabled={isButtonDisabled}
        aria-busy={isLoading ? "true" : undefined}
        className={cn(getButtonClasses(variant, size, fullWidth, isButtonDisabled), className)}
        {...props}
      >
        {isLoading && (
          <span
            className="w-4 h-4 border-2 border-t-transparent border-current rounded-full animate-spin motion-reduce:animate-none"
            aria-hidden="true"
          />
        )}
        {!isLoading && leftIcon && <span className="flex items-center shrink-0">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="flex items-center shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export interface ButtonLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "to">,
    ButtonBaseProps {
  to?: string;
  href?: string;
  disabled?: boolean;
}

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      to,
      href,
      target,
      rel,
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      leftIcon,
      rightIcon,
      children,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const finalRel = target === "_blank" && !rel ? "noopener noreferrer" : rel;
    const computedClassName = cn(
      getButtonClasses(variant, size, fullWidth, disabled),
      disabled && "pointer-events-none",
      className
    );

    if (to) {
      return (
        <Link
          ref={ref}
          to={disabled ? "#" : to}
          target={target}
          rel={finalRel}
          className={computedClassName}
          aria-disabled={disabled ? "true" : undefined}
          {...(props as Omit<LinkProps, "to">)}
        >
          {leftIcon && <span className="flex items-center shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="flex items-center shrink-0">{rightIcon}</span>}
        </Link>
      );
    }

    if (href) {
      return (
        <a
          ref={ref}
          href={disabled ? undefined : href}
          target={target}
          rel={finalRel}
          className={computedClassName}
          aria-disabled={disabled ? "true" : undefined}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {leftIcon && <span className="flex items-center shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="flex items-center shrink-0">{rightIcon}</span>}
        </a>
      );
    }

    return null;
  }
);

ButtonLink.displayName = "ButtonLink";
