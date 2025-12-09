# @kaze/brand

> Design system and brand assets for Kaze no Manga

## Overview

This package contains the complete design system for Kaze no Manga, including design tokens, Tailwind CSS configuration, and brand guidelines.

## Features

- 🎨 **Design Tokens**: Colors, typography, spacing, shadows, border-radius
- 🎭 **Tailwind Preset**: Pre-configured Tailwind CSS preset
- 📐 **Brand Guidelines**: Logo usage, color palette, typography rules
- 📦 **Multiple Formats**: JSON, TypeScript, CSS variables

## Installation

```bash
npm install @kaze/brand
```

## Usage

### Tailwind CSS

```javascript
// tailwind.config.js
import { preset } from '@kaze/brand'

export default {
  presets: [preset],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
}
```

### Design Tokens (TypeScript)

```typescript
import { colors, spacing, typography } from '@kaze/brand'

const primaryColor = colors.primary[500]
const baseSpacing = spacing[4]
const headingFont = typography.fontFamily.heading
```

### CSS Variables

```css
@import '@kaze/brand/css';

.my-component {
  color: var(--color-primary-500);
  padding: var(--spacing-4);
  font-family: var(--font-heading);
}
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
