export function budgetMetrics(budget) {
    const percent = Math.max(
        Math.round((budget.spent / budget.limit) * 100),
        0
    )

    const remaining = budget.limit - budget.spent

    const isOverLimit = remaining < 0
    
    return { percent, remaining, isOverLimit }
}