import { SPACING } from "./layout"

export const BUTTON_SIZES = {
    sm: {
        paddingHorizontal: SPACING.sm,
        paddingVertical: SPACING.xs,
        minHeight: 32
    },
    md: {
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        minHeight: 40
    },
    lg: {
        paddingHorizontal: SPACING.lg,
        paddingVertical: SPACING.md,
        minHeight: 48
    },
    xl: {
        paddingHorizontal: SPACING.xl,
        paddingVertical: SPACING.lg,
        minHeight: 56
    }
}

export const ICON_BUTTON_SIZES = {
    xs: { size: 28, iconSize: 14 },
    sm: { size: 32, iconSize: 16 },
    md: { size: 40, iconSize: 20 },
    lg: { size: 44, iconSize: 22 },
    xl: { size: 52, iconSize: 26 },
}