export const matchesPeriod = (budgetPeriod, period) => {
    if(budgetPeriod === "ALL") return true

    return budgetPeriod === period
}