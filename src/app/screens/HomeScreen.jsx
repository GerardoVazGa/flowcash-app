import { View, Text, ScrollView, StyleSheet} from "react-native";
import { Section } from "../../components/layouts/Section.jsx";
import { AppButton } from "../../components/ui/AppButton.jsx";
import { AppText } from "../../components/ui/AppText.jsx";
import { AppIcon } from "../../components/ui/AppIcon.jsx";
import { BalanceCard } from "../../components/financial/BalanceCard.jsx";
import { MetricCard } from "../../components/financial/MetricCard.jsx";
import { COLORS } from "../../constants/colors.js";
import { SPACING, RADIUS } from "../../constants/layout.js";
import { TransactionsList } from "../../components/financial/TransactionsList.jsx";
import { useFinances } from "../../hooks/useFinances.js";

export function HomeScreen(){

    const {transactions, incomes, expenses, totalBalance} = useFinances()
    
    return (
        <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
        >
            <BalanceCard totalBalance={totalBalance.toFixed(2)}/>
            <Section title="Metricas" style={styles.metricSection}>
                <MetricCard 
                    label="Ingresos" 
                    value={incomes.toFixed(2)} 
                    icon= {
                            <AppIcon 
                                name="trending-up-outline" 
                                size={14} 
                                background="primaryContainer" 
                                color = "onPrimary"
                                style={styles.icon}
                            />
                        } 
                    variant="total" 
                />
                <MetricCard 
                    label="Gastos" 
                    value={expenses.toFixed(2)} 
                    icon= {
                            <AppIcon 
                                name="trending-down-outline" 
                                size={14} 
                                background="primaryContainer" 
                                color = "onPrimary"
                                style={styles.icon}
                            />
                        } 
                    variant="total"
                />

            </Section>

            <Section title="Movimientos Recientes">
                <TransactionsList transactions={transactions}/>
            </Section>


            
            {/* <AppButton text="Click me" onAction={() => alert("Click")} styles={styles} size="sm" rounded="lg"/> */}
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
    icon: {
        borderRadius: RADIUS.full,
        padding: SPACING.sm,
    }
})


