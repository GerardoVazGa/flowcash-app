import { useTheme } from "@hooks/useTheme"
import { Pressable, StyleSheet } from "react-native"
import { FormField } from "./FormField"
import { useFormField } from "@hooks/forms/useFormField"
import { SelectorBottomSheet } from "./selectors/SelectorBottomSheet"
import { AppSelect } from "@components/ui/AppSelect"

export function FormSelectField({control, name, label, placeholder = "Seleccione una opción", options}) {

    const {
        value,
        onChange,
        onBlur,
        error
    } = useFormField(control, name)

    const { bottomSheetRef } = useRef(null)

    const { theme } = useTheme()
    const styles = getStyles(theme)

    const selectedOption = options.find(option => option.value === value)

    const openSheet = () => bottomSheetRef.current?.present()

    return (
        <FormField
            label={label}
            error={error}
        >
            <AppSelect 
                value={selectedOption?.label}
                onPress={openSheet}
                placeholder={placeholder}
                icon={selectedOption?.icon}
            />

            <SelectorBottomSheet 
                sheetRef={bottomSheetRef}
                options={options}
                selected={selectedOption?.value}
                onSelect={onChange}
            />

        </FormField>
    )

}

const getStyles = (theme) => StyleSheet.create({
})