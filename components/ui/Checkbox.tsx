import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Checkbox({ label, id, ...props }: CheckboxProps) {
  const inputId = id || `cb-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <label className="check-item" htmlFor={inputId}>
      <input type="checkbox" id={inputId} {...props} />
      <span>{label}</span>
    </label>
  );
}
