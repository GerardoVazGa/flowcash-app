export function formatCurrency(value, currency = "MXN", locale = "es-MX") {

    return new Intl.NumberFormat(locale, { 
        style: 'currency', 
        currency 
    }).format(Number(value) || 0)
}