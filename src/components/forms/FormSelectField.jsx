import { useTheme } from "@hooks/useTheme"
import { Pressable, StyleSheet } from "react-native"
import { FormField } from "./FormField"
import { useFormField } from "@hooks/forms/useFormField"
import { SelectorBottomSheet } from "./selectors/SelectorBottomSheet"

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
            <Pressable
                onPress={openSheet}
                style={styles.input}
            >
                <AppText variant="body">{selectedOption?.label || placeholder}</AppText>
            </Pressable>

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
    input: {
        borderWidth: 1,
        color: theme.colors.text,
        borderColor: theme.colors.outline,
        borderRadius: theme.radius.md,
        padding: theme.spacing.md,
        backgroundColor: theme.colors.surface
    }
})