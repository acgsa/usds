# A U.S. Design System (USDS)

**A high-density design system for federal web applications.**

[Live preview →](https://acgsa.github.io/usds/)

USDS is a React + TypeScript design system built for dense, operational government interfaces. It includes accessible components, semantic design tokens (with light/dark modes), and patterns optimized for staff tools, dashboards, and permitting systems.

---

## Features

- High-density components suited for complex federal workflows
- Design tokens organized as Base → Responsive → Alias (light + dark)
- WCAG 2.0 AA compliant
- Tree-shakeable React components
- Official USG Ribbon
- Works alongside or as a denser alternative to USWDS

---

## Quick Start

### Install

The package is not yet published to npm. Install from Git:

```bash
npm install github:acgsa/usds
# or
yarn add github:acgsa/usds
# or
pnpm add github:acgsa/usds
```

---

## Upcoming changes

- Table component to include full table header, action buttons, dropdown sorter, plus counter and pagination at bottom
- Button text size to be checked against Figma styling
- Change focus-within to focus-visible
- Add multiple choice tokens and component
- Fix dropdowns (incorrect border in component)
- Fix charts (responsive issues)

---

## Figma

Design tokens and components are also available as a Figma library:
[USDS Figma Library  →](https://figma-gov.com/design/TpUFaDOqpGxZmKPVFHXBgS/A-US-Design-System?node-id=0-1&t=TyGXUa3OdjHxZwtd-1&view=variables)

---

## Contributing
Issues and pull requests are welcome. Because this system is used in real federal prototypes, please open an issue first for any significant changes so we can discuss impact on existing consumers.

---

## License
MIT — free to use, modify, and distribute for both government and public projects.
