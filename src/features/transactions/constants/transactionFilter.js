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
