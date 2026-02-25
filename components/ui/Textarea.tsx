import React, { useId } from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Textarea({ label, id, ...props }: TextareaProps) {
  const generatedId = useId();
  const inputId = id || generatedId;
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
