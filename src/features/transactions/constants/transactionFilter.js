import { getCurrentMonth } from "@utils/date/getCurrentMonth"
import { getCurrentYear } from "@utils/date/getCurrentYear"

export const DEFAULT_TRANSACTIONS_FILTERS = {
    type: "all",
    category: [],
    period: {
        preset: "this_month",
        month: getCurrentMonth(),
        year: getCurrentYear()
    },
    search: ""
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

