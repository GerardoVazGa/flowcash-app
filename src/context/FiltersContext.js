import { createContext, useContext  } from "react";

const FiltersContext = createContext(null);

export const useFilters = () => {
    const context = useContext(FiltersContext)

    if(!context) {
        throw new Error('useFilters must be used within a FiltersProvider')
    }

    return context
};

export const FiltersProvider = ({value,children}) => {
    return (
        <FiltersContext.Provider value={value}>
            {children}
        </FiltersContext.Provider>
    )
}