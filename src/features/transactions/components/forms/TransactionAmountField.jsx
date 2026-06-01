import { FormAmountInput } from "@components/forms/FormAmountInput";
import { useTheme } from "@hooks/useTheme";

export function TransactionAmountField({name, currency}) {
    const { theme } = useTheme()

    return (
        <FormAmountInput 
            name={name}
            currency={currency}
            label="Monto de Transacción"
            placeholder="0.00"
            variant="display"
        />
    )
}