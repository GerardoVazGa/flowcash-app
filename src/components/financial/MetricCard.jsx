import { StyleSheet, View } from "react-native";
import { AppText } from "../ui/AppText";
import { AppIcon } from "../ui/AppIcon.jsx";
import { getVariantStyle } from "../../utils/getVariantStyle.js";
import { useTheme } from "../../hooks/useTheme.js";

export function MetricCard({label = "Total", value, icon, variant, style}) {
    const { theme } = useTheme()
    const variantStyle = getVariantStyle(variant, theme.colors)

    const styles = getStyles(theme)

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
                <AppIcon 
                    name={icon} 
                    size={16} 
                    color={variantStyle.iconColor}
                    background={variantStyle.iconBackgroundColor} 
                    style={[
                        styles.icon,
                        {borderColor:variantStyle.borderColor}
                    ]}/>
                <AppText 
                    variant="label" 
                    color={variantStyle.color}
                >
                    {label}
                </AppText>
            </View>
            <AppText 
                variant="title" 
                color="text" 
                style={styles.text}
            >
                $ {value}
            </AppText>
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
        flexDirection: 'column',
        justifyContent: 'space-around',
        gap: theme.spacing.md,
        padding: theme.spacing.md,
        borderRadius: theme.radius.xl,

        shadowColor: theme.shadows.shadowColor,
        shadowOffset: theme.shadows.shadowOffset,
        shadowOpacity: theme.shadows.shadowOpacity,
        shadowRadius: theme.shadows.shadowRadius,
        elevation: theme.shadows.elevation,
        height: 180
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing.sm
    },
    text: {
        padding: theme.spacing.sm
    },
    icon: {
        borderRadius: theme.radius.full,
        padding: theme.spacing.sm,
        borderWidth: theme.spacing.xs
    }
})