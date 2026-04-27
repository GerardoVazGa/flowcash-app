import { StyleSheet, Text, View } from "react-native";
import { TransactionsSummary } from "../../components/financial/TransactionsSummary";
import { useTheme } from "../../hooks/useTheme";

export function TransactionsScreen() {
    const {theme} = useTheme()
    const styles = getStyles(theme)
    return (
        <View style={styles.container}>
            <TransactionsSummary 
                income={1000}
                expense={500}
                balance={500}
            />

        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex1: 1,
        backgroundColor: theme.colors.surface,
        padding: theme.spacing.lg,
        gap: theme.spacing.lg,
    }
})

