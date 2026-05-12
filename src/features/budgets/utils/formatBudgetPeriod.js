export function formatBudgetPeriod(type) {
    switch(type) {
        case "WEEKLY":
            return "Semanal"
        case "BIWEEKLY":
            return "Quincenal"
        case "MONTHLY":
            return "Mensual"
        case "YEARLY":
            return "Anual"
        default:
            return type
    }
}