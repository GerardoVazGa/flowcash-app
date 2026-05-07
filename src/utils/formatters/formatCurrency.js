export function formatCurrency(value) {
    const formatter = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' });

    return formatter.format(value);
}