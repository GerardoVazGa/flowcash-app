import { View, Text, ScrollView, StyleSheet} from "react-native";
import { Section } from "../../components/layouts/Section.jsx";
import { AppButton } from "../../components/ui/AppButton.jsx";
import { AppText } from "../../components/ui/AppText.jsx";
import { AppIcon } from "../../components/ui/AppIcon.jsx";
import { BalanceCard } from "../../components/financial/BalanceCard.jsx";
import { MetricCard } from "../../components/financial/MetricCard.jsx";
import { SPACING, RADIUS } from "../../constants/layout.js";
import { TransactionsList } from "../../components/financial/TransactionsList.jsx";
import { useFinances } from "../../hooks/useFinances.js";
import { BudgetItem } from "../../components/financial/BudgetItem.jsx";
import { useBudgets } from "../../hooks/useBudgets.js";
import { useTheme } from "../../hooks/useTheme.js";

export function HomeScreen(){
    const { theme } = useTheme();
    const styles = getStyles(theme);

    const {transactions, incomes, expenses, totalBalance} = useFinances()

    const {budgets} = useBudgets()
    
    return (
        <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
        >
            <BalanceCard totalBalance={totalBalance.toFixed(2)}/>
            <Section title="" style={styles.metricSection}>
                <MetricCard 
                    label="Ingresos" 
                    value={incomes.toFixed(2)} 
                    icon="trending-up-outline"
                    variant="income" 
                />
                <MetricCard 
                    label="Gastos" 
                    value={expenses.toFixed(2)} 
                    icon= "trending-down-outline"
                    variant="expense"
                />

            </Section>

            <Section style={styles.recentMovements}>
                <View style={styles.headerRecentMovements}>
                    <AppText variant="title">Ultimos movimientos</AppText>
                </View>
                <TransactionsList transactions={transactions}/>
            </Section>

            <Section style={styles.budgetSection}>
                <AppText variant="headline">Presupuesto</AppText>
                {
                    budgets.map((budget) => (
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
        padding: SPACING.lg,
        gap: SPACING.lg,
        paddingBottom: SPACING.xl
    },
    metricSection: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        gap: SPACING.md
    },
    recentMovements: {
        backgroundColor: theme.colors.surface,
        borderRadius: RADIUS.xl,
        padding: SPACING.md,
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
        paddingHorizontal: SPACING.md,
        paddingBottom: SPACING.md
    },
    budgetSection: {
        gap: SPACING.md
    }
})


