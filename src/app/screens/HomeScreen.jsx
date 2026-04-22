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

export function HomeScreen(){

    const transactions = [
        {
            id: 1,
            label: "Transferencia recibida",
            category: "Transferencia",
            account: "Cuenta 1",
            amount: 1000,
            type: "income",
            date: "2026-04-21",
        },
        {
            id: 2,
            label: "Supermercado",
            category: "Alimentación",
            account: "Cuenta 1",
            amount: 350,
            type: "expense",
            date: "2026-04-20",
        },
        {
            id: 3,
            label: "Pago de nómina",
            category: "Trabajo",
            account: "Cuenta 1",
            amount: 5000,
            type: "income",
            date: "2026-04-19",
        },
        {
            id: 4,
            label: "Transporte público",
            category: "Transporte",
            account: "Cuenta 1",
            amount: 45,
            type: "expense",
            date: "2026-04-19",
        },
        {
            id: 5,
            label: "Suscripción Netflix",
            category: "Entretenimiento",
            account: "Cuenta 1",
            amount: 199,
            type: "expense",
            date: "2026-04-18",
        },
    ]
    
    
    return (
        <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.content}
        >
            <BalanceCard/>
            <Section title="Metricas" style={styles.metricSection}>
                <MetricCard 
                    label="Ingresos" 
                    value="$124,560.85" 
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
                    value="$124,560.85" 
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


