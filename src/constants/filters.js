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