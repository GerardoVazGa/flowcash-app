export function matchesSearch(transactions, search, keys) {
    if(!search?.trim()) return true

    const normilizedSearch = search.toLowerCase()

    return keys.some(key => (
        String(transactions[key] ?? "").toLowerCase().includes(normilizedSearch)
    ))

}