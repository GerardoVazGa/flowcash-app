import { createContext, useContext } from "react";

export const FiltersBudgetContext = createContext(null)

export const useFiltersBudgetContext = () => {
    const context = useContext(FiltersBudgetContext)

    if(!context) {
        throw new Error('useFiltersBudget must be used within a FiltersBudgetProvider')
    }

    return context
}

export const FiltersBudgetProvider = ({values, children}) => {
    return (
        <FiltersBudgetContext.Provider value={values}>
            {children}
        </FiltersBudgetContext.Provider>
    )
}