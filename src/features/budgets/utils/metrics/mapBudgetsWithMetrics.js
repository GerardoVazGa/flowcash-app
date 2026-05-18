import { budgetMetrics } from "./budgetMetrics.js";

export function mapBudgetsWithMetrics(budgets) {
    return budgets.map(budget => {
        return {
            ...budget,
            ...budgetMetrics(budget)
        }
    })
}