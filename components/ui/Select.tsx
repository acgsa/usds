import React, { useId } from "react";

export type SelectSize = "sm" | "md" | "lg";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
  selectSize?: SelectSize;
}

export function Select({
  label,
  options,
  selectSize = "md",
  id,
  ...props
}: SelectProps) {
  const generatedId = useId();
  const inputId = id || generatedId;
  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
      )}
      <select
        id={inputId}
        className={`select-field input-${selectSize}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
