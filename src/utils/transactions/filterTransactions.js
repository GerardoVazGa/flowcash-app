import { periodToDateRange } from "../period/periodToDateRange.js";
import { isDateInRange } from "../filters/isDateInRange.js";
import { matchesCategories } from "../filters/matchesCategories.js";
import { matchesType } from "../filters/matchesType.js";
import { matchesSearch } from "../filters/matchesSearch.js";

export function filterTransactions(transactions, filters) {
    const { type, category: categories, period } = filters
    const { start, end } = periodToDateRange(period)
    
    const filteredTransactions = transactions.filter((transaction) => {
        const transactionDate = new Date(transaction.date)

        if(!isDateInRange(transactionDate, start, end)) {
            return false
        }

        if(!matchesCategories(transaction.category, categories)) {
            return false
        }

        if(!matchesType(transaction.type, type)){
            return false
        }

        if(!matchesSearch(transaction, filters.search, ["label", "category", "amount", "account"])) {
            return false
        }

        return true
    })
    return filteredTransactions
}