"use client";
import React, { useId } from "react";

type FormChoiceType = "checkbox" | "radio";

interface FormChoiceOption {
  value: string;
  label: string;
}

interface FormChoiceProps {
  /** Array of selectable options */
  options: FormChoiceOption[];
  /** Currently selected value(s) — string for radio, string[] for checkbox */
  value: string | string[];
  /** Called when selection changes — returns updated value(s) */
  onChange: (value: string | string[]) => void;
  /** Input type: "checkbox" for multi-select, "radio" for single-select */
  type?: FormChoiceType;
  /** Shared name attribute for radio groups */
  name?: string;
  /** Layout direction: "inline" (default wrapping pills), "stacked" (full-width vertical), or "split" (equal-width side by side, stacks on mobile) */
  layout?: "inline" | "stacked" | "split";
  /** Additional className on the wrapper */
  className?: string;
}

export function FormChoice({
  options,
  value,
  onChange,
  type = "checkbox",
  name,
  layout = "inline",
  className = "",
}: FormChoiceProps) {
  const groupId = useId();
  const radioName = name || groupId;

  const isChecked = (optionValue: string) =>
    Array.isArray(value)
      ? value.includes(optionValue)
      : value === optionValue;

  const handleChange = (optionValue: string) => {
    if (type === "radio") {
      onChange(optionValue);
    } else {
      const current = Array.isArray(value) ? value : [];
      const next = current.includes(optionValue)
        ? current.filter((v) => v !== optionValue)
        : [...current, optionValue];
      onChange(next);
    }
  };

  return (
    <div className={`form-choice-group${layout !== "inline" ? ` form-choice-group-${layout}` : ""} ${className}`.trim()}>
      {options.map((option) => (
        <label key={option.value} className="form-choice-item">
          <input
            type={type}
            name={type === "radio" ? radioName : undefined}
            value={option.value}
            checked={isChecked(option.value)}
            onChange={() => handleChange(option.value)}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
}
