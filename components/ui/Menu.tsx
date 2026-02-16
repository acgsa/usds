"use client";

import React, { useState } from "react";

/* ─── Icons ─── */

const GlobeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" style={{ flexShrink: 0 }}>
    <circle cx="9" cy="9" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.25" />
    <ellipse cx="9" cy="9" rx="3.5" ry="7.5" fill="none" stroke="currentColor" strokeWidth="1.25" />
    <line x1="1.5" y1="9" x2="16.5" y2="9" stroke="currentColor" strokeWidth="1.25" />
  </svg>
);

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" style={{ flexShrink: 0 }}>
    <polyline points="3.5,5.5 7,9 10.5,5.5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" style={{ flexShrink: 0 }}>
    <polyline points="5,3 9.5,7 5,11" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── Types ─── */

interface MenuItemIcon {
  type: "icon";
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

interface MenuItemSubtext {
  type: "subtext";
  label: string;
  subtext: string;
  onClick?: () => void;
  disabled?: boolean;
}

type MenuItem = MenuItemIcon | MenuItemSubtext;

interface MenuProps {
  items: MenuItem[];
}

/* ─── Component ─── */

export function Menu({ items }: MenuProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <nav className="menu">
      {items.map((item, i) => {
        const isActive = activeIndex === i;

        if (item.type === "icon") {
          return (
            <button
              key={i}
              type="button"
              className={`menu-item menu-item-icon ${isActive ? "menu-item-active" : ""}`}
              disabled={item.disabled}
              onClick={() => {
                setActiveIndex(isActive ? null : i);
                item.onClick?.();
              }}
            >
              {item.icon || <GlobeIcon />}
              <span className="menu-item-label">{item.label}</span>
              <ChevronDown />
            </button>
          );
        }

        return (
          <button
            key={i}
            type="button"
            className={`menu-item menu-item-subtext ${isActive ? "menu-item-active" : ""}`}
            disabled={item.disabled}
            onClick={() => {
              setActiveIndex(isActive ? null : i);
              item.onClick?.();
            }}
          >
            <div className="menu-item-text">
              <span className="menu-item-label">{item.label}</span>
              <span className="menu-item-sub">{item.subtext}</span>
            </div>
            <ChevronRight />
          </button>
        );
      })}
    </nav>
  );
}
