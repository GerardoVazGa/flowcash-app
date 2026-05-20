import { MONTHS_SHORT, currentYear, currentMonth } from "@constants/periodFilters.js"

export const getAvailableMonths = (selectedYear) => {
    return MONTHS_SHORT.map((month, index) => {
        return {
            id: index,
            name: month,
            disable: selectedYear === currentYear && index > currentMonth
        }
    })
}