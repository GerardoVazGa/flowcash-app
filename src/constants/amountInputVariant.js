export const createAmountInputVariants = (theme) => ({
    display: {
        currencyVariant: "title",

        input: {
            paddingVertical: theme.spacing.sm,
            paddingHorizontal: theme.spacing.md,
            backgroundColor: theme.colors.surface,
            borderColor: "transparent",
            color: theme.colors.primary,
            ...theme.typography.display,
            textAlign: "center",
            minWidth: 100,    // 👈
            maxWidth: "70%"
        },

        container: {
            justifyContent: "center",
            gap: theme.spacing.xs,
            width: "100%"
        },

        label: {
            textAlign: "center",
        },
    },

    compact: {
        currencyVariant: "title",

        input: {
            paddingVertical: theme.spacing.xs,
            paddingHorizontal: theme.spacing.sm,
            backgroundColor: theme.colors.surface,
            borderColor: "transparent",
            color: theme.colors.primary,
            ...theme.typography.title,
        },

        container: {},

        label: {},
    },
});