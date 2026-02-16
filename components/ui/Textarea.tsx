import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Textarea({ label, id, ...props }: TextareaProps) {
  const inputId = id || `textarea-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
      )}
      <textarea id={inputId} className="textarea-field" {...props} />
    </div>
  );
}
