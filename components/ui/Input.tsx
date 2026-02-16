import React from "react";

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
  const inputId = id || `input-${Math.random().toString(36).slice(2, 8)}`;
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
