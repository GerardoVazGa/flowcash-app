import { StyleSheet, Text, View } from "react-native";
import { TransactionsSummary } from "../../components/financial/summary/TransactionsSummary";
import { useTheme } from "../../hooks/useTheme";
import { useState, useMemo, useRef } from "react";
import { FiltersSheet } from "../../components/financial/filters/FiltersSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { IconButton } from "../../components/ui/IconButton";
import { useTransactions } from "../../hooks/transactions/useTransactions";
import { useRawTransactions } from "../../hooks/transactions/useRawTransactions";
import { useMonthsWithData } from "../../hooks/useMonthsWithData";
import { TransactionGroupList } from "../../components/financial/Transactions/TransactionGroupList";
import { FiltersTrasactionProvider } from "../../context/FiltersTransactionContext";
import { useFiltersTransaction } from "../../hooks/transactions/useFiltersTransaction";
import { SearchBarFilter } from "../../components/financial/filters/SearchBarFilter";

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

                <TransactionGroupList transactions={transactions} />

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

