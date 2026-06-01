
export const CATEGORIES = {
    trabajo: "Trabajo",
    alimentacion: "Alimentación",
    transporte: "Transporte",
    entretenimiento: "Entretenimiento",
    servicios: "Servicios",
    salud: "Salud",
    ventas: "Ventas",
    transferencia: "Transferencia",
}

export const CATEGORY_TYPE = {
    INCOME: "income",
    EXPENSE: "expense",
    TRANSFER: "transfer",
}

export const CATEGORY_METADATA = {
    [CATEGORIES.trabajo]: {
        label: "Trabajo",
        type: CATEGORY_TYPE.INCOME,
    },
    [CATEGORIES.alimentacion]: {    
        label: "Alimentación",
        type: CATEGORY_TYPE.EXPENSE,
    },
    [CATEGORIES.transporte]: {
        label: "Transporte",
        type: CATEGORY_TYPE.EXPENSE,
    },
    [CATEGORIES.entretenimiento]: {
        label: "Entretenimiento",
        type: CATEGORY_TYPE.EXPENSE,
    },
    [CATEGORIES.servicios]: {    
        label: "Servicios",
        type: CATEGORY_TYPE.EXPENSE,
    },
    [CATEGORIES.salud]: {
        label: "Salud",
        type: CATEGORY_TYPE.EXPENSE,
    },
    [CATEGORIES.ventas]: {
        label: "Ventas",
        type: CATEGORY_TYPE.INCOME,
    },
    [CATEGORIES.transferencia]: {
        label: "Transferencia",
        type: CATEGORY_TYPE.TRANSFER,
    }
}

export const CATEGORY_OPTIONS = Object.entries(CATEGORY_METADATA).map(([key, { label, type }]) => ({ id: key, value: key, label, type }))

export const CATEGORY_ICONS = {
    [CATEGORIES.trabajo]: "briefcase-outline",
    [CATEGORIES.alimentacion]: "fast-food-outline",
    [CATEGORIES.transporte]: "car-outline",
    [CATEGORIES.entretenimiento]: "film-outline",
    [CATEGORIES.servicios]: "wifi-outline",
    [CATEGORIES.salud]: "medical-outline",
    [CATEGORIES.ventas]: "cash-outline",
    [CATEGORIES.transferencia]: "swap-horizontal-outline",
}