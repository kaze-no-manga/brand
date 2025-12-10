import { describe, expect, it } from 'vitest';

import * as mainExports from '../lib/index.js';
import * as tailwindExports from '../lib/tailwind/index.js';
import * as tokensExports from '../lib/tokens/index.js';

describe('Main exports', () => {
  it('exports all token modules', () => {
    expect(mainExports.colors).toBeDefined();
    expect(mainExports.typography).toBeDefined();
    expect(mainExports.spacing).toBeDefined();
    expect(mainExports.shadows).toBeDefined();
    expect(mainExports.radius).toBeDefined();
  });

  it('exports tailwind preset', () => {
    expect(mainExports.preset).toBeDefined();
  });

  it('re-exports tokens correctly', () => {
    expect(mainExports.colors).toBe(tokensExports.colors);
    expect(mainExports.typography).toBe(tokensExports.typography);
    expect(mainExports.spacing).toBe(tokensExports.spacing);
    expect(mainExports.shadows).toBe(tokensExports.shadows);
    expect(mainExports.radius).toBe(tokensExports.radius);
  });

  it('re-exports tailwind correctly', () => {
    expect(mainExports.preset).toBe(tailwindExports.preset);
  });

  it('has consistent export pattern', () => {
    expect(typeof mainExports.colors).toBe('object');
    expect(typeof mainExports.typography).toBe('object');
    expect(typeof mainExports.spacing).toBe('object');
    expect(typeof mainExports.shadows).toBe('object');
    expect(typeof mainExports.radius).toBe('object');
    expect(typeof mainExports.preset).toBe('object');
  });

  it('has no undefined exports', () => {
    const exports = Object.values(mainExports);
    exports.forEach((exportValue) => {
      expect(exportValue).toBeDefined();
      expect(exportValue).not.toBeNull();
    });
  });
});
