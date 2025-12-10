import { describe, expect, it } from 'vitest';

import * as tokensExports from '../../lib/tokens/index.js';

describe('Tokens barrel export', () => {
  it('exports all token types', () => {
    expect(tokensExports.colors).toBeDefined();
    expect(tokensExports.typography).toBeDefined();
    expect(tokensExports.spacing).toBeDefined();
    expect(tokensExports.shadows).toBeDefined();
    expect(tokensExports.radius).toBeDefined();
  });

  it('exports are objects', () => {
    expect(typeof tokensExports.colors).toBe('object');
    expect(typeof tokensExports.typography).toBe('object');
    expect(typeof tokensExports.spacing).toBe('object');
    expect(typeof tokensExports.shadows).toBe('object');
    expect(typeof tokensExports.radius).toBe('object');
  });

  it('has no undefined exports', () => {
    const exports = Object.values(tokensExports);
    exports.forEach((exportValue) => {
      expect(exportValue).toBeDefined();
      expect(exportValue).not.toBeNull();
    });
  });
});
