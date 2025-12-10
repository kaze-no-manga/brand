import { describe, expect, it } from 'vitest';

import { type Shadows, shadows } from '../../lib/tokens/shadows.js';

describe('Shadows', () => {
  it('exports shadows object', () => {
    expect(shadows).toBeDefined();
    expect(typeof shadows).toBe('object');
  });

  it('exports Shadows type', () => {
    const testShadows: Shadows = shadows;
    expect(testShadows).toBe(shadows);
  });

  describe('Shadow sizes', () => {
    const shadowSizes = ['sm', 'md', 'lg', 'xl', '2xl', 'none'] as const;

    shadowSizes.forEach((size) => {
      it(`has ${size} shadow`, () => {
        expect(shadows[size]).toBeDefined();
        expect(typeof shadows[size]).toBe('string');
      });
    });

    it('has valid CSS shadow syntax', () => {
      // Basic validation for CSS box-shadow syntax
      expect(shadows.sm).toMatch(/^\d+/);
      expect(shadows.md).toMatch(/^\d+/);
      expect(shadows.lg).toMatch(/^\d+/);
      expect(shadows.xl).toMatch(/^\d+/);
      expect(shadows['2xl']).toMatch(/^\d+/);
    });

    it('has none value', () => {
      expect(shadows.none).toBe('none');
    });
  });

  describe('Shadow progression', () => {
    it('has correct small shadow', () => {
      expect(shadows.sm).toBe('0 1px 2px 0 rgb(0 0 0 / 0.05)');
    });

    it('has correct medium shadow', () => {
      expect(shadows.md).toBe('0 4px 6px -1px rgb(0 0 0 / 0.1)');
    });

    it('has correct large shadow', () => {
      expect(shadows.lg).toBe('0 10px 15px -3px rgb(0 0 0 / 0.1)');
    });

    it('has correct xl shadow', () => {
      expect(shadows.xl).toBe('0 20px 25px -5px rgb(0 0 0 / 0.1)');
    });

    it('has correct 2xl shadow', () => {
      expect(shadows['2xl']).toBe('0 25px 50px -12px rgb(0 0 0 / 0.25)');
    });
  });

  describe('Opacity values', () => {
    it('uses consistent opacity for most shadows', () => {
      expect(shadows.sm).toContain('0.05');
      expect(shadows.md).toContain('0.1');
      expect(shadows.lg).toContain('0.1');
      expect(shadows.xl).toContain('0.1');
    });

    it('uses higher opacity for largest shadow', () => {
      expect(shadows['2xl']).toContain('0.25');
    });
  });
});
