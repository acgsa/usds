import React, { useId } from "react";

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Radio({ label, id, ...props }: RadioProps) {
  const generatedId = useId();
  const inputId = id || generatedId;
  return (
    <label className="check-item" htmlFor={inputId}>
      <input type="radio" id={inputId} {...props} />
      <span>{label}</span>
    </label>
  );
}
