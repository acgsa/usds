import React from "react";

type SpinnerSize = "sm" | "md" | "lg";

interface SpinnerProps {
  size?: SpinnerSize;
}

export function Spinner({ size = "md" }: SpinnerProps) {
  return <div className={`spinner spinner-${size}`} role="status" aria-label="Loading" />;
}
