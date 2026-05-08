export function getVariantStyle(variant, colors) {
    switch(variant) {
        case "income":
            return {
                backgroundColor: colors.incomeContainer,
                color: colors.incomeStrong,
                iconBackgroundColor: colors.income,
                iconColor: colors.onPrimary,
                borderColor: colors.outlineOnColor
            }
        case "expense":
            return {
                backgroundColor: colors.expensesContainer,
                color: colors.expensesStrong,
                iconBackgroundColor: colors.expenses,
                iconColor: colors.onPrimary,
                borderColor: colors.outlineOnColor
            }
        default:
            return {
                backgroundColor: colors.surfaceHigh,
                color: colors.secondary,
                iconColor: colors.primary,
                borderColor: colors.outlineOnColor
            }
    }
}