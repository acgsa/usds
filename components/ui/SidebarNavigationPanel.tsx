"use client";

import React, { useState } from "react";
import { Avatar } from "./Avatar";
import { DrawerButton } from "./DrawerButton";
import { Menu } from "./Menu";
import { PillButton } from "./Button";

const PlaceholderLogo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="20" cy="20" r="20" fill="var(--color-bg-strong)" />
    <text x="20" y="20" textAnchor="middle" dominantBaseline="central" fill="var(--color-text-secondary)" fontSize="10" fontWeight="600" fontFamily="var(--font-primary)">
      LOGO
    </text>
  </svg>
);

export function SidebarNavigationPanel() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className={`sidebar-nav-panel${isOpen ? "" : " sidebar-nav-panel-closed"}`} aria-label="Sidebar navigation panel">
      <div className="sidebar-nav-panel-top">
        {isOpen ? (
          <>
            <button type="button" className="sidebar-nav-logo" aria-label="Agency home">
              <PlaceholderLogo />
            </button>
            <DrawerButton
              state="open"
              direction="right"
              onClick={() => setIsOpen(false)}
              aria-label="Collapse sidebar"
              className="sidebar-nav-toggle"
            />
          </>
        ) : (
          <DrawerButton
            state="closed"
            direction="right"
            onClick={() => setIsOpen(true)}
            aria-label="Expand sidebar"
            className="sidebar-nav-toggle sidebar-nav-toggle-collapsed"
          />
        )}
      </div>

      <PillButton
        type="button"
        variant="secondary"
        size="md"
        className={`sidebar-nav-new-app${isOpen ? "" : " sidebar-nav-new-app-collapsed"}`}
        aria-label="New Application"
      >
        <span className="sidebar-nav-plus" aria-hidden="true">+</span>
        <span className="sidebar-nav-new-app-text">New Application</span>
      </PillButton>

      <div className={`sidebar-nav-menus${isOpen ? "" : " sidebar-nav-menus-hidden"}`}>
        <div className="sidebar-nav-menu-wrap">
          <Menu
            size="sm"
            defaultActiveIndex={0}
            allowDeselect={false}
            items={[
              { type: "subtext", label: "Home", subtext: "" },
              { type: "subtext", label: "Applications", subtext: "" },
              { type: "subtext", label: "My Tasks", subtext: "" },
              { type: "subtext", label: "Messages", subtext: "" },
            ]}
          />
        </div>

        <div className="sidebar-nav-heading">Resources</div>
        <div className="sidebar-nav-menu-wrap">
          <Menu
            size="sm"
            items={[
              { type: "subtext", label: "Permit Types", subtext: "" },
              { type: "subtext", label: "Regulations", subtext: "" },
              { type: "subtext", label: "Resources", subtext: "" },
              { type: "subtext", label: "Help Center", subtext: "" },
            ]}
          />
        </div>
      </div>

      <div className="sidebar-nav-footer">
        <Avatar initials="JK" size="md" shape="square" color="blue-400" />
        <div className={`sidebar-nav-user-copy${isOpen ? "" : " sidebar-nav-user-copy-hidden"}`}>
          <div className="sidebar-nav-user-name">Jack Kassidy</div>
          <div className="sidebar-nav-user-org">Company ABC</div>
        </div>
      </div>
    </aside>
  );
}
