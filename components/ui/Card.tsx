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

/* External Link Icon */
const ExternalLinkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M6 7H5v8a1 1 0 0 0 1 1h8v-1h-8V7z" fill="currentColor" />
    <path d="M8 4h8v8h-1V5H9v-1z" fill="currentColor" />
    <path d="m15 4-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* Image Card with hover link icon */
interface ImageCardProps {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  href?: string;
}

export function ImageCard({ image, imageAlt, title, subtitle, href }: ImageCardProps) {
  const content = (
    <div className="image-card">
      <div className="image-card-image">
        <img src={image} alt={imageAlt} />
        {href && (
          <div className="image-card-link-icon">
            <ExternalLinkIcon />
          </div>
        )}
      </div>
      <div className="image-card-content">
        <div className="image-card-title">{title}</div>
        <div className="image-card-subtitle">{subtitle}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="image-card-link">
        {content}
      </a>
    );
  }

  return content;
}
