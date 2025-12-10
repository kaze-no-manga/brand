import { describe, expect, it } from 'vitest';

import { type Typography, typography } from '../../lib/tokens/typography.js';

describe('Typography', () => {
  it('exports typography object', () => {
    expect(typography).toBeDefined();
    expect(typeof typography).toBe('object');
  });

  it('exports Typography type', () => {
    const testTypography: Typography = typography;
    expect(testTypography).toBe(typography);
  });

  describe('Font families', () => {
    it('has all required font families', () => {
      expect(typography.fontFamily.sans).toBeDefined();
      expect(typography.fontFamily.heading).toBeDefined();
      expect(typography.fontFamily.mono).toBeDefined();
    });

    it('sans font has fallbacks', () => {
      expect(typography.fontFamily.sans).toContain('Inter');
      expect(typography.fontFamily.sans).toContain('system-ui');
      expect(typography.fontFamily.sans).toContain('sans-serif');
    });

    it('heading font has fallbacks', () => {
      expect(typography.fontFamily.heading).toContain('Poppins');
      expect(typography.fontFamily.heading).toContain('Inter');
    });

    it('mono font has fallbacks', () => {
      expect(typography.fontFamily.mono).toContain('Fira Code');
      expect(typography.fontFamily.mono).toContain('monospace');
    });
  });

  describe('Font sizes', () => {
    const sizes = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'] as const;

    sizes.forEach((size) => {
      it(`has ${size} font size with line height`, () => {
        expect(typography.fontSize[size]).toBeDefined();
        expect(Array.isArray(typography.fontSize[size])).toBe(true);
        expect(typography.fontSize[size][0]).toBeDefined(); // font size
        expect(typography.fontSize[size][1]).toBeDefined(); // line height object
        expect(typography.fontSize[size][1].lineHeight).toBeDefined();
      });
    });

    it('follows modular scale', () => {
      expect(typography.fontSize.xs[0]).toBe('0.75rem');
      expect(typography.fontSize.base[0]).toBe('1rem');
      expect(typography.fontSize['5xl'][0]).toBe('3rem');
    });

    it('has proper line heights', () => {
      expect(typography.fontSize.base[1].lineHeight).toBe('1.5rem');
      expect(typography.fontSize.lg[1].lineHeight).toBe('1.75rem');
    });
  });

  describe('Font weights', () => {
    const weights = ['light', 'normal', 'medium', 'semibold', 'bold', 'extrabold'] as const;

    weights.forEach((weight) => {
      it(`has ${weight} font weight`, () => {
        expect(typography.fontWeight[weight]).toBeDefined();
        expect(typeof typography.fontWeight[weight]).toBe('number');
      });
    });

    it('has correct weight values', () => {
      expect(typography.fontWeight.light).toBe(300);
      expect(typography.fontWeight.normal).toBe(400);
      expect(typography.fontWeight.medium).toBe(500);
      expect(typography.fontWeight.semibold).toBe(600);
      expect(typography.fontWeight.bold).toBe(700);
      expect(typography.fontWeight.extrabold).toBe(800);
    });
  });

  describe('Line heights', () => {
    const lineHeights = ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'] as const;

    lineHeights.forEach((lh) => {
      it(`has ${lh} line height`, () => {
        expect(typography.lineHeight[lh]).toBeDefined();
        expect(typeof typography.lineHeight[lh]).toBe('number');
      });
    });

    it('has correct line height values', () => {
      expect(typography.lineHeight.none).toBe(1);
      expect(typography.lineHeight.tight).toBe(1.25);
      expect(typography.lineHeight.normal).toBe(1.5);
      expect(typography.lineHeight.loose).toBe(2);
    });
  });
});
