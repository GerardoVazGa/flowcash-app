import { FormDateField } from "@components/forms/FormDateField";

export function TransactionDateField({name, label}) {

    return (
        <FormDateField 
            name={name}
            label={label || "Fecha de Transacción"}
            placeholder="Seleccione una fecha"
        />
    )
}