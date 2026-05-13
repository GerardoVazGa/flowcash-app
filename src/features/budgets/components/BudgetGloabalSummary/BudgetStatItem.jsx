import { StyleSheet, View } from "react-native"
import { useTheme } from "../../../../hooks/useTheme"
import { AppText } from "../../../../components/ui/AppText"

export function BudgetStatItem({ label, value }) {
    const { theme } = useTheme()

    const styles = getStyles(theme)

    return (
        <View styles={styles.container}>
            <AppText variant="label" styles={styles.label}>
                {label}
            </AppText>
            <AppText variant="headline">
                {value}
            </AppText>

        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        gap: theme.spacing.sm
    },
    label: {
        opacity: 0.7
    }
})