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
    <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>{name}</div>
    <div style={{ fontSize: '0.75rem', color: '#737373', fontFamily: 'monospace' }}>{color}</div>
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
