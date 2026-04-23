import { COLORS } from './colors.js';
import { SPACING, RADIUS } from './layout.js';
import { Typography } from './typography.js';
import { SHADOWS } from './shadows.js';
import { FontFamily } from './fontFamily.js';
import { BUTTON_SIZES, ICON_BUTTON_SIZES } from './buttons.js';

const THEME = {
    light: {
        colors: COLORS.light,
        spacing: SPACING,
        radius: RADIUS,
        typography: Typography,
        shadows: SHADOWS.light,
        fontFamily: FontFamily,
        buttonSizes: BUTTON_SIZES,
        iconButtonSizes: ICON_BUTTON_SIZES
    },
    dark: {
        colors: COLORS.dark,
        spacing: SPACING,
        radius: RADIUS,
        typography: Typography,
        shadows: SHADOWS.dark,
        fontFamily: FontFamily,
        buttonSizes: BUTTON_SIZES,
        iconButtonSizes: ICON_BUTTON_SIZES
    },
}

export default THEME
