export function budgetMetrics(budget) {
    const percent = Math.max(
        Math.round((budget.spent / budget.limit) * 100),
        0
    )

    const remaining = budget.limit - budget.spent

    const isOverLimit = remaining < 0

    let state = "HEALTHY"
    if (isOverLimit) state = "EXCEEDED"
    if(percent < 101) state = "LIMIT_REACHED"
    if(percent < 90) state = "AT_RISK"
    if(percent < 70) state = "CRITICAL"
    if(percent < 50) state = "WARNING"

    
    return { percent, remaining, isOverLimit, state }
}