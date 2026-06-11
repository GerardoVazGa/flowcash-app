import { StyleSheet, TouchableOpacity, View } from "react-native"
import { AppText } from "@components/ui/AppText.jsx"
import { AppIcon } from "@components/ui/AppIcon.jsx"
import { useTheme } from "@hooks/useTheme.js"
import { formatCurrency } from "@utils/formatters/formatCurrency.js"
import { memo, useMemo } from "react"
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable"

export const TransactionItem = memo (({
    transaction, 
    variant = "card", 
    isFeatured = false,
    swipeable = false,
    onEdit,
    onDelete
}) => {
    const { theme } = useTheme()

    const styles = useMemo(() => getStyles(theme), [theme])

    const isExpense = transaction.type === "expense"
    const amountColor = isExpense ? theme.colors.expenses : theme.colors.income

    const isDense = variant === "dense"

    const content = (
        <View 
            style={
                [
                    styles.container,
                    variant === "card" ? styles.baseCard : styles.baseDense,
                    isFeatured && styles.featured
                ]
            }
        >
            <AppIcon name={transaction.icon} size={isDense ? 18 : 14} background="primaryContainer" color = "onPrimary" style={styles.icon}/>
            <View style={styles.info} >
                <AppText variant="title" color="text">
                    {transaction.label}
                </AppText>
                <AppText variant="label" color="textVariant">{transaction.category}</AppText>
            </View>
            <View style={styles.amountContainer}>
                <AppText variant="title" color={amountColor}>
                    {isExpense ? "-" : "+"}{formatCurrency(transaction.amount)} 
                </AppText>
                {isDense && <AppText variant="body" color="text">{transaction.account}</AppText>}
            </View>
        </View>
    )

    if(!swipeable) return content

    return (
        <ReanimatedSwipeable
            renderRightActions={(progress, translation) => (
                <RightActions 
                    onDelete={onDelete} 
                    onEdit={onEdit} 
                    theme={theme}
                />
            )
            }
            overshootRight={false}
        >
            {content}
        </ReanimatedSwipeable>
    )
})

const RightActions = ({onDelete , onEdit, theme}) => {
    const styles = getRightActionsStyles(theme)
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={[styles.action, styles.editAction]}
                onPress={onEdit}
            >
                <AppIcon 
                    name="pencil-outline" 
                    size={20} 
                    color="onPrimary"
                    background="transparent"
                />
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.action, styles.deleteAction]}
                onPress={onDelete}
            >
                <AppIcon 
                    name="trash-outline" 
                    size={20} 
                    color="onPrimary" 
                    background="transparent"
                />
            </TouchableOpacity>
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
        paddingHorizontal: theme.spacing.sm,
        paddingRight: theme.spacing.md,
        backgroundColor: theme.colors.surface,
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
    },
    amountContainer: {
        justifyContent: "center",
        alignItems: "flex-end"
    }
})

const getRightActionsStyles = (theme) => StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: theme.spacing.xs,
        gap: theme.spacing.xs,
        paddingRight: theme.spacing.sm
    },
    action: {
        justifyContent: "center",
        alignItems: "center",
        width: 64,
        height: "100%",
        borderRadius: theme.radius.lg,
    },
    editAction: {
        backgroundColor: theme.colors.primary,
    },
    deleteAction: {
        backgroundColor: theme.colors.error,
    }
})