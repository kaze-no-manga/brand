import type { Preview } from '@storybook/react-vite';
import '../../lib/css/variables.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#fafafa', // neutral-50
        },
        {
          name: 'dark',
          value: '#0a0a0a', // neutral-950
        },
        {
          name: 'surface-light',
          value: '#ffffff', // white
        },
        {
          name: 'surface-dark',
          value: '#171717', // neutral-900
        },
      ],
    },
  },
};

export default preview;
