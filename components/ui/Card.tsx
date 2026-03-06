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
    <path d="M13 6H14V14H6V13M14 6L6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 5H14V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
