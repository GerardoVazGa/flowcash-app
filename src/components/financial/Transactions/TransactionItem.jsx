import { StyleSheet, View } from "react-native"
import { AppText } from "../../ui/AppText.jsx"
import { AppIcon } from "../../ui/AppIcon.jsx"
import { useTheme } from "../../../hooks/useTheme.js"
import { formatCurrency } from "../../../utils/formatters/formatCurrency.js"

export function TransactionItem({transaction, variant = "card", isFeatured = false}) {
    const { theme } = useTheme()

    const styles = getStyles(theme)

    const isExpense = transaction.type === "expense";
    const amountColor = isExpense ? theme.colors.expenses : theme.colors.income;
    return (
        <View 
            style={
                [
                    styles.container,
                    variant === "card" ? styles.baseCard : styles.baseDense,
                    isFeatured && styles.featured
                ]
            }
        >
            <AppIcon name={transaction.icon} size={14} background="primaryContainer" color = "onPrimary" style={styles.icon}/>
            <View style={styles.info} >
                <AppText variant="label" color="text">
                    {transaction.label}
                </AppText>
                <AppText variant="body" color="text">{transaction.category} - {transaction.account}</AppText>
            </View>
            <AppText variant="title" color={amountColor}>
                {isExpense ? "-" : "+"}{formatCurrency(transaction.amount)} 
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
    },
    icon: {
        borderRadius: theme.radius.md,
        padding: theme.spacing.sm,
    },
    baseDense: {
        paddingVertical: theme.spacing.md,
        paddingHorizontal: theme.spacing.xs
    },
    baseCard: {
        padding: theme.spacing.md,
        marginHorizontal: theme.spacing.sm,
        marginVertical: theme.spacing.xs,
        borderRadius: theme.radius.lg,
        backgroundColor: theme.colors.surface,
        shadowColor: theme.shadows.shadowColor,
        shadowOffset: theme.shadows.shadowOffset,
        shadowOpacity: theme.shadows.shadowOpacity,
        shadowRadius: theme.shadows.shadowRadius,
        elevation: theme.shadows.elevation
    },
    featured: {
        borderWidth: 1,
        borderColor: theme.colors.primary + "20",
        borderLeftWidth: 3,
        borderLeftColor: theme.colors.primary,
        backgroundColor: theme.colors.surface,

        shadowOpacity: 0.12,
        shadowRadius: 10,

        elevation: 3,
    },
    info: {
        flex: 1,
        justifyContent: "flex-start",
        width: "100%"
    }
})