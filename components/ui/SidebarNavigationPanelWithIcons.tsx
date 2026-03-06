"use client";

import React, { useState } from "react";
import { Avatar } from "./Avatar";
import { DrawerButton } from "./DrawerButton";
import { Menu } from "./Menu";
import { PlusIcon } from "./Icons";

const PlaceholderLogo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="20" cy="20" r="20" fill="var(--color-bg-strong)" />
    <text x="20" y="20" textAnchor="middle" dominantBaseline="central" fill="var(--color-text-secondary)" fontSize="10" fontWeight="600" fontFamily="var(--font-primary)">
      LOGO
    </text>
  </svg>
);

const HomeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M2.25 6.75L9 2.25L15.75 6.75V15C15.75 15.1989 15.671 15.3897 15.5303 15.5303C15.3897 15.671 15.1989 15.75 15 15.75H3C2.80109 15.75 2.61032 15.671 2.46967 15.5303C2.32902 15.3897 2.25 15.1989 2.25 15V6.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.75 15.75V9H11.25V15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HomeIconFilled = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M9 2.25L2.25 6.75V15.75H15.75V6.75L9 2.25Z" fill="currentColor"/>
    <rect x="7.125" y="9" width="3.75" height="6.75" fill="var(--color-bg-subtle)"/>
  </svg>
);

const DocumentIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M10.5 2.25H4.5C4.30109 2.25 4.11032 2.32902 3.96967 2.46967C3.82902 2.61032 3.75 2.80109 3.75 3V15C3.75 15.1989 3.82902 15.3897 3.96967 15.5303C4.11032 15.671 4.30109 15.75 4.5 15.75H13.5C13.6989 15.75 13.8897 15.671 14.0303 15.5303C14.171 15.3897 14.25 15.1989 14.25 15V6L10.5 2.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.5 2.25V6H14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DocumentIconFilled = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4.5 2.25H10.5L14.25 6V15.75H4.5V2.25Z" fill="currentColor"/>
    <path d="M10.5 2.25V6H14.25" fill="var(--color-bg-subtle)"/>
  </svg>
);

const CheckSquareIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M14.25 3.75H3.75C3.33579 3.75 3 4.08579 3 4.5V14.25C3 14.6642 3.33579 15 3.75 15H14.25C14.6642 15 15 14.6642 15 14.25V4.5C15 4.08579 14.6642 3.75 14.25 3.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 9L8.25 11.25L12 6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckSquareIconFilled = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="3" y="3.75" width="12" height="11.25" rx="1.5" fill="currentColor"/>
    <path d="M6 9L8.25 11.25L12 6.75" stroke="var(--color-bg-subtle)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChatIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M15.75 11.25C15.75 11.6478 15.592 12.0294 15.3107 12.3107C15.0294 12.592 14.6478 12.75 14.25 12.75H5.25L2.25 15.75V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H14.25C14.6478 2.25 15.0294 2.40804 15.3107 2.68934C15.592 2.97064 15.75 3.35218 15.75 3.75V11.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChatIconFilled = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M2.25 2.25H15.75V12.75H5.25L2.25 15.75V2.25Z" fill="currentColor"/>
  </svg>
);

const BookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 3.75C3 3.35218 3.15804 2.97064 3.43934 2.68934C3.72064 2.40804 4.10218 2.25 4.5 2.25H13.5C13.8978 2.25 14.2794 2.40804 14.5607 2.68934C14.842 2.97064 15 3.35218 15 3.75V15.75L9 12.75L3 15.75V3.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BookIconFilled = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 3.75C3 2.92157 3.67157 2.25 4.5 2.25H13.5C14.3284 2.25 15 2.92157 15 3.75V15.75L9 12.75L3 15.75V3.75Z" fill="currentColor"/>
  </svg>
);

const GearIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.55 11.25C14.4613 11.4517 14.4376 11.6767 14.4824 11.8929C14.5271 12.109 14.638 12.3057 14.7975 12.4537L14.8425 12.4987C14.9653 12.6213 15.0629 12.7667 15.1298 12.9264C15.1966 13.0861 15.2314 13.257 15.2314 13.4297C15.2314 13.6023 15.1966 13.7732 15.1298 13.9329C15.0629 14.0926 14.9653 14.238 14.8425 14.3606C14.7199 14.4834 14.5745 14.581 14.4148 14.6479C14.2551 14.7147 14.0842 14.7495 13.9116 14.7495C13.7389 14.7495 13.568 14.7147 13.4083 14.6479C13.2486 14.581 13.1032 14.4834 12.9806 14.3606L12.9356 14.3156C12.7876 14.1561 12.5909 14.0452 12.3748 14.0005C12.1586 13.9557 11.9336 13.9794 11.7319 14.0681C11.5344 14.1529 11.3675 14.2947 11.2522 14.4751C11.1369 14.6555 11.0782 14.8665 11.0831 15.081V15.1875C11.0831 15.5356 10.9448 15.8694 10.6986 16.1155C10.4525 16.3617 10.1187 16.5 9.77063 16.5C9.42253 16.5 9.08877 16.3617 8.84263 16.1155C8.59649 15.8694 8.45813 15.5356 8.45813 15.1875V15.12C8.45749 14.9006 8.39282 14.6861 8.27216 14.5032C8.1515 14.3203 7.98012 14.1771 7.77938 14.0906C7.57767 14.0019 7.35266 13.9782 7.1365 14.0229C6.92034 14.0677 6.72365 14.1786 6.57563 14.3381L6.53063 14.3831C6.40804 14.5059 6.26262 14.6035 6.10291 14.6703C5.9432 14.7372 5.77233 14.772 5.59969 14.772C5.42704 14.772 5.25617 14.7372 5.09646 14.6703C4.93675 14.6035 4.79134 14.5059 4.66875 14.3831C4.54591 14.2605 4.44832 14.1151 4.38147 13.9554C4.31462 13.7957 4.27979 13.6248 4.27979 13.4522C4.27979 13.2795 4.31462 13.1086 4.38147 12.9489C4.44832 12.7892 4.54591 12.6438 4.66875 12.5212L4.71375 12.4762C4.87327 12.3282 4.98413 12.1315 5.02888 11.9154C5.07364 11.6992 5.04998 11.4742 4.96125 11.2725C4.87643 11.075 4.73463 10.9081 4.5542 10.7928C4.37377 10.6775 4.16278 10.6188 3.94813 10.6237H3.84188C3.49377 10.6237 3.16001 10.4854 2.91387 10.2393C2.66773 9.99312 2.52938 9.65936 2.52938 9.31125C2.52938 8.96315 2.66773 8.62939 2.91387 8.38325C3.16001 8.13711 3.49377 7.99875 3.84188 7.99875H3.90938C4.12883 7.99311 4.34328 7.92844 4.52617 7.80779C4.70906 7.68713 4.85226 7.51575 4.93875 7.315C5.02748 7.11329 5.05114 6.88829 5.00638 6.67212C4.96163 6.45596 4.85077 6.25927 4.69125 6.11125L4.64625 6.06625C4.52341 5.94366 4.42582 5.79824 4.35897 5.63853C4.29212 5.47882 4.25729 5.30795 4.25729 5.13531C4.25729 4.96266 4.29212 4.79179 4.35897 4.63208C4.42582 4.47237 4.52341 4.32696 4.64625 4.20437C4.76884 4.08153 4.91426 3.98394 5.07397 3.91709C5.23368 3.85024 5.40454 3.81541 5.57719 3.81541C5.74983 3.81541 5.9207 3.85024 6.08041 3.91709C6.24012 3.98394 6.38553 4.08153 6.50813 4.20437L6.55313 4.24937C6.70115 4.40889 6.89784 4.51976 7.114 4.56451C7.33016 4.60926 7.55517 4.5856 7.75688 4.49687H7.77938C7.97686 4.41206 8.14377 4.27025 8.25908 4.08982C8.37439 3.9094 8.43309 3.6984 8.42813 3.48375V3.37875C8.42813 3.03065 8.56648 2.69689 8.81262 2.45075C9.05876 2.2046 9.39253 2.06625 9.74063 2.06625C10.0887 2.06625 10.4225 2.2046 10.6686 2.45075C10.9148 2.69689 11.0531 3.03065 11.0531 3.37875V3.44625C11.0581 3.6609 11.1168 3.8719 11.2321 4.05232C11.3474 4.23275 11.5143 4.37456 11.7119 4.45937C11.9136 4.54811 12.1386 4.57177 12.3548 4.52701C12.5709 4.48226 12.7676 4.37139 12.9156 4.21187L12.9606 4.16687C13.0832 4.04404 13.2286 3.94644 13.3883 3.87959C13.548 3.81274 13.7189 3.77791 13.8916 3.77791C14.0642 3.77791 14.2351 3.81274 14.3948 3.87959C14.5545 3.94644 14.6999 4.04404 14.8225 4.16687C14.9453 4.28947 15.0429 4.43488 15.1098 4.59459C15.1766 4.7543 15.2114 4.92517 15.2114 5.09781C15.2114 5.27046 15.1766 5.44133 15.1098 5.60104C15.0429 5.76075 14.9453 5.90616 14.8225 6.02875L14.7775 6.07375C14.618 6.22177 14.5071 6.41846 14.4624 6.63462C14.4176 6.85079 14.4413 7.07579 14.53 7.2775V7.3C14.6148 7.49748 14.7566 7.66439 14.9371 7.7797C15.1175 7.89501 15.3285 7.95371 15.5431 7.94875H15.6481C15.9962 7.94875 16.33 8.0871 16.5761 8.33325C16.8223 8.57939 16.9606 8.91315 16.9606 9.26125C16.9606 9.60936 16.8223 9.94312 16.5761 10.1893C16.33 10.4354 15.9962 10.5737 15.6481 10.5737H15.5806C15.366 10.5787 15.155 10.6374 14.9745 10.7527C14.7941 10.868 14.6523 11.0349 14.5675 11.2325V11.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GearIconFilled = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="9" cy="9" r="5.25" fill="currentColor"/>
    <circle cx="9" cy="9" r="2.25" fill="var(--color-bg-subtle)"/>
  </svg>
);

const HelpIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="9" cy="9" r="6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.8175 6.75C6.97718 6.26118 7.30457 5.84669 7.73967 5.57465C8.17477 5.3026 8.69166 5.18922 9.19931 5.25223C9.70696 5.31524 10.1748 5.55056 10.5192 5.91755C10.8637 6.28454 11.0625 6.76046 11.0813 7.2585C11.0813 9 8.95688 9.87 8.95688 9.87" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="12.375" r="0.5625" fill="currentColor"/>
  </svg>
);

const HelpIconFilled = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="9" cy="9" r="6.75" fill="currentColor"/>
    <path d="M6.82 6.75C6.98 6.26 7.3 5.85 7.74 5.57C8.17 5.3 8.69 5.19 9.2 5.25C9.71 5.32 10.17 5.55 10.52 5.92C10.86 6.28 11.06 6.76 11.08 7.26C11.08 9 8.96 9.87 8.96 9.87" stroke="var(--color-bg-subtle)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="12.375" r="0.5625" fill="var(--color-bg-subtle)"/>
  </svg>
);

export function SidebarNavigationPanelWithIcons() {
  const [isOpen, setIsOpen] = useState(true);

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

      <button
        type="button"
        className={`sidebar-nav-new-app-icons${isOpen ? "" : " sidebar-nav-new-app-icons-collapsed"}`}
        aria-label="New Application"
      >
        <PlusIcon size={20} />
        <span className="sidebar-nav-new-app-text">New Application</span>
      </button>

      <div className="sidebar-nav-menus">
        <div className="sidebar-nav-menu-wrap-icons">
          <Menu
            size="sm"
            defaultActiveIndex={0}
            allowDeselect={false}
            items={[
              { type: "icon", label: "Home", icon: <HomeIcon />, activeIcon: <HomeIconFilled /> },
              { type: "icon", label: "Applications", icon: <DocumentIcon />, activeIcon: <DocumentIconFilled /> },
              { type: "icon", label: "My Tasks", icon: <CheckSquareIcon />, activeIcon: <CheckSquareIconFilled /> },
              { type: "icon", label: "Messages", icon: <ChatIcon />, activeIcon: <ChatIconFilled /> },
            ]}
          />
        </div>

        <div className="sidebar-nav-heading">Resources</div>
        <div className="sidebar-nav-menu-wrap-icons">
          <Menu
            size="sm"
            items={[
              { type: "icon", label: "Permit Types", icon: <DocumentIcon />, activeIcon: <DocumentIconFilled /> },
              { type: "icon", label: "Regulations", icon: <BookIcon />, activeIcon: <BookIconFilled /> },
              { type: "icon", label: "Resources", icon: <GearIcon />, activeIcon: <GearIconFilled /> },
              { type: "icon", label: "Help Center", icon: <HelpIcon />, activeIcon: <HelpIconFilled /> },
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
