import { FlatList, StyleSheet, View } from "react-native";
import { BudgetGlobalSummary } from "../components/BudgetGlobalSummary/BudgetGlobalSummary";
import { useTheme } from "@hooks/useTheme";
import { useBudgets } from "../hooks/useBudgets";
import { BudgetItem } from "../components/BudgetItem";
import { FilterBar } from "../components/budgetFilters/FilterBar";

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
                        <FilterBar />
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
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginBottom: theme.spacing.md,
        gap: theme.spacing.md
    },
    items: {
        padding: theme.spacing.md,
        paddingBottom: theme.spacing.lg,
        gap: theme.spacing.sm,
    }
})