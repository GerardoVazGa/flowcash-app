import { FormSelectField } from "@components/forms/FormSelectField";
import { CATEGORY_ICONS, CATEGORY_OPTIONS } from "@constants/categories";

export function BudgetCategoryField({ name }) {

    const categories = CATEGORY_OPTIONS.map(category => ({
        ...category,
        icon: CATEGORY_ICONS[category.value]
    }))

    return (
        <FormSelectField 
            name={name}
            label="Categoría"
            placeholder="Seleccione una categoría"
            options={categories}
        />
    )
}