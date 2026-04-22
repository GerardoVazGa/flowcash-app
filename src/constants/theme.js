import { COLORS } from './colors.js';
import { SPACING, RADIUS } from './layout.js';
import { Typography } from './typography.js';
import { SHADOWS } from './shadows.js';
import { FontFamily } from './fontFamily.js';

const THEME = {
    light: {
        colors: COLORS.light,
        spacing: SPACING,
        radius: RADIUS,
        typography: Typography,
        shadows: SHADOWS.light,
        fontFamily: FontFamily,
    },
    dark: {
        colors: COLORS.dark,
        spacing: SPACING,
        radius: RADIUS,
        typography: Typography,
        shadows: SHADOWS.dark,
        fontFamily: FontFamily,
    },
}

export default THEME
