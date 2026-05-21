import { getCurrentYear } from "@utils/date/getCurrentYear.js"

export const getAvailableYears = (transactions) => {

    const years = transactions.map(transaction => {
        return new Date(transaction.date).getFullYear()
    })

    const uniqueYears = new Set(years)
    uniqueYears.add(getCurrentYear())

    return [...uniqueYears].sort((a, b) => b - a)
}