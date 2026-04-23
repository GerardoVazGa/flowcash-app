import { View, Text, ScrollView, StyleSheet} from "react-native";
import { Section } from "../../components/layouts/Section.jsx";
import { AppButton } from "../../components/ui/AppButton.jsx";
import { AppText } from "../../components/ui/AppText.jsx";
import { AppIcon } from "../../components/ui/AppIcon.jsx";
import { BalanceCard } from "../../components/financial/BalanceCard.jsx";
import { MetricCard } from "../../components/financial/MetricCard.jsx";
import { COLORS } from "../../constants/colors.js";
import { SPACING, RADIUS } from "../../constants/layout.js";
import THEME from "../../constants/theme.js";
import { TransactionsList } from "../../components/financial/TransactionsList.jsx";
import { useFinances } from "../../hooks/useFinances.js";
import { BudgetItem } from "../../components/financial/BudgetItem.jsx";
import { useBudgets } from "../../hooks/useBudgets.js";

const currentTheme = THEME.light

export function HomeScreen(){

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

const styles = StyleSheet.create({
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
        backgroundColor: COLORS.light.surface,
        borderRadius: RADIUS.xl,
        padding: SPACING.md,
        shadowColor: currentTheme.shadows.shadowColor,
        shadowOffset: currentTheme.shadows.shadowOffset,
        shadowOpacity: currentTheme.shadows.shadowOpacity,
        shadowRadius: currentTheme.shadows.shadowRadius,
        elevation: currentTheme.shadows.elevation,
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


