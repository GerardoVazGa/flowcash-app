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
import { es } from "date-fns/locale"
import { MONTHS_SHORT } from "@constants/date.js"
import { getToday } from "@utils/date/getToday.js"

export const periodToDateRange = (period) => {
    const {preset, month, year} = period

    if(!preset){
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
                start: startOfMonth(getToday()), // 1st day of the month
                end: endOfMonth(getToday()), 
                label: "Este mes",
                sublabel: format(getToday(), "MMMM yyyy", { locale: es })
            }
        case "last_month": 
            const last = subMonths(getToday(), 1)
            return {
                start: startOfMonth(last), // 1st day of the month
                end: endOfMonth(last), 
                label: "Anterior mes",
                sublabel: format(last, "MMMM yyyy", { locale: es })
            }
        case "last_7_days":
            return {
                start: startOfDay(subDays(getToday(), 6)),
                end: endOfDay(getToday()),
                label: "Últimos 7 días",
                sublabel:  `${format(subDays(getToday(), 6), "d MMM", { locale: es })} - ${format(getToday(), "d MMM", { locale: es })}`
            }
        case "last_30_days":
            return {
                start: startOfDay(subDays(getToday(), 29)),
                end: endOfDay(getToday()),
                label: "Últimos 30 días",
                sublabel: `${format(subDays(getToday(), 29), "d MMM", { locale: es })} - ${format(getToday(), "d MMM", { locale: es })}`
            }
        default:
            return {
                start: startOfMonth(getToday()), // 1st day of the month
                end: endOfMonth(getToday()), 
                label: "Este mes",
                sublabel: format(getToday(), "MMMM yyyy", { locale: es })
            }
    }
}