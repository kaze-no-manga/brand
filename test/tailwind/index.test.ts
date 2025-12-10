import { describe, expect, it } from 'vitest';

import * as tailwindExports from '../../lib/tailwind/index.js';

describe('Tailwind barrel export', () => {
  it('exports preset', () => {
    expect(tailwindExports.preset).toBeDefined();
  });

  it('preset is object', () => {
    expect(typeof tailwindExports.preset).toBe('object');
  });

  it('has no undefined exports', () => {
    const exports = Object.values(tailwindExports);
    exports.forEach((exportValue) => {
      expect(exportValue).toBeDefined();
      expect(exportValue).not.toBeNull();
    });
  });
});
