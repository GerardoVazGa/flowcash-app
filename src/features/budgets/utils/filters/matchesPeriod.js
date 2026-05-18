export const matchesPeriod = (budgetPeriod, period) => {
    if(period === "ALL") return true

    return budgetPeriod === period
}