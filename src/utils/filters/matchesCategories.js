export function matchesCategories(search, categories) {

    if(!categories || categories.length === 0) return true
    
    if(!search) return true
    
    return categories.some((category) => category.toLowerCase().includes(search.toLowerCase()))
}