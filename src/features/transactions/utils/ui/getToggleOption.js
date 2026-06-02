import { TRANSACTION_TYPE } from "@features/transactions/constants/transactionType"

export const getToggleOption = (options) => {
    return options.map(option => {
        return {
            ...option,
            label: option.value === TRANSACTION_TYPE.INCOME
                ? "Ingreso"
                : "Gasto"
        }
    })
}