import { BUDGET_SORTERS } from "@features/budgets/constants/budgetSort";

export function sortBudgets(budgets, sortBy) {

    const sorter = BUDGET_SORTERS[sortBy]

    if(!sorter) return budgets

    return [...budgets].sort(sorter)
}