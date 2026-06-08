import { StyleSheet, TextInput, View } from "react-native"
import { useTheme } from "@hooks/useTheme"


export function AppInput({
    value,
    onChangeText,
    placeholder,
    keyboardType = "default",
    multiline = false,
    numberOfLines = 1,
    leftComponent,
    rightComponent,
    containerStyle,
    style
}) {
    const  { theme } = useTheme()
    const styles = getStyles(theme)

    return (
        <View style={[styles.container, multiline && styles.multilineContainer, containerStyle]}>
            {leftComponent && leftComponent}
            <TextInput 
                style={[styles.input, multiline && styles.multilineInput, style]}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={theme.colors.textVariant}
                keyboardType={keyboardType}
                multiline={multiline}
                numberOfLines={numberOfLines}
                textAlignVertical={multiline ? "top" : "center"}
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
    multilineContainer: {
        alignItems: "flex-start",
    },
    input: {
        borderWidth: 1,
        color: theme.colors.text,
        borderColor: theme.colors.outline,
        borderRadius: theme.radius.md,
        backgroundColor: theme.colors.surface
    },
    multilineInput: {
        minHeight: 100,
    }
})