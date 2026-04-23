import { Pressable, StyleSheet, Text } from "react-native";
import { COLORS  } from "../../constants/colors.js";
import { Typography } from "../../constants/typography.js";
import { SPACING, RADIUS } from "../../constants/layout.js";
import THEME from "../../constants/theme.js";

export function AppButton({
    children,
    onAction, 
    size = 'sm', 
    rounded = "sm", 
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
                {
                    backgroundColor: isDisabled 
                        ? currentTheme.colors.surfaceHigh
                        : currentTheme.colors.primaryContainer,

                    borderRadius: currentTheme.radius[rounded],
                    opacity: isDisabled ? 0.5 : 1,
                },
                currentTheme.buttonSizes[size],
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