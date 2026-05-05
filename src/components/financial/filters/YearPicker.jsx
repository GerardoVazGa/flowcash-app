import { ScrollView, StyleSheet, View } from "react-native";
import { useTheme } from "../../../hooks/useTheme.js";
import { useFinances } from "../../../hooks/useFinances.js";
import { getAvailableYears } from "../../../utils/periodFiltersUtils.js";
import { useMemo } from "react";
import { BaseChip } from "../../ui/BaseChip.jsx";
import { set } from "date-fns";
import { useFilters } from "../../../context/FiltersContext.js";

export function YearPicker({ viewYear, setViewYear }) {
    const {theme} = useTheme()
    const {transactions} = useFinances()
    const {draftFilters, setDraftFilters} = useFilters()
    const { period } = draftFilters

    const styles = getStyles(theme)

    const years = useMemo(() => {
        return getAvailableYears(transactions)
    }, [transactions])

    const handleSelectedYear = (selectedYear) => {
        setViewYear(selectedYear)

        setDraftFilters(prev => ({
            ...prev,
            period: {
                ...prev.period,
                month: null,
                year: selectedYear
            }
        }))
    }
    return(
        <View>
            <ScrollView
                horizontal
                contentContainerStyle={styles.container}
                showsHorizontalScrollIndicator={false}
            >
                {years.map((year) => (
                    <BaseChip 
                        key={year}
                        label={year}
                        selected={viewYear=== year}
                        onPress={() => handleSelectedYear(year)}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        gap: theme.spacing.sm
    }
})