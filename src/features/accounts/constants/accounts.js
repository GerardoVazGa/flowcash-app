export const ACCOUNT_TYPE = {
    CASH: "cash",
    DEBIT: "debit",
    CREDIT: "credit",
    SAVING: "saving"
}

export const ACCOUNT_TYPE_LABELS = {
    [ACCOUNT_TYPE.CASH]: "Efectivo",
    [ACCOUNT_TYPE.DEBIT]: "Debito",
    [ACCOUNT_TYPE.CREDIT]: "Credito",
    [ACCOUNT_TYPE.SAVING]: "Ahorro"
}

export const ACCOUNT_TYPE_ICONS = {
    [ACCOUNT_TYPE.CASH]: "cash-outline",
    [ACCOUNT_TYPE.DEBIT]: "card-outline",
    [ACCOUNT_TYPE.CREDIT]: "card-outline",
    [ACCOUNT_TYPE.SAVING]: "wallet-outline"
}