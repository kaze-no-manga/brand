import type { Meta, StoryObj } from '@storybook/react';

import { typography } from '../../../lib/tokens/typography.js';

const FontFamilyDemo = ({ family, name }: { family: string[]; name: string }) => (
  <div
    style={{
      marginBottom: '2rem',
      padding: '1rem',
      border: '1px solid var(--color-border)',
      borderRadius: '8px',
      backgroundColor: 'var(--color-surface)',
    }}
  >
    <h4
      style={{
        margin: '0 0 1rem 0',
        fontSize: '1rem',
        fontWeight: 600,
        color: 'var(--color-text-primary)',
      }}
    >
      {name}
    </h4>
    <div
      style={{
        fontFamily: family.join(', '),
        fontSize: '1.5rem',
        marginBottom: '0.5rem',
        color: 'var(--color-text-primary)',
      }}
    >
      The quick brown fox jumps over the lazy dog
    </div>
    <div
      style={{
        fontSize: '0.875rem',
        color: 'var(--color-text-secondary)',
        fontFamily: 'monospace',
      }}
    >
      {family.join(', ')}
    </div>
  </div>
);

const FontSizeDemo = ({ size, name }: { size: [string, { lineHeight: string }]; name: string }) => (
  <div
    style={{
      marginBottom: '1rem',
      padding: '1rem',
      border: '1px solid var(--color-border)',
      borderRadius: '8px',
      backgroundColor: 'var(--color-surface)',
    }}
  >
    <div
      style={{
        fontSize: size[0],
        lineHeight: size[1].lineHeight,
        color: 'var(--color-text-primary)',
      }}
    >
      {name} - The quick brown fox
    </div>
    <div
      style={{
        fontSize: '0.75rem',
        color: 'var(--color-text-secondary)',
        marginTop: '0.5rem',
        fontFamily: 'monospace',
      }}
    >
      {size[0]} / {size[1].lineHeight}
    </div>
  </div>
);

const meta: Meta = {
  title: 'Design Tokens/Typography',
  parameters: {
    docs: {
      description: {
        component: 'Typography system including font families, sizes, weights, and line heights.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const FontFamilies: Story = {
  render: () => (
    <div>
      <FontFamilyDemo family={typography.fontFamily.sans} name="Sans Serif (Body)" />
      <FontFamilyDemo family={typography.fontFamily.heading} name="Heading" />
      <FontFamilyDemo family={typography.fontFamily.mono} name="Monospace (Code)" />
    </div>
  ),
};

export const FontSizes: Story = {
  render: () => (
    <div>
      <FontSizeDemo size={typography.fontSize['5xl']} name="5XL" />
      <FontSizeDemo size={typography.fontSize['4xl']} name="4XL" />
      <FontSizeDemo size={typography.fontSize['3xl']} name="3XL" />
      <FontSizeDemo size={typography.fontSize['2xl']} name="2XL" />
      <FontSizeDemo size={typography.fontSize.xl} name="XL" />
      <FontSizeDemo size={typography.fontSize.lg} name="LG" />
      <FontSizeDemo size={typography.fontSize.base} name="Base" />
      <FontSizeDemo size={typography.fontSize.sm} name="SM" />
      <FontSizeDemo size={typography.fontSize.xs} name="XS" />
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div>
      {Object.entries(typography.fontWeight).map(([name, weight]) => (
        <div
          key={name}
          style={{
            marginBottom: '1rem',
            padding: '1rem',
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
            backgroundColor: 'var(--color-surface)',
          }}
        >
          <div
            style={{
              fontWeight: weight,
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
              color: 'var(--color-text-primary)',
            }}
          >
            {name.charAt(0).toUpperCase() + name.slice(1)} - The quick brown fox
          </div>
          <div
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-text-secondary)',
              fontFamily: 'monospace',
            }}
          >
            font-weight: {weight}
          </div>
        </div>
      ))}
    </div>
  ),
};
