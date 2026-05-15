import { Pressable, StyleSheet, View } from "react-native";
import { AppText } from "./AppText";
import { useTheme } from "../../hooks/useTheme";

export function BaseChip({label, selected = false, onPress, leftIcon, rightIcon, disabled = false, style}) {
    const { theme } = useTheme()
    const styles = getStyles(theme, selected)

    return (
        <Pressable 
            onPress={onPress} 
            style= {
                ({pressed}) => [
                    styles.container, 
                    pressed && {opacity: 0.5}, 
                    disabled && styles.disabled,
                    style
                ]
            }
            disabled={disabled}
        >
            {leftIcon && <View>{leftIcon}</View>}
            <AppText variant="body" color={selected ? "primary": "textVariant"}>{label}</AppText>
            {rightIcon && <View>{rightIcon}</View>}
        </Pressable>
    )
}

const getStyles = (theme, selected) => StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing.xs,
        paddingVertical: theme.spacing.xs,
        paddingHorizontal: theme.spacing.md,
        backgroundColor: selected ? `${theme.colors.primary}10` : theme.colors.surface,
        borderRadius: theme.radius.full,
        borderColor: selected ? `${theme.colors.primary}40` : theme.colors.outline,
        borderWidth: selected ? 2 : 1
    },
    disabled: {
        opacity: 0.5
    }
})