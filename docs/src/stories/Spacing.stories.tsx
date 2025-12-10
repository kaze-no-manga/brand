import type { Meta, StoryObj } from '@storybook/react';

import { spacing } from '../../../lib/tokens/spacing.js';

const SpacingDemo = ({ size, name }: { size: string; name: string }) => (
  <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
    <div
      style={{
        minWidth: '60px',
        fontSize: '0.875rem',
        fontWeight: 600,
        color: 'var(--color-text-primary)',
      }}
    >
      {name}
    </div>
    <div
      style={{
        width: size,
        height: '24px',
        backgroundColor: 'var(--color-primary-500)',
        borderRadius: '4px',
        position: 'relative',
      }}
    />
    <div
      style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', fontFamily: 'monospace' }}
    >
      {size}
    </div>
  </div>
);

const SpacingGrid = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(8, 1fr)',
      gap: '1rem',
      padding: '2rem',
      backgroundColor: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: '8px',
    }}
  >
    {Object.entries(spacing)
      .slice(1, 9)
      .map(([key, value]) => (
        <div key={key} style={{ textAlign: 'center' }}>
          <div
            style={{
              width: value,
              height: value,
              backgroundColor: 'var(--color-primary-500)',
              margin: '0 auto 0.5rem',
              borderRadius: '4px',
            }}
          />
          <div
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-text-secondary)',
              fontFamily: 'monospace',
            }}
          >
            {key}
          </div>
          <div
            style={{
              fontSize: '0.625rem',
              color: 'var(--color-text-muted)',
              fontFamily: 'monospace',
            }}
          >
            {value}
          </div>
        </div>
      ))}
  </div>
);

const meta: Meta = {
  title: 'Design Tokens/Spacing',
  parameters: {
    docs: {
      description: {
        component:
          'Spacing system based on 4px grid. All values are multiples of 4px for consistent layouts.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const SpacingScale: Story = {
  render: () => (
    <div>
      <h3 style={{ marginBottom: '1rem', color: 'var(--color-text-primary)' }}>Spacing Scale</h3>
      <div
        style={{
          backgroundColor: 'var(--color-surface)',
          padding: '1rem',
          border: '1px solid var(--color-border)',
          borderRadius: '8px',
        }}
      >
        {Object.entries(spacing).map(([key, value]) => (
          <SpacingDemo key={key} size={value} name={`spacing-${key}`} />
        ))}
      </div>
    </div>
  ),
};

export const Grid4px: Story = {
  render: () => (
    <div>
      <h3 style={{ marginBottom: '1rem', color: 'var(--color-text-primary)' }}>4px Grid System</h3>
      <p style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}>
        All spacing values are based on a 4px grid for consistent layouts across components.
      </p>
      <SpacingGrid />
    </div>
  ),
};
