import { StyleSheet, View } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { BaseChip } from "../../ui/BaseChip";
import { PresetsPeriod, currentMonth, currentYear } from "../../../constants/periodFilters.js";
import { periodToDateRange } from "../../../utils/period/periodToDateRange.js";
import { AppText } from "../../ui/AppText";
import { YearPicker } from "./YearPicker";
import { MonthsGrid } from "./MonthsGrid";
import { useState, useMemo, useEffect } from "react";
import Animated, { 
    useSharedValue, 
    useAnimatedStyle, 
    withTiming,
} from "react-native-reanimated";
import { ANIMATION_PERIOD_CONFIG } from "../../../constants/animations";
import { useFiltersTransactionContext } from "../../../context/FiltersTransactionContext.js";

export function PeriodFilter() {
    const {draftFilters, applyPeriodPreset, enableCustomPeriod} = useFiltersTransactionContext()

    const { period } = draftFilters

    const [viewYear, setViewYear] = useState(period.year || currentYear)
    
    const {theme} = useTheme()
    const styles = getStyles(theme)

    const isCustomPeriod = period.preset === null

    const range = useMemo(() => (
        periodToDateRange(period)
    ), [period])

    const opacity = useSharedValue(0)
    const transalateY = useSharedValue(-20)

    useEffect(() => {
        if (isCustomPeriod) {
            opacity.value = withTiming(1, ANIMATION_PERIOD_CONFIG)
            transalateY.value = withTiming(0, ANIMATION_PERIOD_CONFIG)
        } else {
            opacity.value = withTiming(0, ANIMATION_PERIOD_CONFIG)
            transalateY.value = withTiming(-20, ANIMATION_PERIOD_CONFIG)
        }
    }, [isCustomPeriod])

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{translateY: transalateY.value}]
    }))

    return (
        <View style={styles.container}>
            <View style={styles.containerPresets}>
                {PresetsPeriod.map((periodPreset) => (
                    <BaseChip 
                        key={periodPreset.id}
                        label={periodPreset.title}
                        onPress={() => applyPeriodPreset(periodPreset.id)}
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
                <Animated.View style={[styles.customContainer,animatedStyle]}>
                    <AppText variant="label" color="textVariant">Año</AppText>
                    <YearPicker viewYear={viewYear} setViewYear={setViewYear}/>
                    <AppText variant="label" color="textVariant">Mes</AppText>
                    <MonthsGrid viewYear={viewYear} />
                </Animated.View>
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
    },
    customContainer: {
        gap: theme.spacing.md
    }
})