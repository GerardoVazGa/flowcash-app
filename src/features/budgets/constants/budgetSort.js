export const BUDGET_SORT_OPTIONS = [
    {
        label: "Cercano al limite",
        value: "closest_to_limit"
    },
    {
        label: "Mayor gasto",
        value: "highest_spent"
    },
    {
        label: "Mayor restante",
        value: "highest_remaining"
    },
    {
        label: "alfabetico",
        value: "alphabetical"
    }
]

export const BUDGET_SORT = {
    CLOSEST_TO_LIMIT: "closest_to_limit",
    HIGHEST_SPENT: "highest_spent",
    HIGHEST_REMAINING: "highest_remaining",
    ALPHABETICAL: "alphabetical"
}

export const BUDGET_SORTERS = {
    [BUDGET_SORT.CLOSEST_TO_LIMIT]: (a, b) => b.percent - a.remaining,
    [BUDGET_SORT.HIGHEST_SPENT]: (a, b) => b.spent - a.spent,
    [BUDGET_SORT.HIGHEST_REMAINING]: (a, b) => b.remaining - a.remaining,
    [BUDGET_SORT.ALPHABETICAL]: (a, b) => a.label.localeCompare(b.label)
}