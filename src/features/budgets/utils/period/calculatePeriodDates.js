import { BUDGETS_PERIODS } from "@features/budgets/constants/budgetPeriod";
import { getToday, getTodayString } from "@utils/date/getToday";
import { formatDateString } from "@utils/formatters/formatDateString";
import { get } from "react-native/Libraries/NativeComponent/NativeComponentRegistry";

export function calculatePeriodDates(periodType) {
    const today = getToday()
    const month = today.getMonth()
    const year = today.getFullYear()
    const day = today.getDate()

    switch(periodType) {
        case BUDGETS_PERIODS.WEEKLY: 
            return {
                startDate: getTodayString(),
                endDate: formatDateString(new Date(year, month, day + 6))
            }
        case BUDGETS_PERIODS.BIWEEKLY: 
            return {
                startDate: getTodayString(),
                endDate: formatDateString(new Date(year, month, day + 14))
            }
        case BUDGETS_PERIODS.MONTHLY:
            return {
                startDate: formatDateString(new Date(year, month, 1)),
                endDate: formatDateString(new Date(year, month + 1, 0))
            }
        case BUDGETS_PERIODS.YEARLY:
            return {
                startDate: formatDateString(new Date(year, 0, 1)),
                endDate: formatDateString(new Date(year, 11, 31))
            }
        default:
            return {
                startDate: getTodayString(),
                endDate: getTodayString()
            }
    }

}