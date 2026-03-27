"use client";
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

/* External Link Icon from SVG */
const ExternalLinkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M15.75 2.25L21 2.25C21.1989 2.25 21.3897 2.32902 21.5303 2.46967C21.671 2.61032 21.75 2.80109 21.75 3V8.25C21.75 8.66421 21.4142 9 21 9C20.5858 9 20.25 8.66421 20.25 8.25V4.81066L8.03033 17.0303C7.73744 17.3232 7.26256 17.3232 6.96967 17.0303C6.67678 16.7374 6.67678 16.2626 6.96967 15.9697L19.1893 3.75L15.75 3.75C15.3358 3.75 15 3.41421 15 3C15 2.58579 15.3358 2.25 15.75 2.25ZM5.25 6.75C4.42157 6.75 3.75 7.42157 3.75 8.25V18.75C3.75 19.5784 4.42157 20.25 5.25 20.25H15.75C16.5784 20.25 17.25 19.5784 17.25 18.75V10.5C17.25 10.0858 17.5858 9.75 18 9.75C18.4142 9.75 18.75 10.0858 18.75 10.5V18.75C18.75 20.4069 17.4069 21.75 15.75 21.75H5.25C3.59315 21.75 2.25 20.4069 2.25 18.75V8.25C2.25 6.59315 3.59315 5.25 5.25 5.25H13.5C13.9142 5.25 14.25 5.58579 14.25 6C14.25 6.41421 13.9142 6.75 13.5 6.75H5.25Z" fill="currentColor"/>
  </svg>
);

/* Image Card with hover link icon */
interface ImageCardProps {
  image?: string;
  imageAlt?: string;
  title: string;
  subtitle: string;
  href?: string;
  gradient?: "cyan" | "orange" | "purple";
}

export function ImageCard({ image = "", imageAlt = "", title, subtitle, href, gradient }: ImageCardProps) {
  const content = (
    <div className="image-card">
      <div className="image-card-image">
        {gradient ? (
          <div className={`image-card-gradient image-card-gradient-${gradient}`} />
        ) : (
          <img src={image} alt={imageAlt} />
        )}
      </div>
      <div className="image-card-content">
        <div className="image-card-text">
          <div className="image-card-text-inner">
            <div className="image-card-title">{title}</div>
            <div className="image-card-subtitle">{subtitle}</div>
          </div>
          {href && (
            <div className="image-card-link-icon">
              <ExternalLinkIcon />
            </div>
          )}
        </div>
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
