export const BUDGETS_PERIODS = {
    WEEKLY: "WEEKLY",
    BIWEEKLY: "BIWEEKLY",
    MONTHLY: "MONTHLY",
    YEARLY: "YEARLY"
}

export const BUDGETS_PERIODS_LABELS = {
    [BUDGETS_PERIODS.WEEKLY]: "Semanal",
    [BUDGETS_PERIODS.BIWEEKLY]: "Quincenal",
    [BUDGETS_PERIODS.MONTHLY]: "Mensual",
    [BUDGETS_PERIODS.YEARLY]: "Anual"
}

export const BUDGETS_PERIODS_OPTIONS = Object.entries(BUDGETS_PERIODS_LABELS).map(([value, label]) => ({ value, label }))