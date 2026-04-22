import THEME from "../constants/theme.js"

const currentTheme = THEME.light

export function getVariantStyle(variant){
    switch(variant) {
        case "income":
            return {
                backgroundColor: currentTheme.colors.incomeContainer,
                color: currentTheme.colors.incomeStrong,
                iconBackgroundColor: currentTheme.colors.income,
                iconColor: currentTheme.colors.onPrimary,
                outline: currentTheme.colors.incomeSoft
            }
        case "expense":
            return {
                backgroundColor: currentTheme.colors.expensesContainer,
                color: currentTheme.colors.expensesStrong,
                iconBackgroundColor: currentTheme.colors.expenses,
                iconColor: currentTheme.colors.onPrimary,
                outline: currentTheme.colors.expensesSoft
            }
        default:
            return {
                backgroundColor: currentTheme.colors.surface,
                color: currentTheme.colors.text,
                iconColor: currentTheme.colors.text,
                outline: currentTheme.colors.outline
            }
    }
}