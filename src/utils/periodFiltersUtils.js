export const currentYear = new Date().getFullYear()
export const currentMonth = new Date().getMonth()

export const getAvilableYears = (transactions) => {

    const years = transactions.map(transaction => {
        new Date(transaction.date).getFullYear()
    })

    const uniqueYears = new Set(years)
    uniqueYears.add(currentYear)

    return [...uniqueYears].sort((a, b) => b - a)
}

const getAvilableMonths = (selectedYear) => {
    const MONTHS = [
        {id: "Jan", name: "Ene"}, 
        {id: "Feb", name: "Feb"}, 
        {id: "Mar", name: "Mar"}, 
        {id: "Apr", name: "Abr"}, 
        {id: "May", name: "May"}, 
        {id: "Jun", name: "Jun"},
        {id: "Jul", name: "Jul"}, 
        {id: "Aug", name: "Ago"}, 
        {id: "Sep", name: "Sep"}, 
        {id: "Oct", name: "Oct"}, 
        {id: "Nov", name: "Nov"}, 
        {id: "Dec", name: "Dic"},
    ]

    if(selectedYear === currentYear) {
        return MONTHS.slice(0, currentMonth + 1)
    }

    return MONTHS
}

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

