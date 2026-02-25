# React Icons Component

This document describes the React Icons component library created from the actual SVG files in the `/src/icons/` directory.

## Overview

The Icons component provides a collection of reusable React icon components built directly from the SVG source files. Each icon uses `currentColor` for proper color inheritance, allowing them to be styled using text color utilities or CSS classes.

## Icons Included

The following 8 icons are included in this component library:

1. **DownloadIcon** - Download arrow with save indicator
   - Source: `Icon=Download.svg`
   - Uses: Filled paths for visual depth

2. **CopyIcon** - Document Duplicate
   - Source: `Icon=Document Duplicate.svg`
   - Uses: Stroked paths for outline style

3. **EyeIcon** - Eye for visibility
   - Source: `Icon=Eye.svg`
   - Uses: Stroked paths with two elements (outer ring and pupil)

4. **PlusIcon** - Plus sign
   - Source: `Icon=Plus.svg`
   - Uses: Simple crossed strokes

5. **MenuIcon** - Hamburger menu
   - Source: `Icon=Menu.svg`
   - Uses: Three horizontal stroked lines

6. **ChevronDownIcon** - Downward chevron
   - Source: `Icon=Chevron Down.svg`
   - Uses: Single stroked chevron pointing down

7. **ChevronUpIcon** - Upward chevron
   - Source: `Icon=Chevron Up.svg`
   - Uses: Single stroked chevron pointing up

8. **XMarkIcon** - Close/dismiss X
   - Source: `Icon=X Mark.svg`
   - Uses: Two crossed diagonal strokes

## Usage

### Direct Component Import

```tsx
import { DownloadIcon, CopyIcon, EyeIcon, PlusIcon, MenuIcon, ChevronDownIcon, ChevronUpIcon, XMarkIcon } from '@/components/Icons';

export function MyComponent() {
  return (
    <button className="flex items-center gap-2">
      <DownloadIcon size={24} />
      Download File
    </button>
  );
}
```

### Generic Icon Component

```tsx
import { Icon } from '@/components/Icons';

export function MyComponent() {
  return (
    <Icon name="download" size={24} className="text-blue-500" />
  );
}
```

## Props

All icon components accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Width and height in pixels |
| `className` | `string` | `''` | Additional CSS classes for styling |
| `...props` | `SVGAttributes` | - | All standard SVG attributes |

## Color Control

Icons use `currentColor` internally, which means they inherit the text color from their parent element or className.

### Via Tailwind Classes

```tsx
<DownloadIcon className="text-blue-500" />
<DownloadIcon className="text-gray-700" />
<DownloadIcon className="text-red-500" />
```

### Via Inline Styles

```tsx
<DownloadIcon style={{ color: '#3b82f6' }} />
```

### Via CSS Color Inheritance

```tsx
<div style={{ color: '#10b981' }}>
  <DownloadIcon />
</div>
```

## Size Variations

Icons are fully scalable. Common sizes:

```tsx
<PlusIcon size={16} />  {/* Small */}
<PlusIcon size={24} />  {/* Default */}
<PlusIcon size={32} />  {/* Large */}
<PlusIcon size={48} />  {/* Extra Large */}
```

## SVG Path Data Reference

### DownloadIcon
- **Paths**: 2 filled paths
- **Color**: Originally #353A40 → now uses currentColor
- **Strokes**: None (filled)

### CopyIcon
- **Paths**: 1 stroked path
- **Stroke Width**: 1.5px
- **Linecap**: round
- **Linejoin**: round

### EyeIcon
- **Paths**: 2 stroked paths (outer eye outline + pupil)
- **Stroke Width**: 1.5px
- **Linecap**: round
- **Linejoin**: round

### PlusIcon
- **Paths**: 1 stroked path (two lines: horizontal and vertical)
- **Stroke Width**: 1.5px
- **Linecap**: round
- **Linejoin**: round

### MenuIcon
- **Paths**: 1 stroked path (three lines)
- **Stroke Width**: 1.5px
- **Linecap**: round
- **Linejoin**: round

### ChevronDownIcon
- **Paths**: 1 stroked path
- **Stroke Width**: 1.5px
- **Linecap**: round
- **Linejoin**: round

### ChevronUpIcon
- **Paths**: 1 stroked path
- **Stroke Width**: 1.5px
- **Linecap**: round
- **Linejoin**: round

### XMarkIcon
- **Paths**: 1 stroked path (two diagonal lines)
- **Stroke Width**: 1.5px
- **Linecap**: round
- **Linejoin**: round

## Implementation Details

### currentColor Usage

All icons use `currentColor` instead of hardcoded colors, which allows them to:
- Inherit text color from parent elements
- Be styled with CSS color utilities
- Change color dynamically without prop drilling
- Work seamlessly with CSS transitions

### TypeScript Support

The component is fully typed with TypeScript:

```tsx
type IconName =
  | 'download'
  | 'copy'
  | 'eye'
  | 'plus'
  | 'menu'
  | 'chevronDown'
  | 'chevronUp'
  | 'xMark';
```

### Stroke Attributes

Some icons use stroked paths with the following attributes:
- `strokeWidth="1.5"` - Standard stroke width for consistency
- `strokeLinecap="round"` - Rounded line endings
- `strokeLinejoin="round"` - Rounded path joints

## Files

- `/src/components/Icons.tsx` - Main icon component library
- `/src/components/IconsExample.tsx` - Usage examples and demonstrations
- `/src/icons/` - Source SVG files directory

## Examples

See `IconsExample.tsx` for comprehensive usage patterns including:
- Individual icon rendering
- Size variations
- Color variations
- Button integration
- Generic Icon component usage
- Form input integration

## Notes

- All icons are optimized for a 24x24 base size
- Icons are fully accessible and don't require additional ARIA attributes
- The component is compatible with dark mode when using Tailwind's dark mode utilities
- Icons maintain aspect ratio at any size
