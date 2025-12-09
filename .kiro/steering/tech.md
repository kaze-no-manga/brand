# Technology Stack - Brand Package

## Core Technologies

- **Language**: TypeScript 5.x (strict mode)
- **CSS Framework**: Tailwind CSS 4.x
- **Build Tool**: tsup (TypeScript bundler)
- **Package Manager**: npm
- **Package Type**: NPM private package (@kaze/brand)

## Dependencies

### Production
- `tailwindcss` ^4.0.0 - CSS framework
- `postcss` ^8.0.0 - CSS processing

### Development
- `typescript` ^5.0.0 - Type checking
- `tsup` ^8.0.0 - Build tool
- `@types/node` - Node.js types

## Build Configuration

### tsup.config.ts
```typescript
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  sourcemap: true,
})
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "declaration": true,
    "declarationMap": true,
    "outDir": "dist"
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

## Package Structure

```
brand/
├── src/
│   ├── tokens/          # Design tokens (TS)
│   ├── tailwind/        # Tailwind preset
│   ├── css/             # CSS variables
│   └── index.ts         # Main export
├── assets/              # Static assets (not bundled)
├── dist/                # Build output
└── package.json
```

## Export Strategy

### package.json exports
```json
{
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./css": "./src/css/variables.css",
    "./preset": {
      "import": "./dist/tailwind/preset.mjs",
      "require": "./dist/tailwind/preset.js"
    }
  }
}
```

## Build Process

1. **Compile TypeScript** → `dist/` (CJS + ESM)
2. **Generate types** → `dist/*.d.ts`
3. **Copy CSS** → Keep in `src/css/` (not bundled)
4. **Copy assets** → Keep in `assets/` (not bundled)

## Publishing

- **Registry**: GitHub Packages (private)
- **Scope**: `@kaze`
- **Versioning**: Semantic versioning
- **CI/CD**: GitHub Actions on tag push

## Token Formats

### TypeScript (Primary)
```typescript
export const colors = {
  primary: {
    50: '#f5f3ff',
    // ...
  }
}
```

### CSS Variables (Generated)
```css
:root {
  --color-primary-50: #f5f3ff;
  /* ... */
}
```

### JSON (Optional)
```json
{
  "colors": {
    "primary": {
      "50": "#f5f3ff"
    }
  }
}
```

## Performance

- **Tree-shakeable**: ESM exports allow tree-shaking
- **Type-safe**: Full TypeScript support
- **Small bundle**: Only tokens, no runtime code
- **CSS-in-JS free**: Pure CSS variables + Tailwind

## Browser Support

- Modern browsers (ES2022+)
- No polyfills needed
- CSS custom properties required
