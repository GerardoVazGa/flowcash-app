export function parseAmount(value = "") {
    const sanatizedValue = value.replace(/[^0-9.]/g, '')

    const parts = sanatizedValue.split('.')

    if (parts.length <= 1) {
        return sanatizedValue
    }

    return `${parts[0]}.${parts[1].join('').slice(0, 2)}`
}