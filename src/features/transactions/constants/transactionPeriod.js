export const TRANSACTION_PRESETS = {
    this_month: "this_month",
    last_7_days: "last_7_days",
    last_30_days: "last_30_days",
    last_month: "last_month"
}

export const TRANSACTION_PRESETS_LABELS = {
    [TRANSACTION_PRESETS.this_month]: "Este mes",
    [TRANSACTION_PRESETS.last_7_days]: "Ultimos 7 días",
    [TRANSACTION_PRESETS.last_30_days]: "Ultimos 30 días",
    [TRANSACTION_PRESETS.last_month]: "El mes pasado"
}

export const TRANSACTION_PRESETS_OPTIONS =  Object.entries(TRANSACTION_PRESETS_LABELS).map(([value, label]) => ({id: value,  value, label}))




