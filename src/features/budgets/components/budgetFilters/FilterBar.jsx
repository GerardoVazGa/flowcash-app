import { ScrollView, StyleSheet } from "react-native";
import { BUDGETS_PERIODS_OPTIONS } from "../../constants/budgetPeriod.js";
import { BaseChip } from "@components/ui/BaseChip";
import { useTheme } from "@hooks/useTheme.js";

export function FilterBar({filters = {}, onChange = () => {}}) {
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
                selected={filters.period === "ALL"}
            />
            {
                BUDGETS_PERIODS_OPTIONS.map(period => (
                    <BaseChip 
                        key={period.value}
                        label={period.label}
                        selected={"MONTHLY"=== period.value}
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