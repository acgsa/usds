"use client";

import React, { useState } from "react";
import { Avatar } from "./Avatar";
import { DrawerButton } from "./DrawerButton";
import { Menu } from "./Menu";
import { 
  StarIcon,
  StarIconFilled,
  ChatIcon,
  ChatIconFilled,
  ConsoleIcon,
  ConsoleIconFilled,
  APIIcon,
  APIIconFilled,
  HelpIcon,
  HelpIconFilled
} from "./Icons";

const PlaceholderLogo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <text x="20" y="20" textAnchor="middle" dominantBaseline="central" fill="var(--color-text-secondary)" fontSize="11" fontWeight="600" fontFamily="var(--font-primary)">
      LOGO
    </text>
  </svg>
);

export function SidebarNavigationPanelWithIcons() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <aside className={`sidebar-nav-panel-icons${isOpen ? "" : " sidebar-nav-panel-icons-closed"}`} aria-label="Sidebar navigation panel with icons">
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

      <div className="sidebar-nav-menus">
        <div className="sidebar-nav-menu-wrap-icons">
          <Menu
            size="sm"
            activeIndex={activeIndex !== null && activeIndex < 4 ? activeIndex : null}
            onActiveIndexChange={(index) => setActiveIndex(index)}
            allowDeselect={false}
            items={[
              { type: "icon", label: "Discover", icon: <StarIcon size={24} />, activeIcon: <StarIconFilled size={24} /> },
              { type: "icon", label: "Chat", icon: <ChatIcon size={24} />, activeIcon: <ChatIconFilled size={24} /> },
              { type: "icon", label: "Console", icon: <ConsoleIcon size={24} />, activeIcon: <ConsoleIconFilled size={24} /> },
              { type: "icon", label: "API", icon: <APIIcon size={24} />, activeIcon: <APIIconFilled size={24} /> },
            ]}
          />
        </div>
      </div>

      <div className="sidebar-nav-help-menu">
        <div className="sidebar-nav-menu-wrap-icons">
          <Menu
            size="sm"
            activeIndex={activeIndex === 4 ? 0 : null}
            onActiveIndexChange={() => setActiveIndex(4)}
            items={[
              { type: "icon", label: "Help Center", icon: <HelpIcon size={24} />, activeIcon: <HelpIconFilled size={24} /> },
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
