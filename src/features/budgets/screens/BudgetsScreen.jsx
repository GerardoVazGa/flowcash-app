import { FlatList, StyleSheet, View } from "react-native";
import { BudgetGlobalSummary } from "../components/BudgetGlobalSummary/BudgetGlobalSummary";
import { useTheme } from "@hooks/useTheme";
import { useBudgets } from "../hooks/useBudgets";
import { BudgetItem } from "../components/BudgetItem";
import { FilterBar } from "../components/budgetFilters/FilterBar";
import { useBudgetFilters } from "../hooks/useBudgetFilters";
import { IconButton } from "@components/ui/IconButton";
import { useMemo, useRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { BudgetFilterSheet } from "../components/budgetFilters/BudgetFilterSheet";
import { FiltersBudgetProvider } from "../context/FiltersBudgetContext";

export function BudgetsScreen() {
    const modalRef = useRef(null)
    const snapPoints = useMemo(() => ["90%"], [])

    const { theme } = useTheme()
    const styles = getStyles(theme)
    const budgetsFilters = useBudgetFilters()
    const { filters, updatePeriod, openFilters} = budgetsFilters

    const budgetValues = useMemo(() => ({
        ...budgetsFilters,
    }), [budgetsFilters])

    const { budgets } = useBudgets(filters)

    const handlerOpenFilters = () => {
        openFilters()
        modalRef.current?.present()
    }

    const handleCloseFilters = () => {
        modalRef.current?.dismiss()
    }

    return (
        <View style = {styles.container}>

            <FlatList 
                data={budgets}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={() => (
                    <View style = {styles.header}>
                        <BudgetGlobalSummary />
                        <View style={styles.filterRow}>
                            <FilterBar onPeriodChange={updatePeriod} />
                            <IconButton 
                                icon="filter-outline"
                                background="transparent"
                                colorIcon="primary"
                                onPress={handlerOpenFilters}
                            />
                        </View>
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

            <BottomSheetModal 
                ref={modalRef}
                snapPoints={snapPoints}
                enablePanDownToClose
                enableDynamicSizing = {false}
            >

                <FiltersBudgetProvider value={budgetValues}>
                    <BudgetFilterSheet onClose={handleCloseFilters}/>
                </FiltersBudgetProvider>

            </BottomSheetModal>

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
    },
    filterRow: {
        flexDirection: "row",
        gap: theme.spacing.md
    }
})