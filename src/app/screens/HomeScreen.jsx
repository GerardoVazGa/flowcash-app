import { View, Text, ScrollView, StyleSheet} from "react-native";
import { Section } from "../../components/layouts/Section.jsx";
import { AppText } from "../../components/ui/AppText.jsx";
import { BalanceCard } from "../../components/financial/summary/BalanceCard.jsx";
import { MetricCard } from "../../components/financial/summary/MetricCard.jsx";
import { BudgetItem } from "../../components/financial/budgets/BudgetItem.jsx";
import { useBudgets } from "../../hooks/useBudgets.js";
import { useTheme } from "../../hooks/useTheme.js";
import { useHomeSummary } from "../../hooks/useHomeSummary.js";
import { TransactionItem } from "../../components/financial/Transactions/TransactionItem.jsx";

export function HomeScreen(){
    const { theme } = useTheme()
    const styles = getStyles(theme)

    const { 
        recentTransactions, 
        recentBudgets, 
        incomes, 
        expenses, 
        totalBalance 
    } = useHomeSummary()

    
    return (
        <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
        >
            <BalanceCard totalBalance={totalBalance}/>
            <Section title="" style={styles.metricSection}>
                <MetricCard 
                    label="Ingresos" 
                    value={incomes} 
                    icon="trending-up-outline"
                    variant="income" 
                />
                <MetricCard 
                    label="Gastos" 
                    value={expenses} 
                    icon= "trending-down-outline"
                    variant="expense"
                />

            </Section>

            <Section style={styles.recentMovements}>
                <View style={styles.headerRecentMovements}>
                    <AppText variant="headline">Movimientos</AppText>
                </View>
                {
                    recentTransactions.map((transaction, index) => (
                        <TransactionItem key={transaction.id} transaction={transaction} variant="card" isFeatured={index === 0}/>
                    ))
                }
            </Section>

            <Section style={styles.budgetSection}>
                <AppText variant="headline">Presupuesto</AppText>
                {
                    recentBudgets.map((budget) => (
                        <BudgetItem key={budget.id} budget={budget} onDelete={() => {}} showDelete={false}/>
                    ))
                }
            </Section>

            <Section>
                {/* Goals */}
            </Section>

            
        </ScrollView>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        
    },
    content: {
        padding: theme.spacing.lg,
        gap: theme.spacing.lg,
        paddingBottom: theme.spacing.xl
    },
    metricSection: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        gap: theme.spacing.md
    },
    recentMovements: {
        gap: theme.spacing.sm
    },
    headerRecentMovements: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: theme.spacing.md,
        paddingBottom: theme.spacing.md
    },
    budgetSection: {
        gap: theme.spacing.md
    }
})


