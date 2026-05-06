import { currentMonth, currentYear } from "./periodFilters";

export const DEFAULT_FILTERS = {
    type: "all",
    category: [],
    period: {
        preset: "this_month",
        month: currentMonth,
        year: currentYear
    }
}

export const TYPE_OPTIONS = [
    {
        label: "Todos",
        value: "all",
        icon: "swap-horizontal-outline"
    },
    {
        label: "Ingresos",
        value: "income",
        icon: "arrow-up-outline"
    },
    {
        label: "Gastos",
        value: "expense",
        icon: "arrow-down-outline"
    }
]

export const CATEGORY_OPTIONS = [
    {
        label: "Trabajo",
        value: "trabajo",
    },
    {
        label: "Alimentación",
        value: "alimentacion",
    },
    {
        label: "Transporte",
        value: "transporte",
    },
    {
        label: "Entretenimiento",
        value: "entretenimiento",
    },
    {
        label: "Servicios",
        value: "servicios",
    },
    {
        label: "Salud",
        value: "salud",
    },
    {
        label: "Ventas",
        value: "ventas",
    },
    {
        label: "Transferencia",
        value: "transferencia",
    },
]