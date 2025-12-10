import { describe, expect, it } from 'vitest';

import { type Radius, radius } from '../../lib/tokens/radius.js';

describe('Radius', () => {
  it('exports radius object', () => {
    expect(radius).toBeDefined();
    expect(typeof radius).toBe('object');
  });

  it('exports Radius type', () => {
    const testRadius: Radius = radius;
    expect(testRadius).toBe(radius);
  });

  describe('Radius sizes', () => {
    const radiusSizes = ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'] as const;

    radiusSizes.forEach((size) => {
      it(`has ${size} radius`, () => {
        expect(radius[size]).toBeDefined();
        expect(typeof radius[size]).toBe('string');
      });
    });

    it('has correct values', () => {
      expect(radius.none).toBe('0');
      expect(radius.sm).toBe('0.125rem');
      expect(radius.md).toBe('0.375rem');
      expect(radius.lg).toBe('0.5rem');
      expect(radius.xl).toBe('0.75rem');
      expect(radius['2xl']).toBe('1rem');
      expect(radius.full).toBe('9999px');
    });
  });

  describe('Radius progression', () => {
    it('increases logically', () => {
      const numericValues = [
        parseFloat(radius.sm.replace('rem', '')),
        parseFloat(radius.md.replace('rem', '')),
        parseFloat(radius.lg.replace('rem', '')),
        parseFloat(radius.xl.replace('rem', '')),
        parseFloat(radius['2xl'].replace('rem', '')),
      ];

      for (let i = 1; i < numericValues.length; i++) {
        expect(numericValues[i]).toBeGreaterThan(numericValues[i - 1]);
      }
    });

    it('has special values', () => {
      expect(radius.none).toBe('0');
      expect(radius.full).toBe('9999px');
    });
  });

  describe('CSS validity', () => {
    it('uses valid CSS units', () => {
      expect(radius.sm).toMatch(/rem$/);
      expect(radius.md).toMatch(/rem$/);
      expect(radius.lg).toMatch(/rem$/);
      expect(radius.xl).toMatch(/rem$/);
      expect(radius['2xl']).toMatch(/rem$/);
      expect(radius.full).toMatch(/px$/);
    });
  });
});
