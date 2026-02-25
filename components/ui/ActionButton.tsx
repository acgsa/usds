import React from "react";
import { DownloadIcon } from "./Icons";

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

export function ActionButton({
  size = "md",
  icon = <DownloadIcon />,
  disabled = false,
  ...props
}: ActionButtonProps) {
  return (
    <button
      className={`action-button action-button-${size}`}
      disabled={disabled}
      type="button"
      {...props}
    >
      {icon}
    </button>
  );
}
