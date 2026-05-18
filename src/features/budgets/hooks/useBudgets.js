import { useMemo } from "react";
import { mapBudgetsWithMetrics } from "../utils/metrics/mapBudgetsWithMetrics.js";
import { useRawBudgets } from "./useRawBudgets.js";
import { filterBudgets } from "../utils/filters/filterBudgets.js";
import { sortBudgets } from "../utils/sorting/sortBudgets.js";
export function useBudgets(filters) {
    
    const { rawBudgets } = useRawBudgets()

    const { sortBy } = filters

    const budgetsWithMetrics = useMemo(() => {
        return mapBudgetsWithMetrics(rawBudgets)
    }, [rawBudgets])

    const filteredBudgets = useMemo(() => {
        return filterBudgets(budgetsWithMetrics, filters)
    }, [budgetsWithMetrics, filters])

    const sortedBudgets = useMemo(() => {
        return sortBudgets(filteredBudgets, sortBy)

    }, [filteredBudgets, sortBy])

    return {
        budgets: sortedBudgets
    }
    
}

