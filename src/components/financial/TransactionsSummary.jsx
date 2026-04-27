import { StyleSheet, View } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { MetricCard } from "./MetricCard";
import { AppText } from "../ui/AppText";

export function TransactionsSummary({income, expense, balance}) {
    const  {theme} = useTheme()
    const styles = getStyles(theme)
    return (
        <View style = {styles.container}>
            <AppText variant="title">Resumen de Transacciones</AppText>
            <View style={styles.metrics}>
                <MetricCard 
                    label="Ingresos" 
                    value={income.toFixed(2)}
                    variant="income" 
                    size="sm" 
                />
                
                <MetricCard 
                    label="Gastos" 
                    value={expense.toFixed(2)}
                    variant="expense" 
                    size="sm" 
                />
                
                <MetricCard 
                    label="Balance" 
                    value={balance.toFixed(2)}
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