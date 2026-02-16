import React from "react";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarShape = "circle" | "square";
export type AvatarColor = "steel" | "blue" | "blue-400" | "green" | "gold" | "pink" | "violet";
type AvatarStatus = "online" | "offline" | "busy";

interface AvatarProps {
  initials?: string;
  src?: string;
  alt?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  color?: AvatarColor;
  status?: AvatarStatus;
}

export function Avatar({
  initials,
  src,
  alt = "",
  size = "md",
  shape = "circle",
  color,
  status,
}: AvatarProps) {
  const shapeClass = shape === "square" ? "avatar-square" : "";
  const colorClass = color ? `avatar-${color}` : "";
  return (
    <div className="avatar-wrapper">
      <div className={`avatar avatar-${size} ${shapeClass} ${colorClass}`.trim()}>
        {src ? (
          <img src={src} alt={alt} />
        ) : (
          <span>{initials || "?"}</span>
        )}
      </div>
      {status && (
        <span className={`avatar-status avatar-status-${status}`} />
      )}
    </div>
  );
}

/* Avatar with full name and government entity (profile style) */
interface AvatarWithInfoProps extends Omit<AvatarProps, "initials"> {
  initials: string;
  fullName: string;
  governmentEntity: string;
}

export function AvatarWithInfo({
  initials,
  fullName,
  governmentEntity,
  size = "lg",
  shape = "square",
  color = "steel",
  ...avatarProps
}: AvatarWithInfoProps) {
  return (
    <div className="avatar-with-info">
      <Avatar
        initials={initials}
        size={size}
        shape={shape}
        color={color}
        {...avatarProps}
      />
      <div className="avatar-with-info-text">
        <span className="avatar-with-info-name">{fullName}</span>
        <span className="avatar-with-info-entity">{governmentEntity}</span>
      </div>
    </div>
  );
}
