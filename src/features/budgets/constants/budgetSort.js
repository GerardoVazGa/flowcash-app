export const BUDGET_SORT_OPTIONS = [
    {
        label: "Cercano al límite",
        value: "closest_to_limit",
        icon: "speedometer-outline"
    },
    {
        label: "Mayor gasto",
        value: "highest_spent",
        icon: "trending-up-outline"
    },
    {
        label: "Mayor restante",
        value: "highest_remaining",
        icon: "wallet-outline"
    },
    {
        label: "Recientemente actualizado",
        value: "recently_updated",
        icon: "time-outline"
    }
]

export const BUDGET_SORT = {
    CLOSEST_TO_LIMIT: "closest_to_limit",
    HIGHEST_SPENT: "highest_spent",
    HIGHEST_REMAINING: "highest_remaining",
    RECENTLY_UPDATED: "recently_updated",
}

export const BUDGET_SORTERS = {
    [BUDGET_SORT.CLOSEST_TO_LIMIT]: (a, b) => b.percent - a.percent,
    [BUDGET_SORT.HIGHEST_SPENT]: (a, b) => b.spent - a.spent,
    [BUDGET_SORT.HIGHEST_REMAINING]: (a, b) => b.remaining - a.remaining,
    [BUDGET_SORT.RECENTLY_UPDATED]: (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt),
}