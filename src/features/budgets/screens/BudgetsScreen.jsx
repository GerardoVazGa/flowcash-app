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
import { OptionsBottomSheet } from "@components/ui/OptionsBottomSheet";

export function BudgetsScreen() {
    const modalRef = useRef(null)
    const optionsSheetRef = useRef(null)
    const selectedBudget = useRef(null)

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

    const handleLongPress = (budget) => {
        selectedBudget.current = budget
        optionsSheetRef.current?.present()
    }

    const handleBudgetEdit = () => {
        console.log("Edit budget:", selectedBudget.current)
    }

    const handleBudgetDelete = () => {
        console.log("Delete budget:", selectedBudget.current)
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
                            <FilterBar period={filters.period} onChange={updatePeriod} />
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
                        onLongPress={() => handleLongPress(item)}
                    />
                )}
                ItemSeparatorComponent={() => <View style={{height: theme.spacing.md}}/>}
                contentContainerStyle={styles.items}
                showsVerticalScrollIndicator={false}
                disableScrollViewPanResponder={true}
            />

            <BottomSheetModal 
                ref={modalRef}
                snapPoints={snapPoints}
                enablePanDownToClose
                enableDynamicSizing = {false}
                keyboardBehavior="interactive"
                keyboardBlurBehavior="restore"
                stackBehavior="push"
            >

                <FiltersBudgetProvider value={budgetValues}>
                    <BudgetFilterSheet onClose={handleCloseFilters}/>
                </FiltersBudgetProvider>

            </BottomSheetModal>

            <OptionsBottomSheet
                sheetRef={optionsSheetRef}
                options={[
                    { label: "Editar", icon: "pencil-outline", onPress: handleBudgetEdit },
                    { label: "Eliminar", icon: "trash-outline", onPress: handleBudgetDelete, destructive: true },
                ]}
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
    },
    filterRow: {
        flexDirection: "row",
        gap: theme.spacing.md
    }
})