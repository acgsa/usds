import React from "react";

type ProgressSize = "sm" | "md" | "lg";
type ProgressVariant = "default" | "info" | "success" | "warning" | "error" | "gold";

interface ProgressProps {
  value: number;
  max?: number;
  size?: ProgressSize;
  variant?: ProgressVariant;
  showLabel?: boolean;
}

export function Progress({
  value,
  max = 100,
  size = "md",
  variant = "default",
  showLabel = false,
}: ProgressProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  const fillClass = variant === "default" ? "" : `progress-fill-${variant}`;

  return (
    <div style={{ width: "100%" }}>
      <div className={`progress-bar progress-bar-${size}`}>
        <div
          className={`progress-fill ${fillClass}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      {showLabel && (
        <div style={{ marginTop: 4, fontSize: "var(--font-size-body-xs)", color: "var(--color-text-body)" }}>
          {Math.round(pct)}%
        </div>
      )}
    </div>
  );
}
