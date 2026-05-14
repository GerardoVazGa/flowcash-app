import { StyleSheet, View } from "react-native"
import { useTheme } from "@hooks/useTheme"
import { ProgressRing } from "@components/ui/ProgressRing"
import { AppText } from "@components/ui/AppText"
import { BUDGET_STATUS_VARIANTS } from "@features/budgets/constants/budgetVariants"

export function BudgetRing({ percent, status }) {
    const { theme } = useTheme()
    const styles = getStyles(theme)

    const variant = BUDGET_STATUS_VARIANTS[status] || BUDGET_STATUS_VARIANTS["HEALTHY"]

    const statusColor = theme.status[variant]
    const colorBar = theme.colors[statusColor.bar]
    const text = theme.colors[statusColor.text]
    
    return (
        <View style={styles.usageInfo}>
            <ProgressRing
                size={160}
                width={15}
                backgroundColor={theme.colors.surfaceHighest}
                color={colorBar}
                value={percent}
            >
                {() => (
                    <View style={styles.progressContent}>
                        <AppText variant="headline" color={text}>
                            {percent}%
                        </AppText>
                        <AppText variant="label" color={text}>
                            Utilizado
                        </AppText>
                    </View>

                )}
            </ProgressRing>
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    usageInfo: {
        alignItems: "center",
        justifyContent: "center",
    },
    progressContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: theme.spacing.sm,
    }
})