# US Design System — Design Tokens for Figma

Tokens are split into **3 Figma collections**: Base, Responsive, and Alias. Import each JSON as a separate collection (or map them to variable groups) so type, color, spacing, breakpoints, and semantic styling stay organized.

---

## 1. Base — `base.json`

**Use for:** Raw type, color palette, spacing scale. No semantic meaning.

| Section | Contents |
|--------|----------|
| **color** | Full palette: steel, neutral, blue, red, orange, gold, yellow, green, pink, turquoise, violet (50–950) + white, black |
| **type** | fontFamily (primary, secondary), fontWeight (regular, semibold, bold) |
| **scale** | scale (4px scale 0–1600) |

**In Figma:** Create a collection **“Base”** and add variables from `base.json` (color variables from `color.*`, number variables from `type.*`, `scale.*`).

---

## 2. Responsive — `responsive.json`

**Use for:** Breakpoints and viewport context (layout rules, when to switch scales).

| Section | Contents |
|--------|----------|
| **spacing** | 3xs, 2xs, xs, sm, md, lg, xl, 2xl, 3xl — tshirt sizing - values in px |
| **icon sizing** | xs, sm, md, lg, xl — tshirt sizing - values in px |
| **breakpoint** | sm (640), md (768), lg (1024), xl (1280), showcase (1024) — values in px |
| **context** | desktop (minWidth 1024), mobile (maxWidth 1023) — describes where base type/spacing apply |

**In Figma:** Create a collection **“Responsive”** and add number variables for breakpoints. Use for layout constraints, auto-layout rules, or documentation; Figma variables don’t drive viewport breakpoints in dev, but the tokens keep design and code in sync.

---

## 3. Alias — `alias.json`

**Use for:** Semantic colors for borders, surface, text, buttons, chips, chart, icons, alerts, shadows. **Light** and **dark** keys = two modes.

| Section (under `light` or `dark`) | Contents |
|-----------------------------------|----------|
| **background** | default, subtle, muted, emphasis, strong, inverse, hover, disabled, tooltip, alert |
| **border** | default, subtle, strong, emphasis, focus, disabled, alert |
| **text** | default, secondary, body, bodyHover, placeholder, link, linkHover, disabled, inverse, tooltip |
| **button** | primary, secondary, outline (bg, border, text, hover, disabled) |
| **chip** | steel, blue, red, orange, gold, yellow, green, pink, turquoise, violet (bg + text) |
| **chart** | 1–5, bar (data viz colors) |
| **icon** | default, hover, active, disabled |
| **alert** | bg, border, info, success, warning, error |
| **radius** | none, sm (4), md (8), lg (16), pill (36) |


**In Figma:** Create a collection **“Alias”** with two **modes**: e.g. **Light** and **Dark**. Map `alias.json` → `light` to the Light mode and `alias.json` → `dark` to the Dark mode. Bind component fills, strokes, and text to these variables so switching mode updates styling.

---

## Quick reference

| Collection | File | Use for |
|------------|------|--------|
| **Base** | `base.json` | Type, color palette, spacing scale, radius, border width |
| **Responsive** | `responsive.json` | Breakpoints and viewport context |
| **Alias** | `alias.json` | Borders, surface, text, buttons, chips, chart, icons, alerts, shadows (light + dark) |
ection)

These tokens stay in sync with `src/styles/globals.css`.
