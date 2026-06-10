import { FormSelectField } from "@components/forms/FormSelectField";
import { BUDGETS_PERIODS_OPTIONS } from "@features/budgets/constants/budgetPeriod";

export function BudgetPeriodField({name}) {
    return (
        <FormSelectField 
            name={name}
            label="Período"
            placeholder="Seleccione un período"
            options={BUDGETS_PERIODS_OPTIONS}
        />
    )
}