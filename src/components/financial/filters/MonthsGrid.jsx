import { StyleSheet, View } from 'react-native'
import { useTheme } from '../../../hooks/useTheme.js'
import { getAvailableMonths } from '../../../utils/period/getAvailableMonths.js'
import { useMemo } from 'react'
import { BaseChip } from '../../ui/BaseChip.jsx'
import { MonthsCeil } from './MonthsCeil.jsx'
import { currentMonth, currentYear } from '../../../constants/periodFilters.js'
import { useFilters } from '../../../context/FiltersContext.js'

export function MonthsGrid({ viewYear }) {
    const {theme} = useTheme()
    const styles = getStyles(theme)
    const {monthsWithData, draftFilters, setDraftFilters} = useFilters()

    const { period } = draftFilters

    const months = useMemo(() => {
        return getAvailableMonths(viewYear)
    }, [viewYear])

    const isMonthSelected = (selectedMonth) => {
        return (
            period.preset === null &&
            period.month === selectedMonth &&
            period.year === viewYear
        )
    }

    const hasData = (month, year) => {
        return monthsWithData?.[year]?.has(month) ?? false
    }

    const handleSelectedMonth = (month) => {
        setDraftFilters((prev) => ({
            ...prev,
            period: {
                ...prev.period,
                month,
                year: viewYear
            }
        }))
    }

    return (
        <View style={styles.container}>
            {months.map((month) => (
                <MonthsCeil 
                    key={month.id}
                    month={month.id}
                    year={viewYear}
                    selected={isMonthSelected(month.id)}
                    isCurrentMonth={
                        viewYear === currentYear &&
                        month.id === currentMonth
                    }
                    hasData = {hasData(month.id, viewYear)}
                    onPress={handleSelectedMonth}
                    isDisabled={month.disable}
                />
            ))}
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: theme.spacing.sm,
        alignItems: "center"
    }
})