import { useContext, createContext } from "react";

const FiltersTransactionContext = createContext(null)

export const useFiltersTransaction = () => {
    const context = useContext(FiltersTransactionContext)

    if(!context) {
        throw new Error('useFiltersTrasaction must be used within a FiltersTransactionProvider')
    }

    return context
}

export const FiltersTrasactionProvider = ({value, children}) => {
    return (
        <FiltersTransactionContext.Provider value={value}>
            {children}
        </FiltersTransactionContext.Provider>
    )
}