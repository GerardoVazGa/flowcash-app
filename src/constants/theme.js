// Centralizado: Importa todas las constantes para acceso global
export { COLORS } from './colors.js';
export { SPACING, RADIUS } from './layout.js';
export { Typography } from './typography.js';
export { SHADOWS } from './shadows.js';
export { FontFamily } from './fontFamily.js';

// Alternativa: Crear un objeto theme unificado
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

const currentTheme = THEME.light;

export default currentTheme;
