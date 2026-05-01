import { StyleSheet, View } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { BaseChip } from "../../ui/BaseChip";
import { PresetsPeriod, currentMonth, currentYear } from "../../../utils/periodFiltersUtils";
import { AppText } from "../../ui/AppText";

export function PeriodFilter({period, setFilters}){
    const {theme} = useTheme()
    const styles = getStyles(theme)

    const isCustomPeriod = period.preset === null

    const handlePresetSelect = (preset) => {
        let month = currentMonth
        let year = currentYear

        if(preset === "last_7_days") {
            month = null
            year = null
        }

        if(preset === "this_year") {
            month = null
        }
        
        setFilters(prev => ({
            ...prev,
            period: {
                preset,
                month,
                year
            }
        }))
    }

    const enableCustomPeriod = () => {
        setFilters(prev => ({
            ...prev,
            period: {
                preset: null,
                month: currentMonth,
                year: currentYear
            }
        }))
    }
    return (
        <View>
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
                    period.preset 
                        ? period.preset
                        : period.month !== null 
                            ? `${period.month} ${period.year}` 
                            : `${period.year}` 
                }
            </AppText>

            {isCustomPeriod && 
                <AppText variant="label" color="textVariant">
                    periodo personalizado
                </AppText>
            }
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    containerPresets: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: theme.spacing.sm
    }
})