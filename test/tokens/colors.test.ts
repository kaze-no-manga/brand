import { describe, expect, it } from 'vitest';

import { type Colors, colors } from '../../lib/tokens/colors.js';

describe('Colors', () => {
  it('exports colors object', () => {
    expect(colors).toBeDefined();
    expect(typeof colors).toBe('object');
  });

  it('exports Colors type', () => {
    // Type test - this will fail at compile time if type is missing
    const testColors: Colors = colors;
    expect(testColors).toBe(colors);
  });

  describe('Primary colors', () => {
    it('has complete shade scale', () => {
      const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
      shades.forEach((shade) => {
        expect(colors.primary[shade]).toBeDefined();
        expect(typeof colors.primary[shade]).toBe('string');
      });
    });

    it('uses valid hex format', () => {
      const hexRegex = /^#[0-9a-f]{6}$/i;
      Object.values(colors.primary).forEach((color) => {
        expect(color).toMatch(hexRegex);
      });
    });

    it('has proper contrast progression', () => {
      // 50 should be lightest, 900 darkest
      expect(colors.primary[50]).toBe('#f5f3ff');
      expect(colors.primary[900]).toBe('#4c1d95');
    });
  });

  describe('Neutral colors', () => {
    it('has complete shade scale', () => {
      const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
      shades.forEach((shade) => {
        expect(colors.neutral[shade]).toBeDefined();
      });
    });

    it('progresses from light to dark', () => {
      expect(colors.neutral[50]).toBe('#fafafa');
      expect(colors.neutral[900]).toBe('#171717');
    });
  });

  describe('Semantic colors', () => {
    const semanticColors = ['success', 'warning', 'error', 'info'] as const;

    semanticColors.forEach((semantic) => {
      it(`has ${semantic} colors`, () => {
        expect(colors[semantic]).toBeDefined();
        expect(colors[semantic][50]).toBeDefined();
        expect(colors[semantic][500]).toBeDefined();
        expect(colors[semantic][900]).toBeDefined();
      });

      it(`${semantic} colors are valid hex`, () => {
        const hexRegex = /^#[0-9a-f]{6}$/i;
        expect(colors[semantic][500]).toMatch(hexRegex);
      });
    });
  });

  describe('Accessibility', () => {
    it('primary-500 is suitable for white text', () => {
      // Should be dark enough (not white/light colors)
      const lightColors = ['#ffffff', '#f0f0f0', '#e0e0e0'];
      expect(lightColors).not.toContain(colors.primary[500]);
    });

    it('neutral-800 is suitable for light backgrounds', () => {
      expect(colors.neutral[800]).toBe('#262626');
    });
  });
});
