import { COLORS, GRADIENTS } from './colors.js';
import { SPACING, RADIUS } from './layout.js';
import { Typography } from './typography.js';
import { SHADOWS } from './shadows.js';
import { FontFamily } from './fontFamily.js';
import { STATUS_CONFIG } from './statusConfig.js';
import { BUTTON_SIZES, ICON_BUTTON_SIZES } from './buttons.js';

const THEME = {
    light: {
        colors: COLORS.light,
        gradients: GRADIENTS.light,
        spacing: SPACING,
        radius: RADIUS,
        typography: Typography,
        shadows: SHADOWS.light,
        fontFamily: FontFamily,
        status: STATUS_CONFIG,
    },
    dark: {
        colors: COLORS.dark,
        gradients: GRADIENTS.dark,
        spacing: SPACING,
        radius: RADIUS,
        typography: Typography,
        shadows: SHADOWS.dark,
        fontFamily: FontFamily,
        status: STATUS_CONFIG,
    },
}

export default THEME
