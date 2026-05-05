import { Pressable, StyleSheet, Text } from "react-native";
import { BUTTON_SIZES } from "../../constants/buttons.js";
import { useTheme } from "../../hooks/useTheme.js";
import { LinearGradient } from "expo-linear-gradient";

export function AppButton({
    children,
    onAction, 
    size = 'sm', 
    rounded = "sm", 
    variant = 'filled', // filled | outlined | gradient
    backgroundColor = 'primaryContainer',
    gradientColors,
    disabled = false,
    fullWidth = false,
    style
}) {
    const isDisabled = disabled

    const {theme} = useTheme()

    const currentTheme = theme

    const baseStyles = [
        styles.button,
        {
            borderRadius: currentTheme.radius[rounded],
            opacity: isDisabled ? 0.5 : 1,
            alignSelf: fullWidth ? "stretch" : "auto",
        },
        style             
    ]

    if(variant === "gradient" && !isDisabled) {
        return (
            <Pressable 
                onPress={onAction}
                disabled = {isDisabled}
                style={baseStyles}
            >
                <LinearGradient
                    start={currentTheme.gradients.primary.start}
                    end={currentTheme.gradients.primary.end} 
                    colors={gradientColors || currentTheme.gradients.primary.colors}
                    locations={currentTheme.gradients.primary.locations}
                    style={
                        [
                            styles.gradient,
                            BUTTON_SIZES[size],
                            { borderRadius: currentTheme.radius[rounded] }
                        ]
                    }
                >
                    {children}
                </LinearGradient>
        </Pressable>
        )
    }

    const getVariantStyles = () => {
        switch(variant) {
            case "outline": 
                return {
                    backgroundColor: 'transparent',
                    borderColor: currentTheme.colors?.[backgroundColor] ?? currentTheme.colors.primaryContainer,
                    borderWidth: 1
                }
            case "ghost":
                return {
                    backgroundColor: currentTheme.colors.surfaceLow,
                }
            case "filled":
            default:
                return {
                    backgroundColor: isDisabled 
                        ? currentTheme.colors.surfaceHigh
                        : currentTheme.colors?.[backgroundColor] ?? currentTheme.colors.primaryContainer,

                }
        }
    }

    return (
        <Pressable 
            onPress={onAction} 
            disabled={isDisabled}
            style={
                [
                    ...baseStyles, 
                    BUTTON_SIZES[size],
                    getVariantStyles()
                ]
            }
        >
            {children}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    gradient: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    }
})