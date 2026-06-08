import { FormSelectField } from "@components/forms/FormSelectField";
import { CATEGORY_ICONS, CATEGORY_OPTIONS } from "@constants/categories";
import { useTheme } from "@hooks/useTheme";

export function TransactionCategoryField({name}) {

    const { theme } = useTheme()

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