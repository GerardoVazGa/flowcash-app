import { FormSelectField } from "@components/forms/FormSelectField";
import { CATEGORIES, CATEGORY_ICONS } from "@constants/categories";

export function BudgetCategoryField({ name }) {

    const categories = CATEGORIES.map(category => ({
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