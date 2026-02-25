import React from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "destructive";
export type ButtonSize = "xs" | "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children: React.ReactNode;
}

const PlusIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" aria-hidden="true" style={{ flexShrink: 0 }}>
    <line x1="7" y1="2" x2="7" y2="12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    <line x1="2" y1="7" x2="12" y2="7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

export { PlusIcon };

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  leadingIcon,
  trailingIcon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${className}`}
      {...props}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  );
}

/* ─── Pill Button ─── */

type PillVariant = "primary" | "secondary" | "outline";

interface PillButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: PillVariant;
  size?: ButtonSize;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children: React.ReactNode;
}

export function PillButton({
  variant = "primary",
  size = "md",
  className = "",
  leadingIcon,
  trailingIcon,
  children,
  ...props
}: PillButtonProps) {
  return (
    <button
      className={`btn btn-pill btn-${variant} btn-${size} ${className}`}
      {...props}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  );
}

/* ─── Icon Button ─── */

type IconVariant = "primary" | "secondary" | "outline" | "ghost";

type IconShape = "square" | "circle";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconVariant;
  size?: ButtonSize;
  shape?: IconShape;
  icon: React.ReactNode;
  label: string;
}

export function IconButton({
  variant = "primary",
  size = "md",
  shape = "square",
  className = "",
  icon,
  label,
  ...props
}: IconButtonProps) {
  const shapeClass = shape === "circle" ? "btn-icon-circle" : "";

  // Map button sizes to icon sizes
  const iconSizeMap = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
  };

  const iconSize = iconSizeMap[size as keyof typeof iconSizeMap];

  // Clone the icon with the appropriate size prop
  const iconWithSize = React.cloneElement(icon as React.ReactElement<{ size?: number }>, { size: iconSize });

  return (
    <button
      className={`btn btn-icon ${shapeClass} btn-${variant} btn-${size} ${className}`}
      aria-label={label}
      {...props}
    >
      {iconWithSize}
    </button>
  );
}
