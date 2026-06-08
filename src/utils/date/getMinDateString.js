import { getToday } from "./getToday"

export function getMinDateString(yearsAgo = 1) {
    const date = getToday()
    
    date.setFullYear(date.getFullYear() - yearsAgo)

    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")

    return `${year}-${month}-${day}`
}