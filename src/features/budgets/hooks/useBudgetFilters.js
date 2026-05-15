import { useFilters } from "@hooks/filters/useFilters"
import { DEFAULT_BUDGET_FILTERS } from "../constants/budgetFilter"
import { useCallback } from "react"

export const useBudgetFilters = () => {
    const filtersState= useFilters(DEFAULT_BUDGET_FILTERS)

    const { filters, setDraftFilters, setFilters } = filtersState

    const openFilters = useCallback(() => {
        setDraftFilters(filters)
    }, [filters])

    const updatePeriod =  useCallback((period) => {
        setFilters(prev => (
            {
                ...prev,
                period
            }
        ))
    }, [])

    const updateStatus = useCallback((status) => {
        setDraftFilters(prev => ({
            ...prev,
            status
        }))
    }, [])

    const toggleCategory = useCallback((category) => {
        setDraftFilters(prev => {
            const categoryExists = prev.category.includes(category)

            return {
                ...prev,
                category: categoryExists 
                    ? prev.category.filter(categ => categ !== category)
                    : [...prev.category, category]
            }
        })
    }, [])

    const updateSortBy = useCallback((sortBy) => {
        setDraftFilters(prev => ({
            ...prev,
            sortBy
        }))
    }, [])

    return {
        ...filtersState,
        openFilters,
        updatePeriod,
        updateStatus,
        toggleCategory,
        updateSortBy
    }
}