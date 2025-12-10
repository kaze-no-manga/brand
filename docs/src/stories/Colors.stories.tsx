import type { Meta, StoryObj } from '@storybook/react';

import { colors } from '../../../lib/tokens/colors.js';

const ColorSwatch = ({ color, name }: { color: string; name: string }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '1rem',
    }}
  >
    <button
      type="button"
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: color,
        borderRadius: '8px',
        border: '1px solid #e5e5e5',
        cursor: 'pointer',
        padding: 0,
      }}
      onClick={() => navigator.clipboard.writeText(color)}
      title={`Click to copy: ${color}`}
      aria-label={`Copy color ${name} (${color}) to clipboard`}
    />
    <div
      style={{
        marginTop: '0.5rem',
        fontSize: '0.875rem',
        fontWeight: 500,
        color: 'var(--color-text-primary)',
      }}
    >
      {name}
    </div>
    <div
      style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', fontFamily: 'monospace' }}
    >
      {color}
    </div>
  </div>
);

const meta: Meta = {
  title: 'Design Tokens/Colors',
  parameters: {
    docs: {
      description: {
        component: 'Color palette for Kaze no Manga. Click any color to copy its hex value.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.entries(colors.primary).map(([shade, color]) => (
        <ColorSwatch key={shade} color={color} name={`primary-${shade}`} />
      ))}
    </div>
  ),
};

export const Neutral: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.entries(colors.neutral).map(([shade, color]) => (
        <ColorSwatch key={shade} color={color} name={`neutral-${shade}`} />
      ))}
    </div>
  ),
};

export const ThemeAware: Story = {
  render: () => (
    <div>
      <h3
        style={{
          marginBottom: '1rem',
          fontSize: '1.25rem',
          fontWeight: 600,
          color: 'var(--color-text-primary)',
        }}
      >
        Theme-Aware Colors
      </h3>
      <p style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}>
        These colors automatically adapt to light/dark mode via CSS variables.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}
      >
        <div
          style={{
            padding: '1rem',
            backgroundColor: 'var(--color-background)',
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
          }}
        >
          <div
            style={{ color: 'var(--color-text-primary)', fontWeight: 600, marginBottom: '0.5rem' }}
          >
            Background
          </div>
          <div
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: '0.875rem',
              marginBottom: '0.5rem',
            }}
          >
            var(--color-background)
          </div>
          <div
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-text-muted)',
              fontFamily: 'monospace',
            }}
          >
            Light: {colors.background.light} | Dark: {colors.background.dark}
          </div>
        </div>

        <div
          style={{
            padding: '1rem',
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
          }}
        >
          <div
            style={{ color: 'var(--color-text-primary)', fontWeight: 600, marginBottom: '0.5rem' }}
          >
            Surface
          </div>
          <div
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: '0.875rem',
              marginBottom: '0.5rem',
            }}
          >
            var(--color-surface)
          </div>
          <div
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-text-muted)',
              fontFamily: 'monospace',
            }}
          >
            Light: {colors.surface.light} | Dark: {colors.surface.dark}
          </div>
        </div>
      </div>

      <h4
        style={{
          marginBottom: '1rem',
          fontSize: '1rem',
          fontWeight: 600,
          color: 'var(--color-text-primary)',
        }}
      >
        Usage Examples
      </h4>
      <div
        style={{
          backgroundColor: 'var(--color-surface)',
          padding: '1rem',
          border: '1px solid var(--color-border)',
          borderRadius: '8px',
          fontFamily: 'monospace',
          fontSize: '0.875rem',
        }}
      >
        <div style={{ color: 'var(--color-text-secondary)' }}>{/* Tailwind classes */}</div>
        <div style={{ color: 'var(--color-text-primary)' }}>
          &lt;div className="bg-background text-foreground"&gt;
        </div>
        <div style={{ color: 'var(--color-text-primary)' }}>
          &lt;div className="bg-surface border-border"&gt;
        </div>
        <br />
        <div style={{ color: 'var(--color-text-secondary)' }}>{/* CSS variables */}</div>
        <div style={{ color: 'var(--color-text-primary)' }}>
          background: var(--color-background);
        </div>
        <div style={{ color: 'var(--color-text-primary)' }}>color: var(--color-text-primary);</div>
      </div>
    </div>
  ),
};
