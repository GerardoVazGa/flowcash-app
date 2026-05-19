import { CategoryOption } from "@components/financial/filters/CategoryOption";
import { FilterOption } from "@components/financial/filters/FilterOption";
import { FilterSection } from "@components/layouts/FilterSection";
import { AppText } from "@components/ui/AppText";
import { CATEGORY_OPTIONS } from "@constants/filters";
import { BUDGET_SORT_OPTIONS } from "@features/budgets/constants/budgetSort";
import { BUDGET_STATUS_OPTIONS} from "@features/budgets/constants/budgetStatus";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useTheme } from "@hooks/useTheme";
import { Pressable, StyleSheet, View } from "react-native";

export function BudgetFilterSheet() {
    const { theme } = useTheme()
    const styles = getStyles(theme)

    return(
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <AppText variant="title">Filtrar Presupuestos</AppText>
                <Pressable >
                    <AppText variant="title" color="error">Limpiar</AppText>
                </Pressable>
            </View>

            <BottomSheetScrollView
                style={styles.scroll}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <FilterSection title="Estado">
                    {
                        BUDGET_STATUS_OPTIONS.map(({value, label, icon}) => (
                            <FilterOption 
                                key={value}
                                title={label}
                                iconName={icon}
                                selected={value === "HEALTHY"}
                            />
                        ))
                    }
                </FilterSection>
                
                <FilterSection title="Orden">
                    {
                        BUDGET_SORT_OPTIONS.map(({value, label, icon}) => (
                            <FilterOption 
                                key={value}
                                title={label}
                                iconName={icon}
                                selected={value === "closest_to_limit"}
                            />
                        ))
                    }

                </FilterSection>

                <FilterSection title="Categoría">
                    {
                        CATEGORY_OPTIONS.map(({value, label}) => (
                            <CategoryOption 
                                key={value}
                                title={label}
                                selected={true}
                                
                            />
                        ))
                    }

                </FilterSection>

            </BottomSheetScrollView>

        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingHorizontal: theme.spacing.lg,
        paddingBottom: theme.spacing.md
    },
    scroll: {
        flex: 1,
    },
    content: {
        paddingVertical: theme.spacing.md,
        gap: theme.spacing.md
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: theme.spacing.md
    }
})