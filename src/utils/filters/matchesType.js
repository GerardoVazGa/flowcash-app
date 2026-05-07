export function matchesType(value, selectedType, allValueTypes = "all") {
    
    if(selectedType === allValueTypes) return true;

    return selectedType === value
}