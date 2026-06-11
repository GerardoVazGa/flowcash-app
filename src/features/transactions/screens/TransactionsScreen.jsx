import { StyleSheet, Text, View } from "react-native";
import { TransactionsSummary } from "../components/summary/TransactionsSummary.jsx";
import { useTheme } from "@hooks/useTheme";
import { useMemo, useRef } from "react";
import { FiltersSheet } from "../components/filters/FiltersSheet.jsx";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { IconButton } from "@components/ui/IconButton.jsx";
import { useTransactions } from "../hooks/useTransactions.js";
import { useRawTransactions } from "../hooks/useRawTransactions.js";
import { useMonthsWithData } from "../hooks/useMonthsWithData.js";
import { TransactionGroupList } from "../components/transactions/TransactionGroupList.jsx";
import { FiltersTrasactionProvider } from "../context/FiltersTransactionContext.js";
import { useFiltersTransaction } from "../hooks/useFiltersTransaction";
import { SearchBarFilter } from "../components/filters/SearchBarFilter.jsx";

export function TransactionsScreen() {
    const modalRef = useRef(null)
    const snapPoints = useMemo(() => ["75%"], [])
    const transactionFilters = useFiltersTransaction()
    const { filters, openFilters } = transactionFilters

    const { transactions, incomes, expenses, totalBalance } = useTransactions(filters)
    const { rawTransactions } = useRawTransactions()

    const { theme } = useTheme()
    const styles = getStyles(theme)

    const monthsWithData = useMonthsWithData(rawTransactions)

    const values = useMemo(() => ({
        ...transactionFilters,
        monthsWithData
    }), [transactionFilters, monthsWithData])

    const handleOpenFilters = () => {
        openFilters()
        modalRef.current?.present()
    }

    const handleCloseFilters = () => {
        modalRef.current?.dismiss()
    }

    const handleEditTransaction = (transaction) => {
        console.log("Edit transaction:", transaction)
    }

    const handleDeleteTransaction = (transaction) => {
        console.log("Delete transaction:", transaction)
    }

    return (
        <FiltersTrasactionProvider value={values}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <SearchBarFilter />
                    <IconButton
                        icon="filter-outline"
                        background="transparent"
                        colorIcon="primary"
                        onPress={handleOpenFilters}
                    />
                </View>
                <TransactionsSummary
                    income={incomes}
                    expense={expenses}
                    balance={totalBalance}
                />

                <TransactionGroupList 
                    transactions={transactions} 
                    onEdit={handleEditTransaction}
                    onDelete={handleDeleteTransaction}
                />

                <BottomSheetModal
                    ref={modalRef}
                    snapPoints={snapPoints}
                    enablePanDownToClose
                    enableDynamicSizing={false}
                >
                    <FiltersTrasactionProvider
                        value={
                            values
                        }
                    >
                        <FiltersSheet onClose={handleCloseFilters} />
                    </FiltersTrasactionProvider>
                </BottomSheetModal>

            </View>
        </FiltersTrasactionProvider>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.surface,
        padding: theme.spacing.md,
        gap: theme.spacing.lg,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: theme.spacing.xs,
        paddingVertical: theme.spacing.sm,
        gap: theme.spacing.md,

    }
})

