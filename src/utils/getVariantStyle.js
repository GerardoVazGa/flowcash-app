export function getVariantStyle(variant, colors) {
    switch(variant) {
        case "income":
            return {
                backgroundColor: colors.incomeContainer,
                color: colors.incomeStrong,
                iconBackgroundColor: colors.income,
                iconColor: colors.onPrimary,
                borderColor: colors.incomeSoft
            }
        case "expense":
            return {
                backgroundColor: colors.expensesContainer,
                color: colors.expensesStrong,
                iconBackgroundColor: colors.expenses,
                iconColor: colors.onPrimary,
                borderColor: colors.expensesSoft
            }
        default:
            return {
                backgroundColor: colors.surface,
                color: colors.text,
                iconColor: colors.text,
                borderColor: colors.outline
            }
    }
}