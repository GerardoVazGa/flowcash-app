import { StyleSheet, View } from "react-native";
import { AppText } from "../ui/AppText";
import { SPACING, RADIUS } from "../../constants/layout.js";
import { COLORS } from "../../constants/colors.js";
import { SHADOWS } from "../../constants/shadows.js";
import { AppIcon } from "../ui/AppIcon.jsx";
import { getVariantStyle } from "../../utils/getVariantStyle.js";

export function MetricCard({label = "Total", value, icon, variant, style}) {
    const variantStyle = getVariantStyle(variant)

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
                        {outlineColor: variantStyle.outline}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
        flexDirection: 'column',
        justifyContent: 'space-around',
        gap: SPACING.md,
        padding: SPACING.md,
        borderRadius: RADIUS.xl,

        shadowColor: SHADOWS.light.shadowColor,
        shadowOffset: SHADOWS.light.shadowOffset,
        shadowOpacity: SHADOWS.light.shadowOpacity,
        shadowRadius: SHADOWS.light.shadowRadius,
        elevation: SHADOWS.light.elevation,
        height: 180
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.sm
    },
    text: {
        padding: SPACING.sm
    },
    icon: {
        borderRadius: RADIUS.full,
        padding: SPACING.sm,
        outlineWidth: SPACING.xs
    }
})