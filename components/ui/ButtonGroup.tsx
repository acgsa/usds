import React from "react";

type ButtonGroupDirection = "horizontal" | "vertical";

interface ButtonGroupProps {
  children: React.ReactNode;
  direction?: ButtonGroupDirection;
  fullWidth?: boolean;
}

export function ButtonGroup({
  children,
  direction = "horizontal",
  fullWidth = false,
}: ButtonGroupProps) {
  const classes = [
    "btn-group",
    `btn-group-${direction}`,
    fullWidth ? "btn-group-full" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}
