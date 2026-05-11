import { useCallback } from "react"
import { DEFAULT_FILTERS } from "../../constants/filters"
import { useFilters } from "../filters/useFilters"
import { currentMonth, currentYear } from "../../constants/periodFilters"

export const useFiltersTransaction = () => {
    const filtersState = useFilters(DEFAULT_FILTERS)

    const {filters, setDraftFilters } = filtersState

    const openFilters = useCallback(() => {
        setDraftFilters(filters)
    }, [filters])

    const applyType = useCallback((value) => {
        setDraftFilters((prev) => ({
            ...prev,
            type: value
        }))
    }, [])

    const toggleCategory = useCallback((category) => {
        setDraftFilters((prev) => {
            const categoryExists = prev.category.includes(category)

            return {
                ...prev,
                category: categoryExists
                    ? prev.category.filter((categ) => categ !== category)
                    : [...prev.category, category]
            }
        })
    }, [])

    const applyPeriodPreset = useCallback((preset) => {
        setDraftFilters(prev => ({
            ...prev,
            period: {
                preset,
                month: null,
                year: currentYear
            }
        }))
    }, [])

    const enableCustomPeriod = useCallback(() => {
        setDraftFilters(prev => ({
            ...prev,
            period: {
                preset: null,
                month: currentMonth,
                year: currentYear
            }
        }))
    }, [])

    return {
        ...filtersState,
        openFilters,
        applyType,
        toggleCategory,
        applyPeriodPreset,
        enableCustomPeriod,
    }

}