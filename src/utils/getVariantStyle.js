import THEME from "../constants/theme.js"

const currentTheme = THEME.light

export function getVariantStyle(variant){
    switch(variant) {
        case "income":
            return {
                backgroundColor: currentTheme.colors.incomeContainer,
                color: currentTheme.colors.income,
                outline: currentTheme.colors.incomeSoft
            }
        case "expenses":
            return {
                backgroundColor: currentTheme.colors.expensesContainer,
                color: currentTheme.colors.expenses,
                outline: currentTheme.colors.expensesSoft
            }
        default:
            return {
                backgroundColor: currentTheme.colors.surface,
                color: currentTheme.colors.text,
                outline: currentTheme.colors.outline
            }
    }
}