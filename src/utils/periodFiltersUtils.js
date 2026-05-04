import { Label } from "@react-navigation/elements"
import {TODAY, MONTHS_SHORT, currentYear, currentMonth } from "../constants/periodFilters"
import {
    startOfMonth,
    endOfMonth,
    startOfYear,
    endOfYear,
    subMonths,
    subDays,
    startOfDay,
    endOfDay,
    format
} from "date-fns"
import { es } from "date-fns/locale";

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

export const periodToDateRange = (period) => {
    const {preset, month, year} = period

    if(preset === null){
        if(month !== null && year !== null) {
            const date = new Date(year, month, 1)
            return {
                start: startOfMonth(date), // 1st day of the month
                end: endOfMonth(date), 
                label: `${MONTHS_SHORT[month]} ${year}`,
                sublabel: `${MONTHS_SHORT[month]} ${year}`
            }
        }

        if(year !== null) {
            const date = new Date(year, 0, 1)
            return {
                start: startOfYear(date), // 1st day of the month
                end: endOfYear(date), 
                label: `${year}`,
                sublabel: `${year}`
            }
        }
    }

    switch(preset) {
        case "this_month":
            return {
                start: startOfMonth(TODAY), // 1st day of the month
                end: endOfMonth(TODAY), 
                label: "Este mes",
                sublabel: format(TODAY, "MMMM yyyy", { locale: es })
            }
        case "last_month": 
            const last = subMonths(TODAY, 1)
            return {
                start: startOfMonth(last), // 1st day of the month
                end: endOfMonth(last), 
                label: "Anterior mes",
                sublabel: format(last, "MMMM yyyy", { locale: es })
            }
        case "last_7_days":
            return {
                start: startOfDay(subDays(TODAY, 6)),
                end: endOfDay(TODAY),
                label: "Últimos 7 días",
                sublabel:  `${format(subDays(TODAY, 6), "d MMM", { locale: es })} - ${format(TODAY, "d MMM", { locale: es })}`
            }
        case "last_30_days":
            return {
                start: startOfDay(subDays(TODAY, 29)),
                end: endOfDay(TODAY),
                label: "Últimos 30 días",
                sublabel: `${format(subDays(TODAY, 29), "d MMM", { locale: es })} - ${format(TODAY, "d MMM", { locale: es })}`
            }
        default:
            return {
                start: startOfMonth(TODAY), // 1st day of the month
                end: endOfMonth(TODAY), 
                label: "Este mes",
                sublabel: format(TODAY, "MMMM yyyy", { locale: es })
            }
    }
}