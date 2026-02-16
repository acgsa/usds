import React from "react";

interface NavbarProps {
  brand: string;
  links?: { label: string; href: string }[];
  actions?: React.ReactNode;
}

export function Navbar({ brand, links = [], actions }: NavbarProps) {
  return (
    <nav className="navbar">
      <span className="navbar-brand">{brand}</span>
      {links.length > 0 && (
        <ul className="navbar-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      )}
      {actions && <div className="navbar-actions">{actions}</div>}
    </nav>
  );
}
