export const FAB_ROUTES = {
    Home: "Home",
    Transactions: "Transactions",
    Budgets: "Budgets" 
}

export const FAB_CONFIG = {
    [FAB_ROUTES.Home]: {
        icon: "add-circle-outline",
        action: "transactions"
    },
    [FAB_ROUTES.Transactions]: {
        icon: "add-circle-outline",
        action: "transactions"
    },
    [FAB_ROUTES.Budgets]: {
        icon: "wallet-outline",
        action: "budgets"
    }
}