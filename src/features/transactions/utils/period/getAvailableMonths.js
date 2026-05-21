import { MONTHS_SHORT } from "@constants/date.js"
import { getCurrentMonth } from "@utils/date/getCurrentMonth.js"
import { getCurrentYear } from "@utils/date/getCurrentYear.js"

export const getAvailableMonths = (selectedYear) => {
    return MONTHS_SHORT.map((month, index) => {
        return {
            id: index,
            name: month,
            disable: selectedYear === getCurrentYear() && index > getCurrentMonth()
        }
    })
}