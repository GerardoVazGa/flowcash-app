export function matchesCategories(search, selectedCategory) {
    if(selectedCategory.length === 0) return true
    
    return selectedCategory.toLowerCase().includes(search.toLowerCase())
}