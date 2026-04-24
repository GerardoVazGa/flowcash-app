import { Pressable, StyleSheet } from "react-native";
import { ICON_BUTTON_SIZES } from "../../constants/buttons";
import { AppIcon } from "./AppIcon";
import { useTheme } from "../../hooks/useTheme";

export function IconButton({
    icon,
    size = "md",
    background = "primaryContainer",
    colorIcon,
    iconSize,
    onPress,
    disabled = false,
    style
}) {
    const { theme } = useTheme()
    const currentTheme = theme

    const backgroundStyle = disabled 
        ? currentTheme.colors.surfaceHigh
        : currentTheme.colors?.[background] || currentTheme.colors.primaryContainer 

    const iconColorStyle = currentTheme.colors?.[colorIcon] || currentTheme.colors.surface
    return (
        <Pressable
            disabled = {disabled}
            onPress={onPress}
            style={
                [
                    styles.container,
                    { 
                        width: ICON_BUTTON_SIZES[size].size,
                        height: ICON_BUTTON_SIZES[size].size,
                        borderRadius: currentTheme.radius.md,
                        backgroundColor: backgroundStyle,
                        opacity: disabled ? 0.5 : 1
                    },
                    style
                ]
            }
        >
            <AppIcon 
                name={icon}
                color={iconColorStyle}
                size={ICON_BUTTON_SIZES[size].iconSize || ICON_BUTTON_SIZES.sm.iconSize}
            />

        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    }
})