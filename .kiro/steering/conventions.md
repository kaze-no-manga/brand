# Conventions - Brand Package

## File Naming

- **Tokens**: `kebab-case.ts` (e.g., `colors.ts`, `typography.ts`)
- **Exports**: `index.ts` for barrel exports
- **CSS**: `kebab-case.css` (e.g., `variables.css`)
- **Assets**: `kebab-case.svg` (e.g., `logo-full.svg`)

## Token Naming

### Colors
```typescript
// Pattern: {semantic}-{shade}
colors.primary[500]      // ✅ Good
colors.purple[500]       // ❌ Bad (use semantic names)

// Shades: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
// 500 = base color
```

### Typography
```typescript
// Font families
fontFamily.heading       // ✅ Good
fontFamily.sans         // ✅ Good
fontFamily.headingFont  // ❌ Bad (redundant)

// Font sizes
fontSize.xs             // ✅ Good
fontSize['2xl']         // ✅ Good
fontSize.extraSmall     // ❌ Bad (use abbreviations)

// Font weights
fontWeight[400]         // ✅ Good (numeric)
fontWeight.normal       // ✅ Good (semantic)
fontWeight.regular      // ❌ Bad (use 'normal')
```

### Spacing
```typescript
// Pattern: numeric scale (4px base)
spacing[0]   // 0px
spacing[1]   // 4px
spacing[2]   // 8px
spacing[4]   // 16px
spacing[8]   // 32px
// ...

// No custom names
spacing.small  // ❌ Bad
```

### Shadows
```typescript
// Pattern: size-based
shadows.sm
shadows.md
shadows.lg
shadows.xl
shadows['2xl']

// No semantic names
shadows.card  // ❌ Bad
```

### Border Radius
```typescript
// Pattern: size-based
radius.none
radius.sm
radius.md
radius.lg
radius.full

// No semantic names
radius.button  // ❌ Bad
```

## Code Style

### TypeScript
```typescript
// ✅ Good: Const objects with as const
export const colors = {
  primary: {
    50: '#f5f3ff',
    // ...
  }
} as const

// ❌ Bad: Mutable objects
export let colors = { ... }

// ✅ Good: Type exports
export type Colors = typeof colors
export type ColorShade = keyof typeof colors.primary

// ✅ Good: Explicit types for complex structures
export const typography: Typography = {
  fontFamily: { ... },
  fontSize: { ... },
}
```

### Tailwind Preset
```typescript
// ✅ Good: Extend, don't override
export const preset = {
  theme: {
    extend: {
      colors: tokens.colors,
      // ...
    }
  }
}

// ❌ Bad: Override default theme
export const preset = {
  theme: {
    colors: tokens.colors,  // This removes default colors!
  }
}
```

### CSS Variables
```css
/* ✅ Good: Kebab-case with prefix */
:root {
  --color-primary-500: #8b5cf6;
  --spacing-4: 1rem;
}

/* ❌ Bad: No prefix or camelCase */
:root {
  --primary: #8b5cf6;
  --spacingFour: 1rem;
}
```

## Directory Structure

```
src/
├── tokens/
│   ├── colors.ts          # Color palette
│   ├── typography.ts      # Font families, sizes, weights
│   ├── spacing.ts         # Spacing scale
│   ├── shadows.ts         # Shadow definitions
│   ├── radius.ts          # Border radius
│   └── index.ts           # Barrel export
├── tailwind/
│   ├── preset.ts          # Tailwind preset
│   └── index.ts
├── css/
│   └── variables.css      # CSS custom properties
└── index.ts               # Main export
```

## Export Pattern

```typescript
// src/index.ts
export * from './tokens'
export * from './tailwind'

// src/tokens/index.ts
export * from './colors'
export * from './typography'
export * from './spacing'
export * from './shadows'
export * from './radius'
```

## Versioning

Follow **Semantic Versioning**:

- **Major** (1.0.0 → 2.0.0): Breaking changes
  - Remove tokens
  - Rename tokens
  - Change token values significantly
  
- **Minor** (1.0.0 → 1.1.0): New features
  - Add new tokens
  - Add new color shades
  - Add new font sizes
  
- **Patch** (1.0.0 → 1.0.1): Bug fixes
  - Fix typos
  - Adjust color values slightly
  - Documentation updates

## Documentation

### Token Comments
```typescript
// ✅ Good: Document purpose
export const colors = {
  /** Primary brand color (purple/lilac) */
  primary: {
    50: '#f5f3ff',
    // ...
  },
  
  /** Semantic color for success states */
  success: {
    // ...
  }
}

// ❌ Bad: No documentation
export const colors = {
  primary: { ... }
}
```

### README Updates
When adding new tokens:
1. Update README.md with examples
2. Update CHANGELOG.md
3. Bump version in package.json

## Testing

### Manual Testing
1. Import in web project
2. Verify Tailwind classes work
3. Check CSS variables in DevTools
4. Test dark mode (if applicable)

### Type Checking
```bash
npm run type-check
```

## Common Patterns

### Adding a New Color
```typescript
// 1. Add to colors.ts
export const colors = {
  // ...
  accent: {
    50: '#...',
    // ... (all shades)
    900: '#...',
  }
}

// 2. Update Tailwind preset (automatic via spread)
// 3. Update CSS variables (if needed)
// 4. Bump minor version
// 5. Update CHANGELOG.md
```

### Adding a New Font
```typescript
// 1. Add to typography.ts
export const typography = {
  fontFamily: {
    // ...
    display: ['Display Font', 'sans-serif'],
  }
}

// 2. Update Tailwind preset (automatic)
// 3. Document in README
// 4. Bump minor version
```

## Anti-Patterns

❌ **Don't hardcode values in components**
```typescript
// Bad
<div className="text-[#8b5cf6]">

// Good
<div className="text-primary-500">
```

❌ **Don't create one-off tokens**
```typescript
// Bad
export const colors = {
  buttonHoverBackground: '#...',
}

// Good - use semantic tokens
export const colors = {
  primary: { 600: '#...' }  // Use for hover
}
```

❌ **Don't skip shades**
```typescript
// Bad
primary: {
  100: '#...',
  500: '#...',
  900: '#...',
}

// Good - complete scale
primary: {
  50: '#...',
  100: '#...',
  // ... all shades
  900: '#...',
}
```
