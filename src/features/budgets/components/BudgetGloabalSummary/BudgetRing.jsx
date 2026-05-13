import { StyleSheet, View } from "react-native"
import { useTheme } from "../../../../hooks/useTheme"
import { budgetStateVariant } from "../../utils/budgetStateVariant"
import { ProgressRing } from "../../../../components/ui/ProgressRing"
import { AppText } from "../../../../components/ui/AppText"

export function BudgetRing({ percent, state }) {
    const { theme } = useTheme()
    const styles = getStyles(theme)

    const { variant } = budgetStateVariant(state)
    const status = theme.status[variant]
    const colorBar = theme.colors[status.bar]
    const text = theme.colors[status.text]
    
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