import { FlatList, StyleSheet, View } from "react-native";
import { AppText } from "../../../components/ui/AppText";
import { BudgetGlobalSummary } from "../components/BudgetGlobalSummary/BudgetGlobalSummary";
import { useTheme } from "../../../hooks/useTheme";
import { useBudgets } from "../hooks/useBudgets";
import { BudgetItem } from "../components/BudgetItem";

export function BudgetsScreen() {
    const { theme } = useTheme()
    const styles = getStyles(theme)
    const { budgets } = useBudgets()
    return (
        <View style = {styles.container}>

            <FlatList 
                data={budgets}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={() => (
                    <View style = {styles.header}>
                        <BudgetGlobalSummary />
                    </View>
                )}
                renderItem={({item}) => (
                    <BudgetItem 
                        budget={item}
                        showDelete = {false}
                    />
                )}
                ItemSeparatorComponent={() => <View style={{height: theme.spacing.md}}/>}
                contentContainerStyle={styles.items}

            />

        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        padding: theme.spacing.md,
        paddingBottom: theme.spacing.lg,
    },
    header: {
        marginBottom: theme.spacing.md
    },
    items: {
        gap: theme.spacing.sm
    }
})