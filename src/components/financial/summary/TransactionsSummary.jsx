import { StyleSheet, View } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { MetricCard } from "./MetricCard.jsx";
import { AppText } from "../../ui/AppText.jsx";
import { formatCurrency } from "../../../utils/formatCurrency";

export function TransactionsSummary({income, expense, balance}) {
    const  {theme} = useTheme()
    const styles = getStyles(theme)

    const incomeFormated = formatCurrency(income)
    const expenseFormated = formatCurrency(expense)
    const balanceFormated = formatCurrency(balance)

    return (
        <View style = {styles.container}>
            <AppText variant="title">Resumen de Transacciones</AppText>
            <View style={styles.metrics}>
                <MetricCard 
                    label="Ingresos" 
                    value={incomeFormated}
                    variant="income" 
                    size="sm" 
                />
                
                <MetricCard 
                    label="Gastos" 
                    value={expenseFormated}
                    variant="expense" 
                    size="sm" 
                />
                
                <MetricCard 
                    label="Balance" 
                    value={balanceFormated}
                    variant="expense" 
                    size="sm" 
                />
            </View>

        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        gap: theme.spacing.md,
    },
    metrics: {
        flexDirection: "row",
        gap: theme.spacing.sm
    }
})