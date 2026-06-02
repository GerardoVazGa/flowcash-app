import { useFormField } from "@hooks/forms/useFormField"
import { useTheme } from "@hooks/useTheme"
import { useFormContext } from "react-hook-form"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { FormField } from "./FormField"
import { AppText } from "@components/ui/AppText"

export function FormToggle({
    name,
    label,
    options,
    activeColor
}) {
    const { control } = useFormContext()

    const { value, onChange, onBlur, error } = useFormField(control, name)

    const { theme } = useTheme()
    const styles = getStyles(theme)
    
    return (
        <FormField
            label={label}
            error={error}
        >
            <View style={styles.container}>
                {options.map(option => {
                    const isActive = value === option.value
                    const color = activeColor?.(option.value) || theme.colors.primary
                    return (
                        <TouchableOpacity
                            key={option.value}
                            onPress={() => onChange(option.value)}
                            style = {
                                [
                                    styles.option,
                                    isActive && {
                                        backgroundColor: color
                                    }
                                ]
                            }
                            activeOpacity={0.7}
                        >
                            <AppText 
                                variant="label"
                                color={isActive ? "onPrimary" : "textVariant"}>
                                {option.label}
                            </AppText>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </FormField>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: theme.colors.surfaceLow,
        borderRadius: theme.radius.md,
        
    },
    option: {
        flex: 1,
        paddingVertical: theme.spacing.md,
        paddingHorizontal: theme.spacing.md,
        alignItems: "center",
        borderRadius: theme.radius.md
    },

})