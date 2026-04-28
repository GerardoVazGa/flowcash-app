import { StyleSheet, Text, View } from "react-native";
import { TransactionsSummary } from "../../components/financial/TransactionsSummary";
import { useTheme } from "../../hooks/useTheme";
import { SearchBar } from "../../components/ui/SearchBar";
import { useState, useMemo, useRef } from "react";
import { FiltersSheet } from "../../components/ui/FiltersSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { IconButton } from "../../components/ui/IconButton";

export function TransactionsScreen() {
    const [text, setText] = useState("")
    const modalRef = useRef(null)
    const snapPoints = useMemo(() => ["50%", "75%"], [])
    const [filters, setFilters] = useState({
        type: "income",
        category: "all",
        period: {
            type: "month",
            value: 1
        }
    })

    const {theme} = useTheme()
    const styles = getStyles(theme)

    const handleChangeText = (text) => setText(text)

    const handleOpenFilters = () => {
        console.log(modalRef.current);
        modalRef.current?.present()
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
                income={1000}
                expense={500}
                balance={500}
            />

            <BottomSheetModal
                ref={modalRef}
                snapPoints={snapPoints}
                enablePanDownToClose
                enableDynamicSizing = {false}
            >
                <FiltersSheet 
                    filters={filters} 
                    setFilters={setFilters}
                />
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

