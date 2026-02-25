import React, { useId } from "react";

export type InputSize = "sm" | "md" | "lg";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  inputSize?: InputSize;
}

export function Input({
  label,
  hint,
  error,
  inputSize = "md",
  className = "",
  id,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id || generatedId;
  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`input-field input-${inputSize} ${error ? "input-error" : ""} ${className}`}
        {...props}
      />
      {hint && !error && <span className="input-hint">{hint}</span>}
      {error && <span className="input-error-msg">{error}</span>}
    </div>
  );
}
