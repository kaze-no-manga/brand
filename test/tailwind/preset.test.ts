import { describe, expect, it } from 'vitest';

import { preset } from '../../lib/preset.js';
import { colors } from '../../lib/tokens/colors.js';
import { radius } from '../../lib/tokens/radius.js';
import { shadows } from '../../lib/tokens/shadows.js';
import { spacing } from '../../lib/tokens/spacing.js';
import { typography } from '../../lib/tokens/typography.js';

describe('Tailwind Preset', () => {
  it('exports preset object', () => {
    expect(preset).toBeDefined();
    expect(typeof preset).toBe('object');
  });

  it('has theme structure', () => {
    expect(preset.theme).toBeDefined();
    expect(preset.theme.extend).toBeDefined();
  });

  describe('Theme extensions', () => {
    it('extends colors', () => {
      expect(preset.theme.extend.colors).toBe(colors);
    });

    it('extends font families', () => {
      expect(preset.theme.extend.fontFamily).toBe(typography.fontFamily);
    });

    it('extends font sizes', () => {
      expect(preset.theme.extend.fontSize).toBe(typography.fontSize);
    });

    it('extends font weights', () => {
      expect(preset.theme.extend.fontWeight).toBe(typography.fontWeight);
    });

    it('extends line heights', () => {
      expect(preset.theme.extend.lineHeight).toBe(typography.lineHeight);
    });

    it('extends spacing', () => {
      expect(preset.theme.extend.spacing).toBe(spacing);
    });

    it('extends box shadows', () => {
      expect(preset.theme.extend.boxShadow).toBe(shadows);
    });

    it('extends border radius', () => {
      expect(preset.theme.extend.borderRadius).toBe(radius);
    });
  });

  describe('Preset structure validation', () => {
    it('has all required theme extensions', () => {
      const requiredKeys = [
        'colors',
        'fontFamily',
        'fontSize',
        'fontWeight',
        'lineHeight',
        'spacing',
        'boxShadow',
        'borderRadius',
      ];

      requiredKeys.forEach((key) => {
        expect(preset.theme.extend[key]).toBeDefined();
      });
    });

    it('references original token objects', () => {
      // Ensure we're not creating copies but referencing originals
      expect(preset.theme.extend.colors.primary).toBe(colors.primary);
      expect(preset.theme.extend.spacing[4]).toBe(spacing[4]);
    });
  });

  describe('Tailwind compatibility', () => {
    it('uses extend pattern (not override)', () => {
      // Should extend, not replace default theme
      expect(preset.theme.extend).toBeDefined();
      expect(preset.theme.colors).toBeUndefined(); // Should not override
    });

    it('has valid Tailwind config structure', () => {
      expect(typeof preset.theme).toBe('object');
      expect(typeof preset.theme.extend).toBe('object');
    });
  });
});
