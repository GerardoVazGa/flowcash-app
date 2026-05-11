import { useCallback, useState } from "react"

export const useFilters = (defaultFilters) => {
    const [filters, setFilters] = useState(defaultFilters)
    const [draftFilters, setDraftFilters] = useState(defaultFilters)

    const applyFilters = useCallback(() => {
        setFilters(draftFilters)
    }, [draftFilters])

    const cleanFilters = useCallback(() => {
        setDraftFilters(defaultFilters)
    }, [])

    const cancelFilters = useCallback(() => {
        setDraftFilters(filters)
    }, [filters])

    return {
        filters,
        setFilters,
        draftFilters,
        setDraftFilters,
        applyFilters,
        cleanFilters,
        cancelFilters
    }

}