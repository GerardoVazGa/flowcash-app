import { View, Text, ScrollView, StyleSheet} from "react-native";
import { Section } from "../../components/layouts/Section.jsx";
import { AppText } from "../../components/ui/AppText.jsx";
import { BalanceCard } from "../../components/financial/summary/BalanceCard.jsx";
import { MetricCard } from "../../components/financial/summary/MetricCard.jsx";
import { TransactionsFlatList } from "../../components/financial/Transactions/TransactionsFlatList.jsx";
import { BudgetItem } from "../../components/financial/budgets/BudgetItem.jsx";
import { useBudgets } from "../../hooks/useBudgets.js";
import { useTheme } from "../../hooks/useTheme.js";
import { useHomeSummary } from "../../hooks/useHomeSummary.js";

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
                    <AppText variant="title">Ultimos movimientos</AppText>
                </View>
                <TransactionsFlatList transactions={recentTransactions}/>
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
        backgroundColor: theme.colors.surface,
        borderRadius: theme.radius.xl,
        padding: theme.spacing.md,
        shadowColor: theme.shadows.shadowColor,
        shadowOffset: theme.shadows.shadowOffset,
        shadowOpacity: theme.shadows.shadowOpacity,
        shadowRadius: theme.shadows.shadowRadius,
        elevation: theme.shadows.elevation,
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


