import React from "react";

export type BadgeColor =
  | "steel" | "blue" | "red" | "orange" | "gold"
  | "yellow" | "green" | "pink" | "turquoise" | "violet";

export type BadgeSize = "sm" | "md" | "lg";

export type BadgeDotStatus = "active" | "error" | "pending" | "draft";

interface BadgeProps {
  children: React.ReactNode;
  color?: BadgeColor;
  size?: BadgeSize;
  dot?: boolean | BadgeDotStatus;
  icon?: boolean;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export function Badge({
  children,
  color = "steel",
  size = "md",
  dot = false,
  icon = false,
  dismissible = false,
  onDismiss,
}: BadgeProps) {
  const getDotClassName = () => {
    if (typeof dot === "string") {
      return `badge-dot badge-dot-${dot}`;
    }
    return "badge-dot";
  };

  const getDotStyle = () => {
    if (typeof dot === "string") {
      return undefined; // Let CSS class handle the color
    }
    return { background: "currentColor" };
  };

  return (
    <span className={`badge badge-${color} badge-${size}`}>
      {dot && <span className={getDotClassName()} style={getDotStyle()} />}
      {icon && (
        <svg width="12" height="12" viewBox="0 0 18 18" aria-hidden="true" style={{ flexShrink: 0 }}>
          <circle cx="9" cy="9" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.25" />
          <ellipse cx="9" cy="9" rx="3.5" ry="7.5" fill="none" stroke="currentColor" strokeWidth="1.25" />
          <line x1="1.5" y1="9" x2="16.5" y2="9" stroke="currentColor" strokeWidth="1.25" />
        </svg>
      )}
      {children}
      {dismissible && (
        <button
          className="badge-dismiss"
          onClick={onDismiss}
          aria-label="Remove"
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            <line x1="3" y1="3" x2="9" y2="9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            <line x1="9" y1="3" x2="3" y2="9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </span>
  );
}
