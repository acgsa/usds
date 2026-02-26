"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";
import {
  Button, PillButton, IconButton, ButtonGroup, FilterGroup, Link,
  ActionButton,
  Input,
  Textarea,
  Checkbox,
  Radio,
  Toggle,
  Card,
  Badge,
  Alert,
  Avatar, AvatarWithInfo,
  Tabs,
  Table,
  TableHeader,
  type TableHeaderAction,
  Modal,
  Progress,
  Spinner,
  Tooltip,
  Breadcrumb,
  Dropdown,
  Divider,
  Menu,
  DrawerButton,
  DonutChart,
  BarChart,
  SmallKpiCard,
  CompletionTracker,
} from "@/components/ui";
import {
  PlusIcon,
  DownloadIcon as DownloadIconNew,
  CopyIcon,
  EyeIcon,
} from "@/components/ui/Icons";

/* ───────────────────── helpers ───────────────────── */

function Section({
  id,
  title,
  description,
  children,
}: {
  id?: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="showcase-section">
      <h2 className="section-title">{title}</h2>
      <p className="section-desc">{description}</p>
      {children}
    </section>
  );
}

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === "light" ? (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.003 8.003 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="10" cy="10" r="4" />
          <path d="M10 1v2M10 17v2M1 10h2M17 10h2M3.93 3.93l1.41 1.41M14.66 14.66l1.41 1.41M3.93 16.07l1.41-1.41M14.66 5.34l1.41-1.41" />
        </svg>
      )}
    </button>
  );
}

/* ───────────────────── color palette ───────────────────── */

const colorScales = [
  { name: "Steel", prefix: "steel" },
  { name: "Neutral", prefix: "neutral" },
  { name: "Blue", prefix: "blue" },
  { name: "Red", prefix: "red" },
  { name: "Orange", prefix: "orange" },
  { name: "Gold", prefix: "gold" },
  { name: "Yellow", prefix: "yellow" },
  { name: "Green", prefix: "green" },
  { name: "Pink", prefix: "pink" },
  { name: "Turquoise", prefix: "turquoise" },
  { name: "Violet", prefix: "violet" },
];

const steps = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];

const paletteHex: Record<string, string> = {
  white: "#FFFFFF", black: "#000000",
  "steel-50": "#FAFAFC", "steel-100": "#F4F5F8", "steel-200": "#E6EAF0", "steel-300": "#D3D9E4", "steel-400": "#B9C3D4", "steel-500": "#A7B4C9", "steel-600": "#8792A3", "steel-700": "#616875", "steel-800": "#353A40", "steel-900": "#1C1F22", "steel-950": "#141618",
  "neutral-50": "#FAFAFA", "neutral-100": "#F3F3F3", "neutral-200": "#E6E6E6", "neutral-300": "#D3D3D3", "neutral-400": "#B8B8B8", "neutral-500": "#A6A6A6", "neutral-600": "#868686", "neutral-700": "#606060", "neutral-800": "#424242", "neutral-900": "#252525", "neutral-950": "#121212",
  "blue-50": "#F7FAFF", "blue-100": "#EDF4FF", "blue-200": "#D8E7FF", "blue-300": "#B8D5FF", "blue-400": "#8EBBFE", "blue-500": "#72AAFE", "blue-600": "#5C8ACE", "blue-700": "#426393", "blue-800": "#243651", "blue-900": "#131D2B", "blue-950": "#0D131C",
  "red-50": "#FEF3F5", "red-100": "#FDE6E9", "red-200": "#FBC9D1", "red-300": "#F99EAC", "red-400": "#F5647A", "red-500": "#F23D59", "red-600": "#C43148", "red-700": "#8C2334", "red-800": "#4D141C", "red-900": "#290A0F", "red-950": "#1B070A",
  "orange-50": "#FFF8F3", "orange-100": "#FEF0E5", "orange-200": "#FDDEC7", "orange-300": "#FCC59B", "orange-400": "#FAA15F", "orange-500": "#F98A37", "orange-600": "#CA702D", "orange-700": "#905020", "orange-800": "#4D141C", "orange-900": "#2A1709", "orange-950": "#1B0F06",
  "gold-50": "#FEFBF2", "gold-100": "#FEF7E4", "gold-200": "#FCEEC4", "gold-300": "#FAE195", "gold-400": "#F7CF56", "gold-500": "#F5C32C", "gold-600": "#C69E24", "gold-700": "#8E711A", "gold-800": "#4E3E0E", "gold-900": "#2A2107", "gold-950": "#1B1505",
  "yellow-50": "#FEFDF5", "yellow-100": "#FDFCE9", "yellow-200": "#FCF8D0", "yellow-300": "#F9F3AA", "yellow-400": "#F5EB78", "yellow-500": "#F3E656", "yellow-600": "#C5BA46", "yellow-700": "#8D8532", "yellow-800": "#4E4A1C", "yellow-900": "#29270F", "yellow-950": "#1B1909",
  "green-50": "#F6FCF4", "green-100": "#ECF9E7", "green-200": "#D7F2CB", "green-300": "#B7E7A1", "green-400": "#8DD969", "green-500": "#70CF44", "green-600": "#5BA837", "green-700": "#417827", "green-800": "#244216", "green-900": "#13230C", "green-950": "#0C1707",
  "pink-50": "#FFFAFE", "pink-100": "#FFF4FE", "pink-200": "#FFE7FC", "pink-300": "#FFD4F9", "pink-400": "#FFBAF6", "pink-500": "#FFA9F4", "pink-600": "#CF89C6", "pink-700": "#94628E", "pink-800": "#52364E", "pink-900": "#2B1D29", "pink-950": "#1C131B",
  "turquoise-50": "#F7FCFE", "turquoise-100": "#EEF9FD", "turquoise-200": "#DBF2FA", "turquoise-300": "#BFE9F6", "turquoise-400": "#99DBF1", "turquoise-500": "#80D2ED", "turquoise-600": "#68AAC0", "turquoise-700": "#4A7A89", "turquoise-800": "#29434C", "turquoise-900": "#162428", "turquoise-950": "#0E171A",
  "violet-50": "#F9F9FF", "violet-100": "#F1F2FE", "violet-200": "#E1E2FD", "violet-300": "#CACBFB", "violet-400": "#AAADF9", "violet-500": "#9598F7", "violet-600": "#797BC8", "violet-700": "#56588F", "violet-800": "#30314F", "violet-900": "#191A2A", "violet-950": "#10111B",
};

function PaletteRow({ name, prefix }: { name: string; prefix: string }) {
  return (
    <div>
      <div className="palette-label">{name}</div>
      <div className="palette-row">
        {steps.map((step) => {
          const hex = paletteHex[`${prefix}-${step}`];
          return (
            <div
              key={step}
              className="palette-swatch"
              style={{ background: `var(--${prefix}-${step})`, color: Number(step) <= 500 ? `var(--${prefix}-900)` : `var(--${prefix}-50)` }}
            >
              <span className="palette-swatch-step">{step}</span>
              {hex && <span className="palette-swatch-hex">{hex}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ───────────────────── spacing display ───────────────────── */

const spacingTokens = [
  { name: "--space-3xs", value: "2px" },
  { name: "--space-2xs", value: "4px" },
  { name: "--space-xs", value: "8px" },
  { name: "--space-sm", value: "12px" },
  { name: "--space-md", value: "16px" },
  { name: "--space-lg", value: "24px" },
  { name: "--space-xl", value: "32px" },
  { name: "--space-2xl", value: "40px" },
  { name: "--space-3xl", value: "48px" },
];

/* ───────────────────── table sample data (cell components: Link, Checkmark, Actions, Chip) ───────────────────── */

const tableColumns = [
  { key: "name", header: "Name" },
  {
    key: "link",
    header: "Link",
    render: () => (
      <Link href="#" variant="default">
        Link
      </Link>
    ),
  },
  {
    key: "checkmark",
    header: "Checkmark",
    render: (_v: unknown, row: Record<string, unknown>) => (
      <label className="check-item" htmlFor={`tbl-check-${row.name}`} style={{ margin: 0, padding: "var(--space-2xs)", border: "none", background: "transparent", display: "inline-flex", minHeight: "auto" }}>
        <input id={`tbl-check-${row.name}`} type="checkbox" defaultChecked readOnly aria-label="Selected" />
        <span style={{ display: "none" }}>Selected</span>
      </label>
    ),
  },
  {
    key: "chip",
    header: "Chip",
    render: () => <Badge color="steel" icon>CHIP</Badge>,
  },
  {
    key: "actions",
    header: "Actions",
    render: () => (
      <div className="table-cell-actions">
        <ActionButton size="sm" icon={<DownloadIconNew size={16} />} aria-label="Download" />
        <ActionButton size="sm" icon={<CopyIcon size={16} />} aria-label="Copy" />
        <ActionButton size="sm" icon={<EyeIcon size={16} />} aria-label="Preview" />
      </div>
    ),
  },
];

const tableData = [
  { name: "Record 1", link: "", checkmark: "", actions: "", chip: "" },
  { name: "Record 2", link: "", checkmark: "", actions: "", chip: "" },
];

const tableHeaderActions: TableHeaderAction[] = [
  { icon: <DownloadIconNew size={16} />, label: "Download" },
  { icon: <CopyIcon size={16} />, label: "Copy" },
  { icon: <EyeIcon size={16} />, label: "Preview" },
];

/* ───────────────────── nav data ───────────────────── */

const navSections = [
  { group: "Foundation", items: [
    { id: "typography", label: "Typography" },
    { id: "color-palette", label: "Color Palette" },
    { id: "spacing", label: "Spacing Scale" },
  ]},
  { group: "Actions", items: [
    { id: "buttons", label: "Buttons" },
  ]},
  { group: "Inputs", items: [
    { id: "text-inputs", label: "Text Inputs" },
    { id: "textarea", label: "Text Area" },
    { id: "checkbox-radio", label: "Checkbox & Radio" },
    { id: "toggle", label: "Toggle / Switch" },
  ]},
  { group: "Data Display", items: [
    { id: "cards", label: "Cards" },
    { id: "tags", label: "Tags" },
    { id: "alerts", label: "Alerts" },
    { id: "avatars", label: "Avatars" },
    { id: "table", label: "Table" },
    { id: "data-visualization", label: "Data Visualization" },
    { id: "progress", label: "Progress Bar" },
    { id: "spinner", label: "Spinner" },
    { id: "tooltip", label: "Tooltip" },
  ]},
  { group: "Navigation", items: [
    { id: "tabs", label: "Tabs" },
    { id: "breadcrumb", label: "Breadcrumb" },
    { id: "menu", label: "Menu" },
    { id: "dropdown", label: "Dropdown" },
  ]},
  { group: "Layout", items: [
    { id: "modal", label: "Modal" },
    { id: "divider", label: "Divider" },
  ]},
  { group: "About", items: [
    { id: "about", label: "About" },
  ]},
];

/* ───────────────────── page ───────────────────── */

export default function ShowcasePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [toggleStates, setToggleStates] = useState({ sm: false, md: true, lg: false });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [drawerState, setDrawerState] = useState<"open" | "closed">("open");
  const [activeSection, setActiveSection] = useState<string>("typography");

  const closeSidebar = () => setSidebarOpen(false);
  const handleNavClick = (id: string) => {
    setActiveSection(id);
  };

  useEffect(() => {
    if (sidebarOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [sidebarOpen]);

  return (
    <div className={`showcase-layout${sidebarOpen ? " sidebar-open" : ""}`}>
      {/* Header */}
      <header className="showcase-header">
        <button
          type="button"
          className="showcase-menu-button"
          onClick={() => setSidebarOpen((v) => !v)}
          aria-label={sidebarOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={sidebarOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {sidebarOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
        <h1>A US Design System</h1>
        <div className="showcase-header-right">
          <ThemeToggleButton />
          <a href="https://figma-gov.com/design/TpUFaDOqpGxZmKPVFHXBgS/US-Design-System?node-id=1-4&t=L6h7x0BovNBu9f2C-1" target="_blank" rel="noopener noreferrer" className="header-figma" aria-label="Figma" title="Figma">
            <svg width="20" height="20" viewBox="0 0 38 57" fill="none" aria-hidden="true">
              <path d="M19 28.5c0-5.27 4.27-9.54 9.54-9.54 5.27 0 9.54 4.27 9.54 9.54 0 5.27-4.27 9.54-9.54 9.54-5.27 0-9.54-4.27-9.54-9.54z" fill="currentColor" />
              <path d="M0 47.5c0-5.27 4.27-9.54 9.54-9.54H19V57H9.54C4.27 57 0 52.73 0 47.5z" fill="currentColor" />
              <path d="M19 0v19h9.54c5.27 0 9.54-4.27 9.54-9.54C38 4.27 33.73 0 28.46 0H19z" fill="currentColor" />
              <path d="M0 9.54C0 4.27 4.27 0 9.54 0H19v19H9.54C4.27 19 0 14.73 0 9.54z" fill="currentColor" />
              <path d="M19 19H9.54C4.27 19 0 23.27 0 28.5S4.27 38 9.54 38H19V19z" fill="currentColor" />
            </svg>
          </a>
          <a href="https://github.com/acgsa/usds" target="_blank" rel="noopener noreferrer" className="header-github" aria-label="GitHub" title="GitHub">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
      </header>

      {/* Overlay when sidebar is open on small screens */}
      <div className="showcase-sidebar-overlay" aria-hidden="true" onClick={closeSidebar} />

      {/* Left Nav */}
      <aside className="showcase-sidebar" aria-label="Documentation navigation">
        <nav className="sidebar-nav">
          {navSections.map((group) => (
            <div key={group.group} className="sidebar-group">
              <div className="sidebar-group-label">{group.group}</div>
              {group.items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`sidebar-link${activeSection === item.id ? " menu-item-active" : ""}`}
                  onClick={(e) => {
                    handleNavClick(item.id);
                    closeSidebar();
                  }}
                >
                  <span className="menu-item-label">{item.label}</span>
                </a>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="showcase-main">

      {/* ─── 1. Typography ─── */}
      <Section
        id="typography"
        title="Typography"
        description="The primary typeface is Geist, while the secondary typeface is Space Mono, employed exclusively for monospace text. Headings utilize the primary typeface (Geist) in Bold or Semibold weights. Body text is set in the primary typeface using Regular or Semibold weights, as appropriate."
      >
        <div className="typography-subsection">
          <div className="row-label">Headings</div>
          <h1 style={{ marginBottom: "var(--space-xs)" }}>Heading 1 — 60px</h1>
          <h2 style={{ marginBottom: "var(--space-xs)" }}>Heading 2 — 48px</h2>
          <h3 style={{ marginBottom: "var(--space-xs)" }}>Heading 3 — 40px</h3>
          <h4 style={{ marginBottom: "var(--space-xs)" }}>Heading 4 — 32px</h4>
          <h5 style={{ marginBottom: "var(--space-xs)" }}>Heading 5 — 24px</h5>
          <h6 style={{ marginBottom: 0 }}>Heading 6 — 20px</h6>
        </div>

        <div className="typography-subsection">
          <div className="row-label">Body Text</div>
          <p style={{ fontSize: "var(--font-size-body-lg)", lineHeight: "var(--line-height-body-lg)", marginBottom: "var(--space-xs)" }}>
            Body Large (18px) — The quick brown fox jumps over the lazy dog.
          </p>
          <p style={{ fontSize: "var(--font-size-body-md)", lineHeight: "var(--line-height-body-md)", marginBottom: "var(--space-xs)" }}>
            Body Medium (16px) — The quick brown fox jumps over the lazy dog.
          </p>
          <p style={{ fontSize: "var(--font-size-body-sm)", lineHeight: "var(--line-height-body-sm)", marginBottom: "var(--space-xs)" }}>
            Body Small (14px) — The quick brown fox jumps over the lazy dog.
          </p>
          <p style={{ fontSize: "var(--font-size-body-xs)", lineHeight: "var(--line-height-body-xs)", marginBottom: 0 }}>
            Body XS (12px) — The quick brown fox jumps over the lazy dog.
          </p>
        </div>

        <div className="typography-subsection">
          <div className="row-label">Body Strong (Geist Semibold)</div>
          <p style={{ fontSize: "var(--font-size-body-md)", lineHeight: "var(--line-height-body-md)", fontWeight: "var(--font-weight-semibold)" as React.CSSProperties["fontWeight"], marginBottom: "var(--space-xs)" }}>
            Body Medium Strong (16px) — The quick brown fox jumps over the lazy dog.
          </p>
          <p style={{ fontSize: "var(--font-size-body-sm)", lineHeight: "var(--line-height-body-sm)", fontWeight: "var(--font-weight-semibold)" as React.CSSProperties["fontWeight"], marginBottom: 0 }}>
            Body Small Strong (14px) — The quick brown fox jumps over the lazy dog.
          </p>
        </div>

        <div className="typography-subsection">
          <div className="row-label">Density</div>
          <p className="section-desc" style={{ marginBottom: "var(--space-md)" }}>
            Default density uses standard line-height tokens; low density uses increased line spacing for enhanced readability in long-form content.
          </p>
          <div className="typography-density-row typography-density-row-medium">
            <div className="typography-density-block">
              <div className="row-label" style={{ marginBottom: "var(--space-xs)" }}>Body Medium (Default Density)</div>
              <p style={{ fontSize: "var(--font-size-body-md)", lineHeight: "24px", marginBottom: 0, maxWidth: 640 }}>
                Grok 4.1 is xAI&apos;s most advanced and versatile general-purpose language model, optimized to provide balanced performance across diverse tasks—from generating text and conducting in-depth analysis to handling interactive queries and automation workflows. Its speed, precision, and efficiency make it ideal for daily operational use across government agencies.
              </p>
            </div>
            <div className="typography-density-block">
              <div className="row-label" style={{ marginBottom: "var(--space-xs)" }}>Body Medium (Low Density)</div>
              <p style={{ fontSize: "var(--font-size-body-md)", lineHeight: "28px", marginBottom: 0, maxWidth: 640 }}>
                Grok 4.1 is xAI&apos;s most advanced and versatile general-purpose language model, optimized to provide balanced performance across diverse tasks—from generating text and conducting in-depth analysis to handling interactive queries and automation workflows. Its speed, precision, and efficiency make it ideal for daily operational use across government agencies.
              </p>
            </div>
          </div>
          <div className="typography-density-row">
            <div className="typography-density-block">
              <div className="row-label" style={{ marginBottom: "var(--space-xs)" }}>Body Small (Default Density)</div>
              <p style={{ fontSize: "var(--font-size-body-sm)", lineHeight: "20px", marginBottom: 0, maxWidth: 640 }}>
                Grok 4.1 is xAI&apos;s most advanced and versatile general-purpose language model, optimized to provide balanced performance across diverse tasks—from generating text and conducting in-depth analysis to handling interactive queries and automation workflows. Its speed, precision, and efficiency make it ideal for daily operational use across government agencies.
              </p>
            </div>
            <div className="typography-density-block">
              <div className="row-label" style={{ marginBottom: "var(--space-xs)" }}>Body Small (Low Density)</div>
              <p style={{ fontSize: "var(--font-size-body-sm)", lineHeight: "24px", marginBottom: 0, maxWidth: 640 }}>
                Grok 4.1 is xAI&apos;s most advanced and versatile general-purpose language model, optimized to provide balanced performance across diverse tasks—from generating text and conducting in-depth analysis to handling interactive queries and automation workflows. Its speed, precision, and efficiency make it ideal for daily operational use across government agencies.
              </p>
            </div>
          </div>
        </div>

        <div className="typography-subsection">
          <div className="row-label">Caption</div>
          <p style={{ fontSize: "var(--font-size-body-xs)", lineHeight: "var(--line-height-body-xs)", fontWeight: "var(--font-weight-semibold)" as unknown as number, textTransform: "uppercase", letterSpacing: "0.02em", marginBottom: 0 }}>
            Caption (12px) — The quick brown fox jumps over the lazy dog.
          </p>
        </div>

        <div className="typography-subsection">
          <div className="row-label">Mono</div>
          <p style={{ fontFamily: "var(--font-secondary)", fontSize: "var(--font-size-body-sm)", lineHeight: "var(--line-height-body-sm)", marginBottom: 0 }}>
            Space Mono — The quick brown fox jumps over the lazy dog.
          </p>
        </div>
      </Section>

      {/* ─── 2. Color Palette ─── */}
      <Section
        id="color-palette"
        title="Color Palette"
        description="Base color scales from the design tokens. White and black are available as standalone tokens for backgrounds, text, and borders. Each scale runs from 50 (lightest) to 950 (darkest) across 11 steps."
      >
        <div style={{ display: "grid", gap: "var(--space-sm)" }}>
          <div>
            <div className="palette-label">White</div>
            <div className="palette-row">
              <div className="palette-swatch palette-swatch-single palette-swatch-white" style={{ background: "var(--color-white)", color: "var(--color-black)" }}>
                <span className="palette-swatch-step">White</span>
                <span className="palette-swatch-hex">#FFFFFF</span>
              </div>
            </div>
          </div>
          <div>
            <div className="palette-label">Black</div>
            <div className="palette-row">
              <div className="palette-swatch palette-swatch-single palette-swatch-black" style={{ background: "var(--color-black)", color: "var(--color-white)" }}>
                <span className="palette-swatch-step">Black</span>
                <span className="palette-swatch-hex">#000000</span>
              </div>
            </div>
          </div>
          {colorScales.map((c) => (
            <PaletteRow key={c.prefix} name={c.name} prefix={c.prefix} />
          ))}
        </div>
      </Section>

      {/* ─── 3. Spacing Scale ─── */}
      <Section
        id="spacing"
        title="Spacing Scale"
        description="Spacing tokens map t-shirt sizes to the 4px grid. Values shown are for the desktop breakpoint."
      >
        <div className="token-grid">
          {spacingTokens.map((t) => (
            <React.Fragment key={t.name}>
              <span className="token-name">{t.name.replace("--", "")}</span>
              <div className="token-bar" style={{ width: t.value }} />
              <span className="token-value">{t.value}</span>
            </React.Fragment>
          ))}
        </div>
      </Section>

      {/* ─── 4. Buttons ─── */}
      <Section
        id="buttons"
        title="Buttons"
        description="A complete button system with five variants, four sizes, two shapes, icon options, groups, and filters. All buttons support hover, pressed, focus, and disabled states."
      >
        {/* — Variants — */}
        <div className="row-label" style={{ marginBottom: "var(--space-sm)" }}>Variants</div>
        <div className="component-row" style={{ alignItems: "center" }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>

        {/* — Sizes — */}
        <div className="row-label" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-xl)" }}>Sizes</div>
        <div className="component-row" style={{ alignItems: "center" }}>
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>

        {/* — With Icons — */}
        <div className="row-label" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-xl)" }}>With Icons</div>
        <div className="component-row" style={{ alignItems: "center" }}>
          <Button variant="primary" leadingIcon={<PlusIcon />}>Leading</Button>
          <Button variant="primary" trailingIcon={<PlusIcon />}>Trailing</Button>
          <Button variant="primary" leadingIcon={<PlusIcon />} trailingIcon={<PlusIcon />}>Both</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
        <div className="component-row" style={{ alignItems: "center", marginTop: "var(--space-sm)" }}>
          <Button variant="secondary" leadingIcon={<PlusIcon />}>Leading</Button>
          <Button variant="secondary" trailingIcon={<PlusIcon />}>Trailing</Button>
          <Button variant="outline" leadingIcon={<PlusIcon />} trailingIcon={<PlusIcon />}>Both</Button>
          <Button variant="outline" disabled>Disabled</Button>
        </div>

        {/* — Pill Buttons — */}
        <div className="row-label" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-xl)" }}>Pill Buttons</div>
        <div className="component-row" style={{ alignItems: "center" }}>
          <PillButton variant="primary" leadingIcon={<PlusIcon />}>Primary</PillButton>
          <PillButton variant="secondary" leadingIcon={<PlusIcon />}>Secondary</PillButton>
          <PillButton variant="outline" leadingIcon={<PlusIcon />}>Outline</PillButton>
        </div>
        <div className="component-row" style={{ alignItems: "center", marginTop: "var(--space-sm)" }}>
          <PillButton variant="primary" size="xs">Extra Small</PillButton>
          <PillButton variant="primary" size="sm">Small</PillButton>
          <PillButton variant="primary" size="md">Medium</PillButton>
          <PillButton variant="primary" size="lg">Large</PillButton>
        </div>

        {/* — Button Groups — */}
        <div className="row-label" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-xl)" }}>Button Group</div>
        <div style={{ display: "flex", gap: "var(--space-xl)", alignItems: "start", flexWrap: "wrap" }}>
          <div>
            <div className="row-label" style={{ marginBottom: "var(--space-xs)", fontSize: "var(--font-size-body-xs)" }}>Horizontal</div>
            <ButtonGroup direction="horizontal">
              <Button variant="secondary">Contact</Button>
              <Button variant="primary">Learn more</Button>
            </ButtonGroup>
          </div>
          <div>
            <div className="row-label" style={{ marginBottom: "var(--space-xs)", fontSize: "var(--font-size-body-xs)" }}>Vertical</div>
            <ButtonGroup direction="vertical">
              <Button variant="secondary" leadingIcon={<PlusIcon />} trailingIcon={<PlusIcon />}>Button</Button>
              <Button variant="primary" leadingIcon={<PlusIcon />} trailingIcon={<PlusIcon />}>Button</Button>
            </ButtonGroup>
          </div>
          <div style={{ width: 280 }}>
            <div className="row-label" style={{ marginBottom: "var(--space-xs)", fontSize: "var(--font-size-body-xs)" }}>Full Width</div>
            <ButtonGroup direction="vertical" fullWidth>
              <Button variant="secondary" size="lg">Button</Button>
              <Button variant="primary" size="lg">Button</Button>
            </ButtonGroup>
          </div>
        </div>

        {/* — Filter Group — */}
        <div className="row-label" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-xl)" }}>Filter Group</div>
        <FilterGroup
          items={[
            { id: "f1", label: "Filter", hasDropdown: true },
            { id: "f2", label: "Filter" },
            { id: "f3", label: "Filter" },
            { id: "f4", label: "Filter" },
            { id: "f5", label: "Filter" },
            { id: "f6", label: "Filter" },
          ]}
        />
        <div style={{ marginTop: "var(--space-sm)" }}>
          <FilterGroup
            shape="pill"
            items={[
              { id: "p1", label: "Filter", hasDropdown: true },
              { id: "p2", label: "Filter" },
              { id: "p3", label: "Filter" },
              { id: "p4", label: "Filter" },
              { id: "p5", label: "Filter" },
              { id: "p6", label: "Filter" },
            ]}
          />
        </div>

        {/* — Link — */}
        <div className="row-label" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-xl)" }}>Link</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-xl)", maxWidth: 560, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
            <div className="row-label" style={{ marginBottom: "var(--space-xs)", fontSize: "var(--font-size-body-xs)" }}>Default</div>
            <Link variant="default">Link</Link>
            <div className="row-label" style={{ marginBottom: "var(--space-xs)", fontSize: "var(--font-size-body-xs)", marginTop: "var(--space-sm)" }}>Disabled</div>
            <Link variant="default" disabled>Link</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
            <div className="row-label" style={{ marginBottom: "var(--space-xs)", fontSize: "var(--font-size-body-xs)" }}>In-line</div>
            <Link variant="inline">Link</Link>
            <div className="row-label" style={{ marginBottom: "var(--space-xs)", fontSize: "var(--font-size-body-xs)", marginTop: "var(--space-sm)" }}>Disabled</div>
            <Link variant="inline" disabled>Link</Link>
          </div>
        </div>

        {/* — Icon Buttons — */}
        <div className="row-label" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-xl)" }}>Icon Buttons — Square</div>
        <div className="component-row" style={{ alignItems: "center" }}>
          <IconButton variant="primary" size="xs" icon={<PlusIcon />} label="Add" />
          <IconButton variant="primary" size="sm" icon={<PlusIcon />} label="Add" />
          <IconButton variant="primary" size="md" icon={<PlusIcon />} label="Add" />
          <IconButton variant="primary" size="lg" icon={<PlusIcon />} label="Add" />
          <IconButton variant="secondary" size="md" icon={<PlusIcon />} label="Add" />
          <IconButton variant="outline" size="md" icon={<PlusIcon />} label="Add" />
        </div>

        <div className="row-label" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>Icon Buttons — Circle</div>
        <div className="component-row" style={{ alignItems: "center" }}>
          <IconButton variant="primary" shape="circle" size="xs" icon={<PlusIcon />} label="Add" />
          <IconButton variant="primary" shape="circle" size="sm" icon={<PlusIcon />} label="Add" />
          <IconButton variant="primary" shape="circle" size="md" icon={<PlusIcon />} label="Add" />
          <IconButton variant="primary" shape="circle" size="lg" icon={<PlusIcon />} label="Add" />
          <IconButton variant="secondary" shape="circle" size="md" icon={<PlusIcon />} label="Add" />
          <IconButton variant="outline" shape="circle" size="md" icon={<PlusIcon />} label="Add" />
        </div>

        {/* — Action Button — */}
        <div className="row-label" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-xl)" }}>Action Button</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-xl)", maxWidth: 560 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
            <div className="row-label" style={{ marginBottom: "var(--space-xs)", fontSize: "var(--font-size-body-xs)" }}>Small</div>
            <div style={{ display: "flex", gap: "var(--space-md)" }}>
              <ActionButton size="sm" icon={<DownloadIconNew size={16} />} />
              <ActionButton size="sm" icon={<CopyIcon size={16} />} />
              <ActionButton size="sm" icon={<EyeIcon size={16} />} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
            <div className="row-label" style={{ marginBottom: "var(--space-xs)", fontSize: "var(--font-size-body-xs)" }}>Medium</div>
            <div style={{ display: "flex", gap: "var(--space-md)" }}>
              <ActionButton size="md" icon={<DownloadIconNew size={20} />} />
              <ActionButton size="md" icon={<CopyIcon size={20} />} />
              <ActionButton size="md" icon={<EyeIcon size={20} />} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
            <div className="row-label" style={{ marginBottom: "var(--space-xs)", fontSize: "var(--font-size-body-xs)" }}>Large</div>
            <div style={{ display: "flex", gap: "var(--space-md)" }}>
              <ActionButton size="lg" icon={<DownloadIconNew size={24} />} />
              <ActionButton size="lg" icon={<CopyIcon size={24} />} />
              <ActionButton size="lg" icon={<EyeIcon size={24} />} />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "var(--space-lg)" }}>
          <div className="row-label" style={{ marginBottom: "var(--space-xs)" }}>Disabled</div>
          <div style={{ display: "flex", gap: "var(--space-md)" }}>
            <ActionButton size="md" icon={<DownloadIconNew size={20} />} disabled />
            <ActionButton size="md" icon={<CopyIcon size={20} />} disabled />
            <ActionButton size="md" icon={<EyeIcon size={20} />} disabled />
          </div>
        </div>
      </Section>

      {/* ─── 5. Inputs ─── */}
      <Section
        id="text-inputs"
        title="Text Inputs"
        description="Standard text inputs with label, hint text, error states, and three sizes. All inputs use the focus ring token."
      >
        <div className="component-grid">
          <Input label="Small Input" placeholder="Placeholder text…" inputSize="sm" />
          <Input label="Medium Input" placeholder="Placeholder text…" inputSize="md" hint="Optional hint text" />
          <Input label="Large Input" placeholder="Placeholder text…" inputSize="lg" />
        </div>
        <div className="component-grid" style={{ marginTop: "var(--space-md)" }}>
          <Input label="Error State" placeholder="Invalid value" inputSize="md" error="This field is required" />
          <Input label="Disabled" placeholder="Can't edit" inputSize="md" disabled />
        </div>
      </Section>

      {/* ─── 6. Textarea ─── */}
      <Section
        id="textarea"
        title="Text Area"
        description="Multi-line text input for longer form content. Supports all standard states."
      >
        <div style={{ maxWidth: 480 }}>
          <Textarea label="Description" placeholder="Enter a detailed description…" rows={4} />
        </div>
      </Section>

      {/* ─── 7. Checkbox & Radio ─── */}
      <Section
        id="checkbox-radio"
        title="Checkbox & Radio"
        description="Styled checkboxes and radio buttons using design token colors for checked/unchecked states."
      >
        <div className="checkbox-radio-row">
          <div>
            <div className="row-label" style={{ marginBottom: "var(--space-xs)" }}>Checkboxes</div>
            <div className="check-group">
              <Checkbox label="Enable notifications" defaultChecked />
              <Checkbox label="Subscribe to newsletter" />
              <Checkbox label="Agree to terms" />
              <Checkbox label="Disabled option" disabled />
            </div>
          </div>
          <div>
            <div className="row-label" style={{ marginBottom: "var(--space-xs)" }}>Radio Group</div>
            <div className="check-group">
              <Radio label="Option A" name="demo-radio" defaultChecked />
              <Radio label="Option B" name="demo-radio" />
              <Radio label="Option C" name="demo-radio" />
              <Radio label="Disabled" name="demo-radio-2" disabled />
            </div>
          </div>
        </div>
      </Section>

      {/* ─── 9. Toggle ─── */}
      <Section
        id="toggle"
        title="Toggle / Switch"
        description="Binary toggle controls in three sizes. Uses the secondary button color for the active state track."
      >
        <div className="component-row">
          <Toggle size="sm" label="Small" checked={toggleStates.sm} onChange={(v) => setToggleStates((s) => ({ ...s, sm: v }))} />
          <Toggle size="md" label="Medium" checked={toggleStates.md} onChange={(v) => setToggleStates((s) => ({ ...s, md: v }))} />
          <Toggle size="lg" label="Large" checked={toggleStates.lg} onChange={(v) => setToggleStates((s) => ({ ...s, lg: v }))} />
          <Toggle size="md" label="Disabled" checked disabled />
        </div>
      </Section>

      {/* ─── 10. Cards ─── */}
      <Section
        id="cards"
        title="Cards"
        description="Content containers in three sizes with medium corner radius. Small and medium use spacing-md; large uses spacing-lg. Background token, subtle border, and hover shadow."
      >
        <div className="component-grid">
          <Card size="sm" title="Small Card" footer={<Button variant="primary" size="sm">Action</Button>}>
            Compact card for dense layouts.
          </Card>
          <Card size="md" title="Medium Card" footer={<><Button variant="secondary" size="sm">Confirm</Button><Button variant="ghost" size="sm">Cancel</Button></>}>
            Default card size for most content blocks.
          </Card>
          <Card size="lg" title="Large Card" footer={<Button variant="outline" size="md">Learn More</Button>}>
            Spacious card for feature highlights or hero sections. Uses a larger padding area than the other cards.
          </Card>
        </div>
      </Section>

      {/* ─── 11. Tags ─── */}
      <Section
        id="tags"
        title="Tags"
        description="Colored chip labels using design system tokens. Available in all 10 palette colors with optional leading icon, dismiss button, and status dot. Colors adapt for light and dark mode."
      >
        <div className="row-label" style={{ marginBottom: "var(--space-xs)" }}>Chips with icon &amp; dismiss</div>
        <div className="component-row" style={{ flexWrap: "wrap" }}>
          <Badge color="steel" icon dismissible>CHIP</Badge>
          <Badge color="blue" icon dismissible>CHIP</Badge>
          <Badge color="red" icon dismissible>CHIP</Badge>
          <Badge color="orange" icon dismissible>CHIP</Badge>
          <Badge color="gold" icon dismissible>CHIP</Badge>
          <Badge color="yellow" icon dismissible>CHIP</Badge>
          <Badge color="green" icon dismissible>CHIP</Badge>
          <Badge color="pink" icon dismissible>CHIP</Badge>
          <Badge color="turquoise" icon dismissible>CHIP</Badge>
          <Badge color="violet" icon dismissible>CHIP</Badge>
        </div>

        <div className="row-label" style={{ marginBottom: "var(--space-xs)", marginTop: "var(--space-md)" }}>Labels</div>
        <div className="component-row" style={{ flexWrap: "wrap" }}>
          <Badge color="steel">Steel</Badge>
          <Badge color="blue">Blue</Badge>
          <Badge color="green">Green</Badge>
          <Badge color="red">Red</Badge>
          <Badge color="orange">Orange</Badge>
          <Badge color="gold">Gold</Badge>
          <Badge color="yellow">Yellow</Badge>
          <Badge color="pink">Pink</Badge>
          <Badge color="turquoise">Turquoise</Badge>
          <Badge color="violet">Violet</Badge>
        </div>

        <div className="row-label" style={{ marginBottom: "var(--space-xs)", marginTop: "var(--space-md)" }}>Sizes</div>
        <div className="component-row">
          <Badge color="blue" size="sm" icon dismissible>Small</Badge>
          <Badge color="blue" size="md" icon dismissible>Medium</Badge>
          <Badge color="blue" size="lg" icon dismissible>Large</Badge>
        </div>

        <div className="row-label" style={{ marginBottom: "var(--space-xs)", marginTop: "var(--space-md)" }}>With status dot</div>
        <div className="component-row">
          <Badge color="green" dot="active">Active</Badge>
          <Badge color="gold" dot="pending">Pending</Badge>
          <Badge color="red" dot="error">Error</Badge>
          <Badge color="steel" dot="draft">Draft</Badge>
        </div>
      </Section>

      {/* ─── 12. Alerts ─── */}
      <Section
        id="alerts"
        title="Alerts"
        description="Feedback messages for info, success, warning, and error states. Colors come from the status tokens."
      >
        <div style={{ display: "grid", gap: "var(--space-md)", maxWidth: 900 }}>
          <div>
            <div className="row-label" style={{ marginBottom: "var(--space-xs)" }}>Success</div>
            <Alert variant="success" title="Success" onDismiss={() => {}}>
              Describe the event and give further instructions including <strong><u>links</u></strong> if needed.
            </Alert>
          </div>
          <div>
            <div className="row-label" style={{ marginBottom: "var(--space-xs)" }}>Error</div>
            <Alert variant="error" title="Error" onDismiss={() => {}}>
              Describe the event and give further instructions including <strong><u>links</u></strong> if needed.
            </Alert>
          </div>
          <div>
            <div className="row-label" style={{ marginBottom: "var(--space-xs)" }}>Warning</div>
            <Alert variant="warning" title="Warning" onDismiss={() => {}}>
              Describe the event and give further instructions including <strong><u>links</u></strong> if needed.
            </Alert>
          </div>
          <div>
            <div className="row-label" style={{ marginBottom: "var(--space-xs)" }}>Info</div>
            <Alert variant="info" title="Information" onDismiss={() => {}}>
              Describe the event and give further instructions including <strong><u>links</u></strong> if needed.
            </Alert>
          </div>
        </div>
      </Section>

      {/* ─── 13. Avatars ─── */}
      <Section
        id="avatars"
        title="Avatars"
        description="User avatars in five sizes, two shapes, and seven color options. Gold 500 and Blue 400 use dark initials for contrast."
      >
        <div className="avatar-subsection">
          <div className="row-label" style={{ marginBottom: "var(--space-xs)" }}>Sizes</div>
          <div className="component-row">
            <Avatar size="xs" initials="XS" />
            <Avatar size="sm" initials="SM" />
            <Avatar size="md" initials="MD" />
            <Avatar size="lg" initials="LG" />
            <Avatar size="xl" initials="XL" />
          </div>
        </div>
        <div className="avatar-subsection">
          <div className="row-label" style={{ marginBottom: "var(--space-xs)" }}>Colors — Square</div>
          <div className="component-row">
            <Avatar size="lg" initials="ZW" shape="square" color="steel" />
            <Avatar size="lg" initials="ZW" shape="square" color="blue" />
            <Avatar size="lg" initials="ZW" shape="square" color="blue-400" />
            <Avatar size="lg" initials="ZW" shape="square" color="gold" />
            <Avatar size="lg" initials="ZW" shape="square" color="green" />
            <Avatar size="lg" initials="ZW" shape="square" color="violet" />
            <Avatar size="lg" initials="ZW" shape="square" color="pink" />
          </div>
        </div>
        <div className="avatar-subsection">
          <div className="row-label" style={{ marginBottom: "var(--space-xs)" }}>Colors — Round</div>
          <div className="component-row">
            <Avatar size="lg" initials="ZW" color="steel" />
            <Avatar size="lg" initials="ZW" color="blue" />
            <Avatar size="lg" initials="ZW" color="blue-400" />
            <Avatar size="lg" initials="ZW" color="gold" />
            <Avatar size="lg" initials="ZW" color="green" />
            <Avatar size="lg" initials="ZW" color="violet" />
            <Avatar size="lg" initials="ZW" color="pink" />
          </div>
        </div>
        <div className="avatar-subsection">
          <div className="row-label" style={{ marginBottom: "var(--space-xs)" }}>With Status</div>
          <div className="component-row">
            <Avatar size="lg" initials="AC" color="blue" status="online" />
            <Avatar size="lg" initials="BM" color="green" status="offline" />
            <Avatar size="lg" initials="CJ" color="pink" status="busy" />
            <Avatar size="lg" initials="DK" color="violet" shape="square" status="online" />
            <Avatar size="lg" initials="EL" color="steel" shape="square" status="offline" />
            <Avatar size="lg" initials="FM" color="gold" shape="square" status="busy" />
          </div>
        </div>
        <div className="avatar-subsection">
          <div className="row-label" style={{ marginBottom: "var(--space-xs)" }}>With full name and government entity</div>
          <div className="component-row">
            <AvatarWithInfo initials="ZW" fullName="Full Name" governmentEntity="Government Entity" color="steel" />
          </div>
        </div>
      </Section>

      {/* ─── 14. Tabs ─── */}
      <Section
        id="tabs"
        title="Tabs"
        description="Tab navigation for switching between views. Active tab uses the heading color with a bottom border indicator."
      >
        <Tabs
          items={[
            { id: "overview", label: "Overview", content: <p style={{ color: "var(--color-text-body)" }}>Overview content panel. This tab displays the main summary of information using body text tokens.</p> },
            { id: "details", label: "Details", content: <p style={{ color: "var(--color-text-body)" }}>Details content with more specific information, metrics, and configurations.</p> },
            { id: "settings", label: "Settings", content: <p style={{ color: "var(--color-text-body)" }}>Application settings and preferences. Configure your experience here.</p> },
            { id: "activity", label: "Activity", content: <p style={{ color: "var(--color-text-body)" }}>Recent activity log showing user actions and system events.</p> },
          ]}
        />
      </Section>

      {/* ─── 15. Table ─── */}
      <Section
        id="table"
        title="Table"
        description="Data table with header styling and hover rows. Cell content can be: Link, Checkmark, Action buttons (icon-only with ghost hover), or Chip (Steel from Chips section). Uses the muted background token for headers."
      >
        <Table
          header={
            <TableHeader
              title="Table header"
              actionButtons={tableHeaderActions}
              dropdown={
                <Dropdown
                  label="Dropdown"
                  size="sm"
                  items={[
                    { label: "Sort by name" },
                    { label: "Sort by date" },
                    { label: "Sort by status" },
                  ]}
                />
              }
            />
          }
          columns={tableColumns}
          data={tableData}
        />
      </Section>

      {/* ─── Data Visualization ─── */}
      <Section
        id="data-visualization"
        title="Data Visualization"
        description="Charts use design system tokens for colors, typography, and spacing. Donut and bar charts adapt to light and dark mode via chart color variables."
      >
        <div className="data-viz-subsection">
          <div className="component-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))" }}>
            <DonutChart
              title="Permits by Bureau"
              segments={[
                { label: "BLM", value: 124677, colorVar: "var(--blue-400)" },
                { label: "BIA", value: 9318, colorVar: "var(--blue-600)" },
                { label: "FWS", value: 4256, colorVar: "var(--blue-800)" },
                { label: "Other", value: 1605, colorVar: "var(--blue-200)" },
              ]}
            />
            <BarChart
              title="Av. Days Since Submission"
              items={[
                { label: "NEPA", value: 2291 },
                { label: "MLRS", value: 1805 },
                { label: "ePlanning", value: 1202 },
                { label: "NFLSS", value: 1167 },
              ]}
            />
          </div>
          <div style={{ marginTop: "var(--space-lg)" }}>
            <CompletionTracker
              title="Completion State (2025–Current)"
              description="In all applications submitted from 2025 through to the present date, 42% remain overdue, representing the largest proportion; 21% have been approved, 13% are in review, and 8% each are submitted, pending, or rejected."
              actionLabel="View report"
              onAction={() => {}}
              segments={[
              { label: "Submitted", percent: 8, colorVar: "var(--blue-600)", hoverColorVar: "var(--blue-700)" },
              { label: "In Review", percent: 13, colorVar: "var(--blue-400)", hoverColorVar: "var(--blue-500)" },
              { label: "Pending", percent: 8, colorVar: "var(--blue-200)", hoverColorVar: "var(--blue-300)" },
              { label: "Overdue", percent: 42, colorVar: "var(--red-400)", hoverColorVar: "var(--red-500)", texture: "stripes" },
              { label: "Approved", percent: 21, colorVar: "var(--green-400)", hoverColorVar: "var(--green-500)", texture: "stripes-alt" },
              { label: "Rejected", percent: 8, colorVar: "var(--steel-800)", hoverColorVar: "var(--steel-900)" },
              ]}
            />
          </div>
        </div>

        <div className="data-viz-subsection">
          <div className="row-label">KPI hover card</div>
          <p className="section-desc" style={{ marginBottom: "var(--space-sm)" }}>
            Shown when hovering over chart data. Use the same structure (title + rows with bullet, label, value) for donut and bar charts.
          </p>
          <div className="chart-kpi-card chart-kpi-card-inline">
            <div className="chart-kpi-card-title">May 22</div>
            <div className="chart-kpi-card-row">
              <span className="chart-kpi-card-bullet" style={{ background: "var(--chart-1)" }} />
              <span className="chart-kpi-card-label">Total</span>
              <span className="chart-kpi-card-value">5,214</span>
            </div>
            <div className="chart-kpi-card-row">
              <span className="chart-kpi-card-bullet" style={{ background: "var(--chart-2)" }} />
              <span className="chart-kpi-card-label">Active</span>
              <span className="chart-kpi-card-value">3,214</span>
            </div>
          </div>
        </div>

        <div className="data-viz-subsection">
          <div className="row-label">Small KPI card</div>
          <p className="section-desc" style={{ marginBottom: "var(--space-sm)" }}>
            Compact card for a single metric with trend. Use for dashboards or alongside charts. Green for increase, red for decrease.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-md)" }}>
            <SmallKpiCard label="Daily" value="2,473" changePercent={2} trend="increase" />
            <SmallKpiCard label="Daily" value="2,473" changePercent={2} trend="decrease" />
          </div>
        </div>
      </Section>

      {/* ─── 16. Modal ─── */}
      <Section
        id="modal"
        title="Modal"
        description="Dialog overlay with header, body, and footer sections. Click the button below to preview."
      >
        <Button variant="secondary" size="md" onClick={() => setModalOpen(true)}>
          Open Modal
        </Button>
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Overwrite System Prompt?"
          description="Saving will replace the previously saved system prompt. This cannot be undone. Do you wish to continue?"
          footer={
            <ButtonGroup direction="vertical" fullWidth>
              <Button variant="secondary" size="lg" onClick={() => setModalOpen(false)}>Overwrite</Button>
              <Button variant="primary" size="lg" onClick={() => setModalOpen(false)}>Cancel</Button>
            </ButtonGroup>
          }
        />
      </Section>

      {/* ─── 17. Progress ─── */}
      <Section
        id="progress"
        title="Progress Bar"
        description="Progress indicators in three sizes and all status variants. Fill width animates smoothly with the transition token."
      >
        <div style={{ display: "grid", gap: "var(--space-md)", maxWidth: 480 }}>
          <div>
            <div className="row-label" style={{ marginBottom: "var(--space-xs)" }}>Sizes</div>
            <div style={{ display: "grid", gap: "var(--space-sm)" }}>
              <Progress value={60} size="sm" />
              <Progress value={60} size="md" />
              <Progress value={60} size="lg" showLabel />
            </div>
          </div>
          <div>
            <div className="row-label" style={{ marginBottom: "var(--space-xs)" }}>Variants</div>
            <div style={{ display: "grid", gap: "var(--space-sm)" }}>
              <Progress value={80} variant="info" size="md" />
              <Progress value={100} variant="success" size="md" />
              <Progress value={45} variant="warning" size="md" />
              <Progress value={25} variant="gold" size="md" />
            </div>
          </div>
        </div>
      </Section>

      {/* ─── 18. Spinner ─── */}
      <Section
        id="spinner"
        title="Spinner"
        description="Loading indicators in three sizes. Uses the heading color for the animated arc and emphasis background for the track."
      >
        <div className="component-row">
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </div>
      </Section>

      {/* ─── 19. Tooltip ─── */}
      <Section
        id="tooltip"
        title="Tooltip"
        description="Contextual information displayed on hover. Uses the tooltip background and text color tokens."
      >
        <div className="component-row">
          <Tooltip text="This is a tooltip">
            <Button variant="primary" size="sm">Hover me</Button>
          </Tooltip>
        </div>
      </Section>

      {/* ─── 20. Breadcrumb ─── */}
      <Section
        id="breadcrumb"
        title="Breadcrumb"
        description="Navigation breadcrumb trail using link and body text tokens. Current page is displayed with semibold weight."
      >
        <Breadcrumb
          items={[
            { label: "Home", href: "#" },
            { label: "Dashboard", href: "#" },
            { label: "Settings", href: "#" },
            { label: "Profile" },
          ]}
        />
      </Section>

      {/* ─── 21. Menu ─── */}
      <Section
        id="menu"
        title="Menu"
        description="Vertical menu for left-hand navigation or dropdown panels. Two item styles: icon with chevron-down, and title with subtext and chevron-right."
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-xl)", maxWidth: 720 }}>
          <div>
            <div className="row-label" style={{ marginBottom: "var(--space-xs)" }}>Icon Style</div>
            <Menu
              items={[
                { type: "icon", label: "Menu item" },
                { type: "icon", label: "Menu item" },
                { type: "icon", label: "Menu item" },
                { type: "icon", label: "Menu item" },
                { type: "icon", label: "Menu item" },
                { type: "icon", label: "Menu item", disabled: true },
              ]}
            />
          </div>
          <div>
            <div className="row-label" style={{ marginBottom: "var(--space-xs)" }}>Subtext Style</div>
            <Menu
              items={[
                { type: "subtext", label: "Menu item", subtext: "Subtext copy" },
                { type: "subtext", label: "Menu item", subtext: "Subtext copy" },
                { type: "subtext", label: "Menu item", subtext: "Subtext copy" },
                { type: "subtext", label: "Menu item", subtext: "Subtext copy" },
                { type: "subtext", label: "Menu item", subtext: "Subtext copy" },
                { type: "subtext", label: "Menu item", subtext: "Subtext copy", disabled: true },
              ]}
            />
          </div>
        </div>

        <div className="row-label" style={{ marginBottom: "var(--space-xs)", marginTop: "var(--space-lg)" }}>Drawer Button</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)", alignItems: "start" }}>
          <div className="row-label" style={{ marginBottom: "var(--space-xs)" }}>Interactive Drawer Toggle</div>
          <div style={{ display: "flex", gap: "var(--space-sm)", alignItems: "center" }}>
            <DrawerButton
              state={drawerState}
              direction="right"
              onClick={() => setDrawerState(drawerState === "open" ? "closed" : "open")}
            />
            <span className="text-sm text-gray-600">
              State: {drawerState === "open" ? "Open" : "Closed"} | Click to toggle
            </span>
          </div>
        </div>
      </Section>

      {/* ─── 22. Dropdown ─── */}
      <Section
        id="dropdown"
        title="Dropdown"
        description="Dropdown trigger button with chevron in two sizes. Supports default, hover, focus, and disabled states. Click to open the action menu."
      >
        <div style={{ display: "grid", gridTemplateColumns: "auto auto auto", gap: "var(--space-lg)", justifyContent: "start", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
            <div className="row-label" style={{ marginBottom: 0 }}>Small</div>
            <Dropdown size="sm" items={[{ label: "Edit Profile" }, { label: "Settings" }, { label: "Delete", destructive: true }]} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
            <div className="row-label" style={{ marginBottom: 0 }}>Medium</div>
            <Dropdown size="md" items={[{ label: "Edit Profile" }, { label: "Settings" }, { label: "Delete", destructive: true }]} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
            <div className="row-label" style={{ marginBottom: 0 }}>Large</div>
            <Dropdown size="lg" items={[{ label: "Edit Profile" }, { label: "Settings" }, { label: "Delete", destructive: true }]} />
          </div>
        </div>

        <div className="row-label" style={{ marginBottom: "var(--space-xs)", marginTop: "var(--space-lg)" }}>Disabled</div>
        <div className="component-row">
          <Dropdown size="sm" disabled items={[]} />
          <Dropdown size="md" disabled items={[]} />
          <Dropdown size="lg" disabled items={[]} />
        </div>
      </Section>

      {/* ─── 22. Divider ─── */}
      <Section
        id="divider"
        title="Divider"
        description="Horizontal rules in default, strong, and subtle variants for separating content sections."
      >
        <div style={{ maxWidth: 480 }}>
          <div className="row-label" style={{ marginBottom: "var(--space-xs)" }}>Default</div>
          <Divider />
          <div className="row-label" style={{ marginBottom: "var(--space-xs)" }}>Strong</div>
          <Divider strong />
          <div className="row-label" style={{ marginBottom: "var(--space-xs)" }}>Subtle</div>
          <Divider subtle />
        </div>
      </Section>

      {/* ─── About ─── */}
      <Section
        id="about"
        title="About"
        description="This Design System provides reusable components, tokens, and patterns for building consistent government-facing applications. All components pass WCAG 2.0 AA accessibility requirements."
      >
        <p className="section-desc" style={{ marginBottom: "var(--space-lg)", maxWidth: 560 }}>
          Components are actively maintained and may be updated at any time to reflect ongoing improvements and feedback. The provided source code is fully customizable, allowing you to adapt and extend it to meet the specific needs of your project.
        </p>
        <p className="section-desc" style={{ marginBottom: "var(--space-lg)", maxWidth: 560 }}>
          Use the design files and code references below to align your products with the system. Figma libraries support seamless design handoff, while the GitHub repository includes this showcase and all component source code.
        </p>
        <div className="about-cards">
          <Card
            size="md"
            title="Figma"
            footer={
              <Link
                href="https://figma-gov.com/design/TpUFaDOqpGxZmKPVFHXBgS/US-Design-System?node-id=1-4&t=L6h7x0BovNBu9f2C-1"
                variant="default"
                target="_blank"
                rel="noopener noreferrer"
                leadingIcon={
                  <svg width="18" height="18" viewBox="0 0 38 57" fill="none" aria-hidden style={{ flexShrink: 0 }}>
                    <path d="M19 28.5c0-5.27 4.27-9.54 9.54-9.54 5.27 0 9.54 4.27 9.54 9.54 0 5.27-4.27 9.54-9.54 9.54-5.27 0-9.54-4.27-9.54-9.54z" fill="currentColor" />
                    <path d="M0 47.5c0-5.27 4.27-9.54 9.54-9.54H19V57H9.54C4.27 57 0 52.73 0 47.5z" fill="currentColor" />
                    <path d="M19 0v19h9.54c5.27 0 9.54-4.27 9.54-9.54C38 4.27 33.73 0 28.46 0H19z" fill="currentColor" />
                    <path d="M0 9.54C0 4.27 4.27 0 9.54 0H19v19H9.54C4.27 19 0 14.73 0 9.54z" fill="currentColor" />
                    <path d="M19 19H9.54C4.27 19 0 23.27 0 28.5S4.27 38 9.54 38H19V19z" fill="currentColor" />
                  </svg>
                }
              >
                Open Figma library
              </Link>
            }
          >
            Design libraries, components, and styles for use in Figma. Duplicate the file or link the library to your team file.
          </Card>
          <Card
            size="md"
            title="GitHub"
            footer={
              <Link
                href="https://github.com/acgsa/usds"
                variant="default"
                leadingIcon={
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden style={{ flexShrink: 0 }}>
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Open GitHub repo
              </Link>
            }
          >
            Source code for this showcase and all UI components. Clone the repo or install the package to use the design system in your app.
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="showcase-footer" style={{ textAlign: "center", padding: "var(--space-xl) 0", color: "var(--color-text-placeholder)", fontSize: "var(--font-size-body-xs)" }}>
        {"A US Design System 🇺🇸  |  Brought to you by "}
        <a href="https://www.gsa.gov" target="_blank" rel="noopener noreferrer" className="showcase-footer-link">General Services Administration</a>
      </footer>
      </main>
    </div>
  );
}
