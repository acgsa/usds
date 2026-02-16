import React from "react";

interface DividerProps {
  strong?: boolean;
  subtle?: boolean;
}

export function Divider({ strong, subtle }: DividerProps) {
  const classes = [
    "divider",
    strong ? "divider-strong" : "",
    subtle ? "divider-subtle" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return <hr className={classes} />;
}
