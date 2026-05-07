export function budgetStatus(percent) {
    if(percent < 50) return {
        variant: 'safe'
    }
    if(percent < 70) return {
        variant: 'caution'
    }
    if(percent < 90) return {
        variant: 'warning'
    }
    return {
        variant: 'danger'
    }
}