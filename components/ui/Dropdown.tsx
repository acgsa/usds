"use client";

import React, { useState, useRef, useEffect } from "react";

interface DropdownItem {
  label: string;
  onClick?: () => void;
  divider?: boolean;
  destructive?: boolean;
}

type DropdownSize = "sm" | "md" | "lg";

interface DropdownProps {
  trigger?: React.ReactNode;
  label?: string;
  size?: DropdownSize;
  disabled?: boolean;
  items: DropdownItem[];
}

const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" style={{ flexShrink: 0 }}>
    <polyline points="3.5,5.5 7,9 10.5,5.5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function Dropdown({ trigger, label = "Dropdown", size = "md", disabled = false, items }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const builtInTrigger = !trigger ? (
    <button
      className={`dropdown-trigger dropdown-trigger-${size}`}
      onClick={() => !disabled && setOpen(!open)}
      disabled={disabled}
      type="button"
    >
      {label}
      <ChevronIcon />
    </button>
  ) : null;

  return (
    <div className="dropdown" ref={ref}>
      {trigger ? (
        <div onClick={() => !disabled && setOpen(!open)} style={{ cursor: disabled ? "not-allowed" : "pointer" }}>
          {trigger}
        </div>
      ) : (
        builtInTrigger
      )}
      {open && !disabled && (
        <div className="dropdown-menu">
          {items.map((item, i) =>
            item.divider ? (
              <div key={i} className="dropdown-divider" />
            ) : (
              <button
                key={i}
                type="button"
                className={`dropdown-item${item.destructive ? " dropdown-item-destructive" : ""}`}
                onClick={() => {
                  item.onClick?.();
                  setOpen(false);
                }}
              >
                {item.label}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}
