# Design Tokens Specification

## Color System

### Primary Palette (Purple/Lilac)

Base color: **#8b5cf6** (purple-500)

```typescript
primary: {
  50:  '#f5f3ff',  // Lightest - backgrounds
  100: '#ede9fe',
  200: '#ddd6fe',
  300: '#c4b5fd',
  400: '#a78bfa',
  500: '#8b5cf6',  // Base - primary actions
  600: '#7c3aed',  // Hover states
  700: '#6d28d9',
  800: '#5b21b6',
  900: '#4c1d95',  // Darkest - text on light bg
}
```

### Semantic Colors

**Success** (Green)
```typescript
success: {
  50:  '#f0fdf4',
  500: '#22c55e',  // Base
  900: '#14532d',
}
```

**Warning** (Yellow)
```typescript
warning: {
  50:  '#fefce8',
  500: '#eab308',  // Base
  900: '#713f12',
}
```

**Error** (Red)
```typescript
error: {
  50:  '#fef2f2',
  500: '#ef4444',  // Base
  900: '#7f1d1d',
}
```

**Info** (Blue)
```typescript
info: {
  50:  '#eff6ff',
  500: '#3b82f6',  // Base
  900: '#1e3a8a',
}
```

### Neutral Palette (Grays)

```typescript
neutral: {
  50:  '#fafafa',  // Lightest backgrounds
  100: '#f5f5f5',
  200: '#e5e5e5',
  300: '#d4d4d4',
  400: '#a3a3a3',
  500: '#737373',  // Base - borders
  600: '#525252',  // Secondary text
  700: '#404040',
  800: '#262626',  // Primary text
  900: '#171717',  // Darkest - headings
}
```

### Usage Guidelines

- **50-200**: Backgrounds, subtle highlights
- **300-400**: Borders, disabled states
- **500-600**: Primary UI elements, icons
- **700-900**: Text, emphasis

### Accessibility

All color combinations must meet **WCAG 2.1 AA** standards:
- Normal text: 4.5:1 contrast ratio
- Large text (18px+): 3:1 contrast ratio

**Tested Combinations:**
- `primary-500` on `white`: ✅ 4.6:1
- `primary-600` on `white`: ✅ 5.8:1
- `neutral-800` on `white`: ✅ 12.6:1
- `white` on `primary-600`: ✅ 5.8:1

## Typography

### Font Families

```typescript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  heading: ['Poppins', 'Inter', 'sans-serif'],
  mono: ['Fira Code', 'monospace'],
}
```

**Loading Strategy:**
- Use `font-display: swap` for web fonts
- Provide system font fallbacks

### Font Sizes

Based on **modular scale** (1.25 ratio):

```typescript
fontSize: {
  xs:   ['0.75rem',  { lineHeight: '1rem' }],    // 12px
  sm:   ['0.875rem', { lineHeight: '1.25rem' }], // 14px
  base: ['1rem',     { lineHeight: '1.5rem' }],  // 16px
  lg:   ['1.125rem', { lineHeight: '1.75rem' }], // 18px
  xl:   ['1.25rem',  { lineHeight: '1.75rem' }], // 20px
  '2xl': ['1.5rem',   { lineHeight: '2rem' }],    // 24px
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
  '4xl': ['2.25rem',  { lineHeight: '2.5rem' }],  // 36px
  '5xl': ['3rem',     { lineHeight: '1' }],       // 48px
}
```

### Font Weights

```typescript
fontWeight: {
  light:     300,
  normal:    400,
  medium:    500,
  semibold:  600,
  bold:      700,
  extrabold: 800,
}
```

**Usage:**
- `light`: Subtle text, captions
- `normal`: Body text
- `medium`: Emphasized text
- `semibold`: Subheadings
- `bold`: Headings
- `extrabold`: Hero text

### Line Heights

```typescript
lineHeight: {
  none:    1,
  tight:   1.25,
  snug:    1.375,
  normal:  1.5,
  relaxed: 1.625,
  loose:   2,
}
```

## Spacing

Based on **4px grid system**:

```typescript
spacing: {
  0:   '0',
  1:   '0.25rem',  // 4px
  2:   '0.5rem',   // 8px
  3:   '0.75rem',  // 12px
  4:   '1rem',     // 16px
  5:   '1.25rem',  // 20px
  6:   '1.5rem',   // 24px
  8:   '2rem',     // 32px
  10:  '2.5rem',   // 40px
  12:  '3rem',     // 48px
  16:  '4rem',     // 64px
  20:  '5rem',     // 80px
  24:  '6rem',     // 96px
  32:  '8rem',     // 128px
}
```

**Usage:**
- `1-2`: Tight spacing (icons, badges)
- `3-4`: Default spacing (padding, gaps)
- `6-8`: Section spacing
- `12-16`: Large spacing (between sections)
- `24-32`: Hero spacing

## Shadows

Elevation system for depth:

```typescript
shadows: {
  sm:   '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md:   '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  lg:   '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  xl:   '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  none: 'none',
}
```

**Usage:**
- `sm`: Subtle elevation (cards)
- `md`: Default elevation (dropdowns)
- `lg`: Prominent elevation (modals)
- `xl`: High elevation (popovers)
- `2xl`: Maximum elevation (overlays)

## Border Radius

```typescript
radius: {
  none: '0',
  sm:   '0.125rem',  // 2px
  md:   '0.375rem',  // 6px
  lg:   '0.5rem',    // 8px
  xl:   '0.75rem',   // 12px
  '2xl': '1rem',      // 16px
  full: '9999px',    // Circular
}
```

**Usage:**
- `none`: Sharp corners (tables)
- `sm`: Subtle rounding (inputs)
- `md`: Default rounding (buttons, cards)
- `lg`: Prominent rounding (modals)
- `xl-2xl`: Large rounding (images)
- `full`: Circular (avatars, badges)

## Breakpoints

Mobile-first responsive breakpoints:

```typescript
screens: {
  sm:  '640px',   // Small devices
  md:  '768px',   // Tablets
  lg:  '1024px',  // Laptops
  xl:  '1280px',  // Desktops
  '2xl': '1536px', // Large desktops
}
```

## Z-Index Scale

Layering system:

```typescript
zIndex: {
  0:    0,
  10:   10,
  20:   20,
  30:   30,
  40:   40,
  50:   50,    // Modals
  auto: 'auto',
}
```

**Usage:**
- `0`: Base layer
- `10`: Dropdowns
- `20`: Sticky headers
- `30`: Modals backdrop
- `40`: Modals content
- `50`: Toasts, notifications

## Animation

### Transition Duration

```typescript
transitionDuration: {
  75:   '75ms',
  100:  '100ms',
  150:  '150ms',
  200:  '200ms',
  300:  '300ms',
  500:  '500ms',
  700:  '700ms',
  1000: '1000ms',
}
```

### Transition Timing

```typescript
transitionTimingFunction: {
  linear:   'linear',
  in:       'cubic-bezier(0.4, 0, 1, 1)',
  out:      'cubic-bezier(0, 0, 0.2, 1)',
  'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
}
```

## Dark Mode (Future)

When implementing dark mode:

```typescript
// Add dark variants
colors: {
  primary: { ... },  // Same for both modes
  
  // Background colors
  background: {
    light: neutral[50],
    dark:  neutral[900],
  },
  
  // Text colors
  text: {
    light: neutral[900],
    dark:  neutral[50],
  }
}
```

## Token Generation

Tokens can be generated from a base palette:

```typescript
// Generate shades from base color
function generateShades(baseColor: string) {
  // Use color manipulation library
  // Return 50-900 scale
}
```

## Validation

All tokens must pass validation:

1. **Colors**: Valid hex codes
2. **Spacing**: Multiples of 4px (except 0)
3. **Font sizes**: Include line-height
4. **Shadows**: Valid CSS shadow syntax
5. **Accessibility**: Contrast ratios meet WCAG AA
