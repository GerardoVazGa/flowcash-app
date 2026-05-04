import {TODAY, MONTHS_SHORT, currentYear, currentMonth } from "../constants/periodFilters"

export const getAvailableYears = (transactions) => {

    const years = transactions.map(transaction => {
        return new Date(transaction.date).getFullYear()
    })

    const uniqueYears = new Set(years)
    uniqueYears.add(currentYear)

    return [...uniqueYears].sort((a, b) => b - a)
}

export const getAvailableMonths = (selectedYear) => {
    return MONTHS_SHORT.map((month, index) => {
        return {
            id: index,
            name: month,
            disable: selectedYear === currentYear && index > currentMonth
        }
    })
}