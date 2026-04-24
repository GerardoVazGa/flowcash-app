import { StyleSheet, View } from "react-native"
import { AppText } from "../ui/AppText"
import { AppIcon } from "../ui/AppIcon"
import { useTheme } from "../../hooks/useTheme"

export function TransactionItem({transaction}) {
    const { theme } = useTheme()

    const styles = getStyles(theme)

    const isExpense = transaction.type === "expense";
    const amountColor = isExpense ? theme.colors.expenses : theme.colors.income;
    return (
        <View style={styles.container}>
            <AppIcon name={transaction.icon} size={14} background="primaryContainer" color = "onPrimary" style={styles.icon}/>
            <View style={styles.info} >
                <AppText variant="label" color="text">
                    {transaction.label}
                </AppText>
                <AppText variant="body" color="text">{transaction.category} - {transaction.account}</AppText>
            </View>
            <AppText variant="title" color={amountColor}>
                {isExpense ? "-" : "+"} {transaction.amount} 
            </AppText>
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        overflow: "hidden",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: theme.spacing.md,
        paddingVertical: theme.spacing.md,
        paddingHorizontal: theme.spacing.xs,
    },
    icon: {
        borderRadius: theme.radius.full,
        padding: theme.spacing.sm,
    },
    info: {
        flex: 1,
        justifyContent: "flex-start",
        width: "100%"
    }
})