import { StyleSheet, TextInput, View } from "react-native"
import { useTheme } from "@hooks/useTheme"


export function AppInput({
    value,
    onChangeText,
    placeholder,
    keyboardType = "default",
    leftComponent,
    rightComponent,
    containerStyle,
    style
}) {
    const  { theme } = useTheme()
    const styles = getStyles(theme)

    return (
        <View style={[styles.container, containerStyle]}>
            {leftComponent && leftComponent}
            <TextInput 
                style={[styles.input, style]}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={theme.colors.textVariant}
                keyboardType={keyboardType}
            />
            {rightComponent && rightComponent}
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing.sm
    },
    input: {
        borderWidth: 1,
        color: theme.colors.text,
        borderColor: theme.colors.outline,
        borderRadius: theme.radius.md,
        padding: theme.spacing.md,
        backgroundColor: theme.colors.surface
    }
})