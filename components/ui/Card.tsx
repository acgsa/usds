import React from "react";

type CardSize = "sm" | "md" | "lg";

interface CardProps {
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: CardSize;
}

export function Card({ title, children, footer, size = "md" }: CardProps) {
  const sizeClass = size === "md" ? "" : `card-${size}`;
  return (
    <div className={`card ${sizeClass}`}>
      <div className="card-body">
        {title && <div className="card-title">{title}</div>}
        <div className="card-text">{children}</div>
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}
