# Dependencies - Brand Package

## Package Information

- **Name**: `@kaze/brand`
- **Type**: NPM private package
- **Registry**: GitHub Packages
- **Location**: `../brand/` (relative to org root)

## Upstream Dependencies

This package has **no dependencies** on other Kaze packages.

### External Dependencies

**Production:**
- `tailwindcss` ^4.0.0 - Required for Tailwind preset
- `postcss` ^8.0.0 - Required for CSS processing

**Development:**
- `typescript` ^5.0.0
- `tsup` ^8.0.0
- `@types/node`

## Downstream Consumers

This package is consumed by:

### 1. `web` (React Router v7 app)

**Usage:**
```typescript
// tailwind.config.ts
import { preset } from '@kaze/brand'

export default {
  presets: [preset],
  content: ['./app/**/*.{ts,tsx}'],
}
```

```typescript
// app/root.tsx
import '@kaze/brand/css'
```

**What they use:**
- Tailwind preset (colors, typography, spacing)
- CSS variables (for custom styles)
- Design tokens (for programmatic access)

### 2. `mobile` (Flutter app)

**Usage:**
```dart
// Not directly consumed (Flutter has its own theming)
// But design tokens are manually ported to Flutter theme
```

**What they need:**
- Color values (hex codes)
- Typography scale
- Spacing scale
- Border radius values

**Sync Strategy:**
- Manual sync when brand package is updated
- Consider generating Flutter theme from tokens (future)

### 3. `.github` (Documentation)

**Usage:**
- Logo files for README
- Brand guidelines for contributors

## Version Compatibility

### Breaking Changes

When making breaking changes (major version bump):

1. **Notify consumers** via GitHub issue
2. **Create migration guide** in CHANGELOG
3. **Update consumer repos** before publishing
4. **Test in all consumers** before release

### Non-Breaking Changes

Minor and patch versions can be updated independently:

```bash
# In web repo
npm update @kaze/brand
```

## Development Workflow

### Local Development

When developing brand package locally and testing in consumers:

```bash
# In brand repo
npm run build
npm link

# In web repo
npm link @kaze/brand

# Make changes in brand repo
npm run build  # Rebuild after changes

# In web repo - changes are reflected automatically
```

### Publishing Workflow

```bash
# In brand repo
npm version minor  # or major/patch
npm run build
npm publish

# In consumer repos
npm update @kaze/brand
```

## Cross-Repo Coordination

### When to Update Consumers

**Immediately:**
- Major version (breaking changes)
- New required tokens

**At convenience:**
- Minor version (new optional tokens)
- Patch version (bug fixes)

### Communication

Use GitHub issues to coordinate updates:

```markdown
Title: [brand] New color tokens added (v1.2.0)

New tokens:
- colors.accent (full scale)
- colors.highlight (full scale)

Action required:
- [ ] Update web repo
- [ ] Update mobile repo (manual sync)
- [ ] Update documentation

Breaking changes: None
```

## Testing Strategy

### Before Publishing

Test in all consumers:

1. **web**: Run dev server, check UI
2. **mobile**: Verify theme consistency
3. **docs**: Check logo rendering

### Automated Testing (Future)

- Visual regression tests
- Contrast ratio validation
- Token schema validation

## File Locations

```
kaze-no-manga/
├── brand/              # This package
│   ├── src/
│   ├── assets/
│   └── package.json
├── web/                # Consumer
│   ├── tailwind.config.ts  # Imports preset
│   └── package.json        # Depends on @kaze/brand
└── mobile/             # Consumer (manual sync)
    └── lib/theme/      # Flutter theme (synced manually)
```

## Common Issues

### Issue: Tailwind classes not working in web

**Cause**: Brand package not built or not linked properly

**Solution:**
```bash
cd brand/
npm run build
cd ../web/
npm install  # or npm link @kaze/brand
```

### Issue: CSS variables not available

**Cause**: CSS file not imported

**Solution:**
```typescript
// app/root.tsx
import '@kaze/brand/css'
```

### Issue: TypeScript errors in web

**Cause**: Brand package types not generated

**Solution:**
```bash
cd brand/
npm run build  # Generates .d.ts files
```

## Future Enhancements

- [ ] Automated Flutter theme generation
- [ ] Visual regression testing
- [ ] Token validation in CI
- [ ] Automated changelog generation
- [ ] Dependency graph visualization
