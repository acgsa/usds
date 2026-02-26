"use client";

import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

export function Modal({ open, onClose, title, description, children, footer }: ModalProps) {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <svg className="modal-icon" width="40" height="40" viewBox="0 0 20 20" aria-hidden="true">
            <circle cx="10" cy="10" r="10" className="alert-icon-fill" />
            <g className="alert-icon-knockout">
              <rect x="8.75" y="5.5" width="2.5" height="5.5" rx="1" fill="currentColor" />
              <circle cx="10" cy="14" r="1.5" fill="currentColor" />
            </g>
          </svg>
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 5l10 10M15 5L5 15" />
            </svg>
          </button>
        </div>
        <div className="modal-body">
          {description && <p className="modal-description">{description}</p>}
          {children && <div className="modal-content">{children}</div>}
        </div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
}
