import { Pressable, StyleSheet, Text } from "react-native";
import { BUTTON_SIZES } from "../../constants/buttons.js";
import THEME from "../../constants/theme.js";

export function AppButton({
    children,
    onAction, 
    size = 'sm', 
    rounded = "sm", 
    backgroundColor = 'primaryContainer',
    disabled = false,
    style
}) {
    const isDisabled = disabled

    const currentTheme = THEME.light

    return (
        <Pressable 
            onPress={onAction} 
            disabled={isDisabled}
            style={[
                styles.button,
                BUTTON_SIZES[size],
                {
                    backgroundColor: isDisabled 
                        ? currentTheme.colors.surfaceHigh
                        : currentTheme.colors?.[backgroundColor] ?? currentTheme.colors.primaryContainer,
                    borderRadius: currentTheme.radius[rounded],
                    opacity: isDisabled ? 0.5 : 1,
                },
                style             
            ]}
        >
            {children}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})