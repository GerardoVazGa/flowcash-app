import { StyleSheet, Text, View } from "react-native";
import { TransactionsSummary } from "../../components/financial/summary/TransactionsSummary";
import { useTheme } from "../../hooks/useTheme";
import { SearchBar } from "../../components/ui/SearchBar";
import { useState, useMemo, useRef, use } from "react";
import { FiltersSheet } from "../../components/financial/filters/FiltersSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { IconButton } from "../../components/ui/IconButton";
import { currentYear, currentMonth } from "../../constants/periodFilters";
import { useTransactions } from "../../hooks/transactions/useTransactions";
import { useRawTransactions } from "../../hooks/transactions/useRawTransactions";
import { getMonth } from "date-fns";
import { FiltersProvider } from "../../context/FiltersContext";
import { useMonthsWithData } from "../../hooks/useMonthsWithData";
import { DEFAULT_FILTERS } from "../../constants/filters";
import { TransactionGroupList } from "../../components/financial/Transactions/TransactionGroupList";

export function TransactionsScreen() {
    const [text, setText] = useState("")
    const modalRef = useRef(null)
    const snapPoints = useMemo(() => ["75%"], [])
    const [filters, setFilters] = useState(DEFAULT_FILTERS)
    const [draftFilters, setDraftFilters] = useState(DEFAULT_FILTERS)
    const { transactions, incomes, expenses, totalBalance } = useTransactions(filters)
    const { rawTransactions } = useRawTransactions()

    const {theme} = useTheme()
    const styles = getStyles(theme)

    const monthsWithData = useMonthsWithData(rawTransactions)

    const handleChangeText = (text) => setText(text)

    const handleOpenFilters = () => {
        setDraftFilters(prev => {
            return {
                ...filters
            }
        })
        modalRef.current?.present()
    }

    const handleCloseFilters = () => {
        modalRef.current?.dismiss()
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <SearchBar value={text} onChange={handleChangeText} />
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

            <TransactionGroupList transactions={transactions}/>

            <BottomSheetModal
                ref={modalRef}
                snapPoints={snapPoints}
                enablePanDownToClose
                enableDynamicSizing = {false}
            >
                <FiltersProvider 
                    value={
                        {
                            monthsWithData,
                            filters,
                            setFilters,
                            draftFilters,
                            setDraftFilters
                        }
                    }
                >
                    <FiltersSheet onClose={handleCloseFilters}/>
                </FiltersProvider>
            </BottomSheetModal>

        </View>
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

