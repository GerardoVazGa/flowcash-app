import { StyleSheet, TextInput, View } from "react-native"
import { useTheme } from "@hooks/useTheme"
import { BottomSheetTextInput } from "@gorhom/bottom-sheet"


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
    style,
    asBottomSheetInput = false
}) {
    const  { theme } = useTheme()
    const styles = getStyles(theme)

    const InputComponent = asBottomSheetInput ? BottomSheetTextInput : TextInput 

    return (
        <View style={[styles.container, multiline && styles.multilineContainer, containerStyle]}>
            {leftComponent && leftComponent}
            <InputComponent 
                style={[styles.input, multiline && styles.multilineInput, style]}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={theme.colors.textVariant}
                keyboardType={keyboardType}
                multiline={multiline}
                numberOfLines={numberOfLines}
                textAlignVertical={multiline ? "top" : "center"}
                nestedScrollEnabled={multiline}
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
        flex: 1,
        borderWidth: 1,
        color: theme.colors.text,
        borderColor: theme.colors.outline,
        borderRadius: theme.radius.md,
        backgroundColor: theme.colors.surface
    },
    multilineInput: {
        minHeight: 100,
        flex: 1,
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.sm,
        textAlignVertical: "top",
    }
})