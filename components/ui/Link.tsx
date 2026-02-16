"use client";

import React from "react";

const GlobeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" style={{ flexShrink: 0 }}>
    <circle cx="9" cy="9" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.25" />
    <ellipse cx="9" cy="9" rx="3.5" ry="7.5" fill="none" stroke="currentColor" strokeWidth="1.25" />
    <line x1="1.5" y1="9" x2="16.5" y2="9" stroke="currentColor" strokeWidth="1.25" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" style={{ flexShrink: 0 }}>
    <path d="M11 8.5V12a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1h3.5M8 1h5v5M13 1L5.5 8.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export type LinkVariant = "default" | "inline";

interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  variant?: LinkVariant;
  href?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Link({
  variant = "default",
  href = "#",
  leadingIcon,
  trailingIcon,
  disabled = false,
  children,
  className = "",
  ...rest
}: LinkProps) {
  const content = (
    <>
      {leadingIcon ?? <GlobeIcon />}
      <span className="link-text">{children}</span>
      {trailingIcon ?? <ExternalLinkIcon />}
    </>
  );

  const baseClass = `link link-${variant}${disabled ? " link-disabled" : ""} ${className}`.trim();

  if (disabled) {
    return (
      <span className={baseClass} aria-disabled="true">
        {content}
      </span>
    );
  }

  return (
    <a href={href} className={baseClass} {...rest}>
      {content}
    </a>
  );
}
