import { StyleSheet, View } from "react-native";
import { AppText } from "../ui/AppText";
import { SPACING, RADIUS } from "../../consonants/layout";
import { COLORS } from "../../consonants/colors";
import { SHADOWS } from "../../consonants/shadows";

export function MetricCard({label = "Total", value, icon, variant, style}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {icon}
                <AppText variant="label" color="text">{label}</AppText>
            </View>
            <AppText variant="title" color="text" style={styles.text}>{value}</AppText>
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
        backgroundColor: COLORS.light.surface,
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
    }
})