import { BUDGET_STATUS } from "../constants/budgetStatus"

export function budgetMetrics(budget) {
    const percent = Math.max(
        Math.round((budget.spent / budget.limit) * 100),
        0
    )

    const remaining = budget.limit - budget.spent

    const isOverLimit = remaining < 0

    let status = BUDGET_STATUS.HEALTHY
    if (isOverLimit || percent >= 100) status = BUDGET_STATUS.EXCEEDED
    else if(percent >= 90) status = BUDGET_STATUS.AT_RISK
    else if(percent >= 70) status = BUDGET_STATUS.CRITICAL
    else if(percent >= 50) status = BUDGET_STATUS.WARNING

    
    return { percent, remaining, isOverLimit, status }
}