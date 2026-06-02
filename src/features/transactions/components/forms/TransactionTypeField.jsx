import { FormToggle } from "@components/forms/FormToggle";
import { useTheme } from "@hooks/useTheme";
import { TRANSACTION_TYPE_OPTIONS, TRANSACTION_TYPE_COLORS, TRANSACTION_TYPE } from "../../constants/transactionType";
import { getToggleOption } from "@features/transactions/utils/ui/getToggleOption";

export function TransactionTypeField({name}) {
    const { theme } = useTheme()

    const options = getToggleOption(
        TRANSACTION_TYPE_OPTIONS.filter(option => option.value !== TRANSACTION_TYPE.ALL)
    )

    return (
        <FormToggle 
            name={name}
            options={options}
            activeColor = {(value) => TRANSACTION_TYPE_COLORS[value]?.(theme)}
        />
    )
}