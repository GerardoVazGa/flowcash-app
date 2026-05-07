import { currentYear } from "../../constants/periodFilters.js"

export const getAvailableYears = (transactions) => {

    const years = transactions.map(transaction => {
        return new Date(transaction.date).getFullYear()
    })

    const uniqueYears = new Set(years)
    uniqueYears.add(currentYear)

    return [...uniqueYears].sort((a, b) => b - a)
}