export function budgetMetrics(budget) {
    const percent = Math.max(
        Math.round((budget.spent / budget.limit) * 100),
        0
    )

    const remaining = budget.limit - budget.spent

    const isOverLimit = remaining < 0

    let status = "HEALTHY"
    if (isOverLimit) status = "EXCEEDED"
    if(percent < 90) status = "AT_RISK"
    if(percent < 70) status = "CRITICAL"
    if(percent < 50) status = "WARNING"

    
    return { percent, remaining, isOverLimit, status }
}