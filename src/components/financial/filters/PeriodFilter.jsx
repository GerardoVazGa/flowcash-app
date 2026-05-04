import { StyleSheet, View } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { BaseChip } from "../../ui/BaseChip";
import { PresetsPeriod, currentMonth, currentYear } from "../../../constants/periodFilters.js";
import { periodToDateRange } from "../../../utils/periodFiltersUtils.js";
import { AppText } from "../../ui/AppText";
import { YearPicker } from "./YearPicker";
import { MonthsGrid } from "./MonthsGrid";
import { useState, useMemo } from "react";
import { vi } from "date-fns/locale";
import { useFilters } from "../../../context/FiltersContext.js";

export function PeriodFilter() {
    const {draftFilters, setDraftFilters} = useFilters()
    const { period } = draftFilters

    const [viewYear, setViewYear] = useState(period.year || currentYear)
    
    const {theme} = useTheme()
    const styles = getStyles(theme)

    const isCustomPeriod = period.preset === null

    const range = useMemo(() => (
        periodToDateRange(period)
    ), [period])

    const handlePresetSelect = (preset) => {
        setDraftFilters(prev => ({
            ...prev,
            period: {
                preset,
                month: null,
                year: currentYear
            }
        }))
    }

    const enableCustomPeriod = () => {
        setDraftFilters(prev => ({
            ...prev,
            period: {
                preset: null,
                month: currentMonth,
                year: currentYear
            }
        }))
    }
    return (
        <View style={styles.container}>
            <View style={styles.containerPresets}>
                {PresetsPeriod.map((periodPreset) => (
                    <BaseChip 
                        key={periodPreset.id}
                        label={periodPreset.title}
                        onPress={() => handlePresetSelect(periodPreset.id)}
                        selected={period.preset === periodPreset.id}
                    />
                ))}

                <BaseChip 
                    label="Personalizado"
                    onPress={enableCustomPeriod}
                    selected={isCustomPeriod}
                />
            </View>

            <AppText variant="label" color="textVariant">
                {
                    range.label || viewYear
                }
            </AppText>

            {isCustomPeriod && 
                <>
                    <AppText variant="label" color="textVariant">Año</AppText>
                    <YearPicker viewYear={viewYear} setViewYear={setViewYear}/>
                    <AppText variant="label" color="textVariant">Mes</AppText>
                    <MonthsGrid viewYear={viewYear} />
                </>
            }
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        gap: theme.spacing.sm
    },
    containerPresets: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: theme.spacing.sm
    }
})