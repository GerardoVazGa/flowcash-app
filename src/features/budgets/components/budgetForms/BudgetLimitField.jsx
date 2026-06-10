import { FormAmountInput } from "@components/forms/FormAmountInput";

export function BudgetLimitField({ name, currency }) {
    
    return (
        <FormAmountInput 
            name={name}
            currency={currency}
            label="Límite de Presupuesto"
            placeholder="0.00"
            variant="display"
            asBottomSheetInput={true}

        />
    )
}