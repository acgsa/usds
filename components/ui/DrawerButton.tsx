"use client";

import React from "react";
import { DrawerClosedIcon, DrawerOpenIcon, ArrowLineLeftIcon, ArrowLineRightIcon } from "./Icons";

type DrawerButtonState = "closed" | "open";
type DrawerDirection = "left" | "right";

interface DrawerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state?: DrawerButtonState;
  direction?: DrawerDirection;
}

export function DrawerButton({
  state = "open",
  direction = "right",
  disabled = false,
  ...props
}: DrawerButtonProps) {
  // For right drawer: open shows DrawerOpen, hover ArrowLineLeft; closed shows DrawerClosed, hover ArrowLineRight
  // For left drawer: open shows DrawerOpen, hover ArrowLineRight; closed shows DrawerClosed, hover ArrowLineLeft
  const defaultIcon = state === "closed" ? <DrawerClosedIcon size={24} /> : <DrawerOpenIcon size={24} />;
  const hoverIcon = state === "closed" 
    ? (direction === "right" ? <ArrowLineRightIcon size={24} /> : <ArrowLineLeftIcon size={24} />)
    : (direction === "right" ? <ArrowLineLeftIcon size={24} /> : <ArrowLineRightIcon size={24} />);

  return (
    <button
      className={`drawer-button drawer-button-${state} drawer-button-${direction}`}
      disabled={disabled}
      type="button"
      {...props}
    >
      <span className="drawer-button-default">{defaultIcon}</span>
      <span className="drawer-button-hover">{hoverIcon}</span>
    </button>
  );
}
