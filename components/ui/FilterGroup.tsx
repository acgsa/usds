"use client";

import React, { useState } from "react";

interface FilterItem {
  label: string;
  id: string;
  hasDropdown?: boolean;
}

interface FilterGroupProps {
  items: FilterItem[];
  shape?: "default" | "pill";
  onSelect?: (id: string) => void;
}

const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" style={{ flexShrink: 0 }}>
    <polyline points="3,4.5 6,7.5 9,4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function FilterGroup({ items, shape = "default", onSelect }: FilterGroupProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
    onSelect?.(id);
  };

  return (
    <div className={`filter-group filter-group-${shape}`}>
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`filter-btn ${shape === "pill" ? "filter-btn-pill" : ""} ${activeId === item.id ? "filter-btn-active" : ""}`}
          onClick={() => handleClick(item.id)}
        >
          {item.label}
          {item.hasDropdown && <ChevronDown />}
        </button>
      ))}
    </div>
  );
}
