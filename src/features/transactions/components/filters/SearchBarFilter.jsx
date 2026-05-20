import { useEffect, useState } from "react";
import { useFiltersTransactionContext } from "../../context/FiltersTransactionContext.js";
import { useDebounce } from "@hooks/shared/useDebounce.js";
import { SearchBar } from "@components/ui/SearchBar.jsx";

export function SearchBarFilter () {
    const { updateSearch } = useFiltersTransactionContext()
    const [text, setText] = useState("")

    const debouncedSearch = useDebounce(text, 300)

    useEffect(() => {
        updateSearch(debouncedSearch)
    }, [debouncedSearch, updateSearch])

    return (
        <SearchBar 
            value={text}
            onChange={setText}
        />
    )
}