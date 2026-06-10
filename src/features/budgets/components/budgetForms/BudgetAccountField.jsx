import { FormSelectField } from "@components/forms/FormSelectField"
import { useAccountsStore } from "@features/accounts/store/useAccountStores"

export function BudgetAccountField({ name }) {
    const accounts = useAccountsStore(state => state.accounts)

    const accountsOptions = accounts.map(account => ({
        id: account.id,
        value: account.id,
        label: account.name,
        icon: ACCOUNT_TYPE_ICONS[account.type]
    }))

    return (
        <FormSelectField 
            name={name}
            label="Cuenta"
            placeholder="Seleccione una cuenta"
            options={accountsOptions}
        />
    )
}