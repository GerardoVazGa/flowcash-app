export function parseAmount(value = "") {
    const sanitizedValue = value.replace(/[^0-9.]/g, "")

    const [integerPart, ...decimalParts] = sanitizedValue.split(".")

    if (decimalParts.length === 0) {
        return integerPart
    }

    const decimalPart = decimalParts
        .join("")
        .slice(0, 2)

    return `${integerPart}.${decimalPart}`
}