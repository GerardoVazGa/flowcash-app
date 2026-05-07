import { StyleSheet, View } from "react-native";
import { AppText } from "../../ui/AppText.jsx";
import { AppIcon } from "../../ui/AppIcon.jsx";
import { getVariantStyle } from "../../../utils/ui/getVariantStyle.js";
import { useTheme } from "../../../hooks/useTheme.js";

export function MetricCard({label = "Total", value, icon, variant, size = "md", style}) {
    const { theme } = useTheme()
    const variantStyle = getVariantStyle(variant, theme.colors)

    const styles = getStyles(theme, size)

    return (
        <View style={
            [
                styles.container,
                {backgroundColor: variantStyle.backgroundColor},
                style
            ]
        }>
            <View 
                style={styles.header}>
                {
                icon && 
                    <AppIcon 
                        name={icon} 
                        size={size === "sm" ? 14 : 16} 
                        color={variantStyle.iconColor}
                        background={variantStyle.iconBackgroundColor} 
                        style={[
                            styles.icon,
                            {borderColor:variantStyle.borderColor}
                        ]}
                    />
                }
                <AppText 
                    variant={size === "sm" ? "body" : "label"} 
                    color={variantStyle.color}
                >
                    {label}
                </AppText>
            </View>
            <AppText 
                variant={size === "sm" ? "body" : "title"}
                color="text" 
                style={styles.text}
            >
                {variant === "income" ? `+${value}` : variant === "expense" ? `-${value}` : `${value}`}
            </AppText>
        </View>
    )
}

const getStyles = (theme, size) => StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
        flexDirection: 'column',
        gap: theme.spacing.md,
        padding: size === "sm" ? theme.spacing.sm : theme.spacing.md,
        borderRadius: theme.radius.xl,

        shadowColor: theme.shadows.shadowColor,
        shadowOffset: theme.shadows.shadowOffset,
        shadowOpacity: theme.shadows.shadowOpacity,
        shadowRadius: theme.shadows.shadowRadius,
        elevation: theme.shadows.elevation,
        height: size === "sm" ? 100 : 150
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: theme.spacing.sm
    },
    text: {
        textAlign: 'center',
    },
    icon: {
        borderRadius: theme.radius.full,
        padding: size === "sm" ? theme.spacing.xs : theme.spacing.sm,
        borderWidth: theme.spacing.xs
    }
})