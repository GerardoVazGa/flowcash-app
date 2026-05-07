import { periodToDateRange } from "../period/periodToDateRange.js";
import { isDateInRange } from "../filters/isDateInRange.js";
import { matchesCategories } from "../filters/matchesCategories.js";
import { matchesType } from "../filters/matchesType.js";

export function filterTransactions(transactions, filters) {
    const { type, category, period } = filters
    const { start, end } = periodToDateRange(period)

    const filteredTransactions = transactions.filter((transaction) => {
        const transactionDate = new Date(transaction.date)

        if(!isDateInRange(transactionDate, start, end)) {
            return false
        }

        if(!matchesCategories(transaction.category, category)) {
            return false
        }

        if(!matchesType(transaction.type, type)){
            return false
        }

        return true
    })
}