import { matchesCategories } from "@utils/filters/matchesCategories"
import { matchesPeriod } from "./matchesPeriod"
import { matchesStatus } from "./matchesStatus"

export function filterBudgets(budgets, filters) {
    const {
        period,
        status,
        category: categories,
    } = filters
    
    const filteredBudgets = budgets.filter(budget => {
        if(!matchesPeriod(budget.period.type, period)){
            return false
        }

        if(!matchesCategories(budget.category, categories)) {
            return false
        }

        if(!matchesStatus(budget.status, status)) {
            return false
        }


        return true
    })

    return filteredBudgets
}