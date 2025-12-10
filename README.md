# @kaze-no-manga/brand

[![npm version](https://img.shields.io/npm/v/@kaze-no-manga/brand.svg?style=flat)](https://www.npmjs.com/package/@kaze-no-manga/brand)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Coverage Badge](https://img.shields.io/badge/coverage-100%25-brightgreen?style=flat)

> Design system and brand assets for Kaze no Manga

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Tailwind CSS](#tailwind-css)
  - [CSS Variables](#css-variables)
  - [Design Tokens](#design-tokens)
  - [Component Examples](#component-examples)
- [Available Imports](#available-imports)
- [Design Tokens](#design-tokens-1)
- [Package Structure](#package-structure)
- [Development](#development)

## Overview

This package contains the complete design system for Kaze no Manga, including design tokens, Tailwind CSS configuration, and brand guidelines.

## Features

- 🎨 **Design Tokens**: Colors, typography, spacing, shadows, border-radius
- 🎭 **Tailwind Preset**: Pre-configured Tailwind CSS preset
- 📐 **Brand Guidelines**: Logo usage, color palette, typography rules
- 📦 **Multiple Formats**: TypeScript, CSS variables

## Installation

```bash
npm install @kaze-no-manga/brand
```

## Usage

### Tailwind CSS

```typescript
// tailwind.config.ts
import { preset } from '@kaze-no-manga/brand/preset'

export default {
  presets: [preset],
  content: ['./app/**/*.{ts,tsx}'],
}
```

### CSS Variables

```typescript
// app/root.tsx
import '@kaze-no-manga/brand/css'
```

### Design Tokens

```typescript
import { colors, typography, spacing } from '@kaze-no-manga/brand'

const primaryColor = colors.primary[500]
const headingFont = typography.fontFamily.heading
const baseSpacing = spacing[4]
```

### Component Examples

```tsx
// Using Tailwind classes (from preset)
<button className="bg-primary-500 text-white px-4 py-2 rounded-md">
  Click me
</button>

// Dark mode support
<div className="bg-background text-foreground">
  Adapts to light/dark mode automatically
</div>

// Manual dark mode toggle
<html className="dark-mode">
  <div className="bg-surface text-foreground border border-border">
    Dark mode content
  </div>
</html>

// Using design tokens programmatically
import { colors, spacing } from '@kaze-no-manga/brand'

const styles = {
  backgroundColor: colors.primary[500],
  padding: spacing[4],
}

// Using CSS variables
<div style={{ 
  color: 'var(--color-text-primary)',
  backgroundColor: 'var(--color-background)'
}}>
  Theme-aware styling
</div>
```

## Available Imports

```typescript
// All design tokens
import { colors, typography, spacing, shadows, radius } from '@kaze-no-manga/brand'

// Tailwind preset only
import { preset } from '@kaze-no-manga/brand/preset'

// CSS variables
import '@kaze-no-manga/brand/css'
```

## Favicons

Generate favicons from the source logo:

```bash
npm run favicons
```

This creates all necessary favicon formats in `assets/favicons/` including:
- Standard favicons (16x16, 32x32, etc.)
- Apple touch icons
- Android chrome icons
- Windows tiles
- Web app manifest
- HTML snippet for easy integration

## Design Tokens

### Colors

**Primary Palette** (Purple/Lilac theme):
```typescript
colors.primary[50]   // #f5f3ff - Lightest backgrounds
colors.primary[500]  // #8b5cf6 - Main brand color  
colors.primary[900]  // #4c1d95 - Darkest text
```

**Theme-aware Colors**:
```typescript
colors.background.light  // #fafafa
colors.background.dark   // #0a0a0a
colors.text.primary.light  // #171717
colors.text.primary.dark   // #fafafa
```

**Semantic Colors**: `success`, `warning`, `error`, `info` with full 50-900 scales

### Typography

**Font Families**:
```typescript
typography.fontFamily.sans     // ['Inter', 'system-ui', 'sans-serif']
typography.fontFamily.heading  // ['Poppins', 'Inter', 'sans-serif']  
typography.fontFamily.mono     // ['Fira Code', 'monospace']
```

**Font Scale** (1.25 modular scale):
```typescript
typography.fontSize.xs    // ['0.75rem', { lineHeight: '1rem' }]
typography.fontSize.base  // ['1rem', { lineHeight: '1.5rem' }]
typography.fontSize['5xl'] // ['3rem', { lineHeight: '1' }]
```

### Spacing

**4px Grid System**:
```typescript
spacing[1]   // 0.25rem (4px)
spacing[4]   // 1rem (16px)  
spacing[8]   // 2rem (32px)
spacing[32]  // 8rem (128px)
```

### Dark Mode

**Automatic** (prefers-color-scheme):
```css
@media (prefers-color-scheme: dark) {
  /* Automatically applied */
}
```

**Manual Toggle**:
```html
<html className="dark-mode">
  <!-- Dark mode active -->
</html>
```

**Tailwind Classes**:
```tsx
<div className="bg-background text-foreground">
  <!-- Adapts automatically -->
</div>
```

## Brand Guidelines

### Logo

- **Primary Logo** (`logo.svg`): Full color with gradient background
- **Icon** (`logo-icon.svg`): Circular icon for small spaces
- **Light Backgrounds** (`logo-white.svg`): For use on light backgrounds
- **Monochrome** (`logo-mono.svg`): Single color, adapts to text color
- **Minimum Size**: 32px height
- **Clear Space**: 16px on all sides

### Logo Concept

The logo evokes "Kaze no Manga" (Wind of Manga) through:
- **Wind lines**: Flowing horizontal lines reminiscent of manga speed lines
- **Typography**: Clean, modern typeface with hierarchical sizing
- **Colors**: Primary purple palette with subtle gradients
- **Minimalism**: Simple geometric forms for versatility

### Color Usage

- **Primary**: CTAs, links, active states
- **Secondary**: Accents, highlights
- **Neutral**: Text, borders, backgrounds
- **Semantic**: Success/error messages, warnings

### Typography

- **Headings**: Bold, clear hierarchy
- **Body**: Readable, comfortable line-height
- **Code**: Monospace for technical content

## Package Structure

```
brand/
├── lib/                    # Built TypeScript files
│   ├── tokens/
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   ├── shadows.ts
│   │   └── radius.ts
│   ├── tailwind/
│   │   └── preset.ts
│   ├── css/
│   │   └── variables.css
│   └── index.ts
├── assets/
│   ├── logo/               # Logo variants
│   ├── square/             # Source logo files
│   └── favicons/           # Generated favicons
├── scripts/
│   └── generate-favicons.ts
├── test/                   # Test suite (124 tests)
└── README.md
```

## Documentation

Interactive documentation is available via Storybook:

**🌐 Live Documentation**: [kaze-no-manga.github.io/brand](https://kaze-no-manga.github.io/brand)

### Local Development

```bash
# Start Storybook locally
npm run docs:dev

# Build Storybook for production
npm run docs:build
```

The documentation includes:
- Interactive color palette with copy-to-clipboard
- Typography scale with live examples
- Spacing grid visualization
- Dark mode toggle
- Code snippets for all design tokens

## Versioning

This package follows [Semantic Versioning](https://semver.org/):

- **Major**: Breaking changes to tokens or API
- **Minor**: New tokens or features
- **Patch**: Bug fixes or documentation updates

## License

MIT License - see [LICENSE](LICENSE) for details.

---

**Part of the [Kaze no Manga](https://github.com/kaze-no-manga) project**
