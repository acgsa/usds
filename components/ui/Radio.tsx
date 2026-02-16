import React from "react";

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Radio({ label, id, ...props }: RadioProps) {
  const inputId = id || `radio-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <label className="check-item" htmlFor={inputId}>
      <input type="radio" id={inputId} {...props} />
      <span>{label}</span>
    </label>
  );
}
