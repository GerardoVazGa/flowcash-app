import { StyleSheet, TextInput } from "react-native"
import { useTheme } from "@hooks/useTheme"


export function AppInput({
    value,
    onChangeText,
    placeholder,
    keyboardType = "default",
    style
}) {
    const  { theme } = useTheme()
    const styles = getStyles(theme)

    return (
        <TextInput 
            value={value}
            placeholder={placeholder}
            onChange={onChangeText}
            keyboardType={keyboardType}
            style = {
                [
                    styles,
                    style
                ]
            }
        />
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