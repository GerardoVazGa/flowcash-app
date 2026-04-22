import { StyleSheet, View } from "react-native";
import { AppText } from "../ui/AppText";
import { AppIcon } from "../ui/AppIcon";
import { COLORS } from "../../constants/colors";
import { RADIUS, SPACING } from "../../constants/layout";

export function TransactionItem({transaction}) {
    const isExpense = transaction.type === "expense";
    const amountColor = isExpense ? COLORS.light.expenses : COLORS.light.income;
    return (
        <View style={styles.container}>
            <AppIcon name="trending-up-outline" size={14} background="primaryContainer" color = "onPrimary" style={styles.icon}/>
            <View >
                <AppText variant="label" color="text"> {transaction.label} </AppText>
                <AppText variant="body" color="text"> {transaction.category} - {transaction.account} </AppText>
            </View>
            <AppText variant="title" color={amountColor}>
                {isExpense ? "-" : "+"} {transaction.amount} 
            </AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: SPACING.md,
    },
    icon: {
        borderRadius: RADIUS.full,
        padding: SPACING.sm,
    },
    detail: {
    }
})