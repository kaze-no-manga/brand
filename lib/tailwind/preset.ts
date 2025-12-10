import { colors } from '../tokens/colors.js';
import { radius } from '../tokens/radius.js';
import { shadows } from '../tokens/shadows.js';
import { spacing } from '../tokens/spacing.js';
import { typography } from '../tokens/typography.js';

export const preset = {
  theme: {
    extend: {
      colors,
      fontFamily: typography.fontFamily,
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      lineHeight: typography.lineHeight,
      spacing,
      boxShadow: shadows,
      borderRadius: radius,
    },
  },
};
