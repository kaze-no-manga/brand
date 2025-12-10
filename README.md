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

// Using design tokens programmatically
import { colors, spacing } from '@kaze-no-manga/brand'

const styles = {
  backgroundColor: colors.primary[500],
  padding: spacing[4],
}

// Using CSS variables
<div style={{ color: 'var(--color-primary-500)' }}>
  Custom styled
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

## Design Tokens

### Colors

Primary palette based on **purple/lilac** theme:

- `primary`: Main brand color (purple/lilac shades)
- `secondary`: Complementary color
- `neutral`: Grays for text and backgrounds
- `success`, `warning`, `error`, `info`: Semantic colors

### Typography

- `fontFamily`: Heading, body, mono
- `fontSize`: Scale from xs to 5xl
- `fontWeight`: 300 to 900
- `lineHeight`: Tight to loose

### Spacing

- Scale: 0, 1, 2, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128
- Based on 4px grid system

### Shadows

- `sm`, `md`, `lg`, `xl`, `2xl`
- Elevation system for depth

### Border Radius

- `none`, `sm`, `md`, `lg`, `xl`, `2xl`, `full`

## Brand Guidelines

### Logo

- **Primary Logo**: Full color on light backgrounds
- **Secondary Logo**: White on dark backgrounds
- **Icon**: Standalone icon for small spaces
- **Minimum Size**: 32px height
- **Clear Space**: 16px on all sides

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
├── src/
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
│   ├── logo/
│   │   ├── logo-full.svg
│   │   ├── logo-icon.svg
│   │   └── logo-white.svg
│   └── guidelines/
│       └── brand-guidelines.pdf
├── package.json
└── README.md
```

## Development

```bash
# Install dependencies
npm install

# Build package
npm run build

# Publish (private)
npm publish
```

## Versioning

This package follows [Semantic Versioning](https://semver.org/):

- **Major**: Breaking changes to tokens or API
- **Minor**: New tokens or features
- **Patch**: Bug fixes or documentation updates

## License

MIT License - see [LICENSE](LICENSE) for details.

---

**Part of the [Kaze no Manga](https://github.com/kaze-no-manga) project**
