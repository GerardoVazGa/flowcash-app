export function budgetStateVariant(state) {
    switch(state) {
        case "HEALTHY":
            return { variant: 'safe' }
        case "WARNING":
            return { variant: 'caution' }
        case "CRITICAL":
            return { variant: 'warning' }
        case "EXCEEDED":
        case "LIMIT_REACHED":
        case "AT_RISK":
            return { variant: 'danger' }
        default:
            return { variant: 'safe' }
    }
}