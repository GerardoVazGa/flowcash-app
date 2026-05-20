import { useEffect, useState } from "react";
import { useFiltersTransactionContext } from "../../../context/FiltersTransactionContext";
import { useDebounce } from "../../../hooks/shared/useDebounce";
import { SearchBar } from "../../ui/SearchBar";

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