import { currentMonth, currentYear } from "./periodFilters";

export const DEFAULT_FILTERS = {
    type: "all",
    category: [],
    period: {
        preset: "this_month",
        month: currentMonth,
        year: currentYear
    }
}

export const TYPE_OPTIONS = [
    {
        label: "Todos",
        value: "all",
        icon: "swap-horizontal-outline"
    },
    {
        label: "Ingresos",
        value: "income",
        icon: "arrow-up-outline"
    },
    {
        label: "Gastos",
        value: "expense",
        icon: "arrow-down-outline"
    }
]