export const MONTHS_SHORT = [
    "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
]

export const MONTHS_FULLNAME = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
]

export const TODAY = new Date()

export const currentYear = TODAY.getFullYear()
export const currentMonth = TODAY.getMonth()

export const PresetsPeriod = [
    {
        id: "this_month",
        title: "Este mes",
        iconName: "calendar-number-outline",
    },
    {
        id: "last_7_days",
        title: "Ultimos 7 días",
        iconName: "calendar-clear-outline",
    },
    {
        id: "last_30_days",
        title: "Ultimos 30 días",
        iconName: "calendar-outline",
    },
    {
        id: "last_month",
        title: "El mes pasado",
        iconName: "calendar-number-outline",
    }

]




