"use client";

import React from "react";

type ToggleSize = "sm" | "md" | "lg";

interface ToggleProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: ToggleSize;
  disabled?: boolean;
}

export function Toggle({
  label,
  checked = false,
  onChange,
  size = "md",
  disabled = false,
}: ToggleProps) {
  const sizeClass = size === "md" ? "" : `toggle-${size}`;
  return (
    <label className={`toggle ${sizeClass}`} style={{ opacity: disabled ? 0.5 : 1 }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
      />
      <span className="toggle-track" />
      {label && <span>{label}</span>}
    </label>
  );
}
