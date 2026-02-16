import React from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span className="breadcrumb-separator">/</span>}
            <li className="breadcrumb-item">
              {i < items.length - 1 && item.href ? (
                <a href={item.href}>{item.label}</a>
              ) : (
                <span className="breadcrumb-current">{item.label}</span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
}
