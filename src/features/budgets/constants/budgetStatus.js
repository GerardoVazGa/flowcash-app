export const BUDGET_STATUS = {
    HEALTHY: "HEALTHY",
    WARNING: "WARNING",
    CRITICAL: "CRITICAL",
    EXCEEDED: "EXCEEDED",
    AT_RISK: "AT_RISK"
}

export const BUDGET_STATUS_CONFIG = {
    [BUDGET_STATUS.HEALTHY] : {
        label: "Normal",
        icon: "checkmark-circle-outline"
    },
    [BUDGET_STATUS.WARNING] : {
        label: "Alerta",
        icon: "alert-circle-outline"
    },
    [BUDGET_STATUS.CRITICAL] : {
        label: "Crítico",
        icon: "warning-outline"
    },
    [BUDGET_STATUS.AT_RISK] : {
        label: "En riesgo",
        icon: "trending-up-outline"
    },
    [BUDGET_STATUS.EXCEEDED] : {
        label: "Excedido",
        icon: "close-circle-outline"
    },
}

export const BUDGET_STATUS_OPTIONS = Object.entries(BUDGET_STATUS_CONFIG).map(([value, config]) => ({ value, ...config }))