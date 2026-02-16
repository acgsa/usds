import React from "react";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

export function Tooltip({ text, children }: TooltipProps) {
  return (
    <span className="tooltip-wrapper">
      {children}
      <span className="tooltip-content">{text}</span>
    </span>
  );
}
