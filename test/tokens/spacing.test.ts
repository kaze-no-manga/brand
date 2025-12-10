import { describe, expect, it } from 'vitest';

import { type Spacing, spacing } from '../../lib/tokens/spacing.js';

describe('Spacing', () => {
  it('exports spacing object', () => {
    expect(spacing).toBeDefined();
    expect(typeof spacing).toBe('object');
  });

  it('exports Spacing type', () => {
    const testSpacing: Spacing = spacing;
    expect(testSpacing).toBe(spacing);
  });

  describe('4px grid system', () => {
    const spacingValues = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32] as const;

    spacingValues.forEach((value) => {
      it(`has spacing-${value}`, () => {
        expect(spacing[value]).toBeDefined();
        expect(typeof spacing[value]).toBe('string');
      });
    });

    it('follows 4px base unit', () => {
      expect(spacing[0]).toBe('0');
      expect(spacing[1]).toBe('0.25rem'); // 4px
      expect(spacing[2]).toBe('0.5rem'); // 8px
      expect(spacing[4]).toBe('1rem'); // 16px
      expect(spacing[8]).toBe('2rem'); // 32px
    });

    it('has consistent rem values', () => {
      expect(spacing[3]).toBe('0.75rem'); // 12px
      expect(spacing[5]).toBe('1.25rem'); // 20px
      expect(spacing[6]).toBe('1.5rem'); // 24px
      expect(spacing[10]).toBe('2.5rem'); // 40px
      expect(spacing[12]).toBe('3rem'); // 48px
    });

    it('has large spacing values', () => {
      expect(spacing[16]).toBe('4rem'); // 64px
      expect(spacing[20]).toBe('5rem'); // 80px
      expect(spacing[24]).toBe('6rem'); // 96px
      expect(spacing[32]).toBe('8rem'); // 128px
    });
  });

  describe('Scale progression', () => {
    it('increases logically', () => {
      const values = Object.keys(spacing)
        .map(Number)
        .sort((a, b) => a - b);

      for (let i = 1; i < values.length; i++) {
        const current = parseFloat(spacing[values[i]].replace('rem', ''));
        const previous =
          values[i - 1] === 0 ? 0 : parseFloat(spacing[values[i - 1]].replace('rem', ''));
        expect(current).toBeGreaterThan(previous);
      }
    });
  });
});
