import { createContext, useContext } from "react";

export const FiltersBudgetContext = createContext(null)

export const useFiltersBudgetContext = () => {
    const context = useContext(FiltersBudgetContext)

    if(!context) {
        throw new Error('useFiltersBudgetContext must be used within a FiltersBudgetProvider')
    }

    return context
}

export const FiltersBudgetProvider = ({value, children}) => {
    return (
        <FiltersBudgetContext.Provider value={value}>
            {children}
        </FiltersBudgetContext.Provider>
    )
}