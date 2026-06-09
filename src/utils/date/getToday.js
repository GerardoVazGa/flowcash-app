import { formatDateString } from "@utils/formatters/formatDateString"

export function getToday() {
    return new Date()
}

export function getTodayString() {
    const today = getToday()

    return formatDateString(today)
}