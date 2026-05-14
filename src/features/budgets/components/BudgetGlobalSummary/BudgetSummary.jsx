import { StyleSheet, View } from "react-native";
import { AppText } from "@components/ui/AppText";
import { useTheme } from "@hooks/useTheme";

export function BudgetSummary({spent, limit, periodType = "Mensual"}) {
    const { theme } = useTheme()
    const styles = getStyles(theme)
    return (
        <View style={styles.container}>
            <AppText variant="label">Resumen {periodType}</AppText>
            <View style = {styles.row}>
                <AppText variant="headline">{spent}</AppText>
                <AppText variant="label" style={styles.limit} color="textVariant"> / {limit}</AppText>
            </View>
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        gap: theme.spacing.sm
    },
    row: {
        flexDirection: "row",
        alignItems: "flex-end",
        gap: theme.spacing.sm,
    },
    
})