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

export const BUDGETS_PERIODS_ICONS = {
    [BUDGETS_PERIODS.WEEKLY]: "calendar-outline",
    [BUDGETS_PERIODS.BIWEEKLY]: "git-branch-outline",
    [BUDGETS_PERIODS.MONTHLY]: "calendar-number-outline",
    [BUDGETS_PERIODS.YEARLY]: "infinite-outline",
}

export const BUDGETS_PERIODS_OPTIONS = Object.entries(BUDGETS_PERIODS_LABELS).map(([value, label]) => ({
    value, 
    label,
    icon: BUDGETS_PERIODS_ICONS[value]
}))