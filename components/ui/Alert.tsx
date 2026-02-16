import React from "react";

type AlertVariant = "info" | "success" | "warning" | "error";

interface AlertProps {
  variant: AlertVariant;
  title?: string;
  children: React.ReactNode;
  onDismiss?: () => void;
}

function AlertIcon({ variant }: { variant: AlertVariant }) {
  const size = 20;
  const r = size / 2;

  const knockout: Record<AlertVariant, React.ReactNode> = {
    info: (
      <>
        <circle cx="10" cy="6" r="1.5" fill="currentColor" />
        <rect x="8.75" y="9" width="2.5" height="6" rx="1" fill="currentColor" />
      </>
    ),
    success: (
      <polyline
        points="6,10.5 9,13.5 14.5,7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    warning: (
      <>
        <rect x="8.75" y="7.5" width="2.5" height="5" rx="1" fill="currentColor" />
        <circle cx="10" cy="15.5" r="1.5" fill="currentColor" />
      </>
    ),
    error: (
      <>
        <rect x="8.75" y="5.5" width="2.5" height="5.5" rx="1" fill="currentColor" />
        <circle cx="10" cy="14" r="1.5" fill="currentColor" />
      </>
    ),
  };

  const bg =
    variant === "warning" ? (
      <polygon
        points="10,1 19.5,18 0.5,18"
        className="alert-icon-fill"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    ) : (
      <circle cx={r} cy={r} r={r} className="alert-icon-fill" />
    );

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
      className="alert-icon"
    >
      {bg}
      <g className="alert-icon-knockout">{knockout[variant]}</g>
    </svg>
  );
}

export function Alert({ variant, title, children, onDismiss }: AlertProps) {
  return (
    <div className={`alert alert-${variant}`}>
      <AlertIcon variant={variant} />
      <div className="alert-content">
        {title && <span className="alert-title">{title}</span>}
        <span className="alert-body">{children}</span>
      </div>
      {onDismiss && (
        <button
          className="alert-dismiss"
          onClick={onDismiss}
          aria-label="Dismiss"
          type="button"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <line x1="4" y1="4" x2="12" y2="12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            <line x1="12" y1="4" x2="4" y2="12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  );
}
