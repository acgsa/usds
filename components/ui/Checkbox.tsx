import React, { useId } from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Checkbox({ label, id, ...props }: CheckboxProps) {
  const generatedId = useId();
  const inputId = id || generatedId;
  return (
    <label className="check-item" htmlFor={inputId}>
      <input type="checkbox" id={inputId} {...props} />
      <span>{label}</span>
    </label>
  );
}
