import { ScrollView, StyleSheet } from "react-native";
import { BUDGETS_PERIODS_OPTIONS } from "../../constants/budgetPeriod.js";
import { BaseChip } from "@components/ui/BaseChip";
import { useTheme } from "@hooks/useTheme.js";

export function FilterBar({period = "ALL", onChange = () => {}}) {
    const { theme } = useTheme()
    const styles = getStyles(theme)

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle = {styles.content}
        >
            <BaseChip 
                label="Todos" 
                selected={period === "ALL"}
                onPress={() => onChange("ALL")}
            />
            {
                BUDGETS_PERIODS_OPTIONS.map(periodBudget => (
                    <BaseChip 
                        key={periodBudget.value}
                        label={periodBudget.label}
                        selected={period === periodBudget.value}
                        onPress={() => onChange(periodBudget.value)}
                    />
                ))
            }


        </ScrollView>
    )
}

const getStyles = (theme) => StyleSheet.create({
    content: {
        gap: theme.spacing.sm
    }
})