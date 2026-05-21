import { CategoryOption } from "@components/financial/filters/CategoryOption";
import { FilterOption } from "@components/financial/filters/FilterOption";
import { FilterSection } from "@components/layouts/FilterSection";
import { AppButton } from "@components/ui/AppButton";
import { AppText } from "@components/ui/AppText";
import { CATEGORY_OPTIONS } from "@constants/categories.js";
import { BUDGET_SORT_OPTIONS } from "@features/budgets/constants/budgetSort";
import { BUDGET_STATUS_OPTIONS} from "@features/budgets/constants/budgetStatus";
import { useFiltersBudgetContext } from "@features/budgets/context/FiltersBudgetContext";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useTheme } from "@hooks/useTheme";
import { Pressable, StyleSheet, View } from "react-native";

export function BudgetFilterSheet({ onClose = () => { } }) {
    const { theme } = useTheme()
    const styles = getStyles(theme)

    const {
        draftFilters,
        updateStatus,
        updateSortBy,
        toggleCategory,
        cleanFilters,
        applyFilters,
        cancelFilters
    } = useFiltersBudgetContext()

    const handleApplyFilters = () => {
        applyFilters()
        onClose()
    }

    const handleCancelFilters = () => {
        cancelFilters()
        onClose()
    }

    const handleCleanFilter = () => {
        cleanFilters()
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <AppText variant="title">Filtrar Presupuestos</AppText>
                <Pressable
                    onPress={handleCleanFilter}
                >
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
                        BUDGET_STATUS_OPTIONS.map(({ value: status, label, icon }) => (
                            <FilterOption
                                key={status}
                                title={label}
                                iconName={icon}
                                selected={status === draftFilters.status}
                                onPress={() => updateStatus(status)}
                            />
                        ))
                    }
                </FilterSection>

                <FilterSection title="Orden">
                    {
                        BUDGET_SORT_OPTIONS.map(({ value: sortby, label, icon }) => (
                            <FilterOption
                                key={sortby}
                                title={label}
                                iconName={icon}
                                selected={sortby === draftFilters.sortBy}
                                onPress={() => updateSortBy(sortby)}
                            />
                        ))
                    }

                </FilterSection>

                <FilterSection title="Categoría">
                    {
                        CATEGORY_OPTIONS.map(({ value: category, label }) => (
                            <CategoryOption
                                key={category}
                                title={label}
                                selected={draftFilters.category.includes(category)}
                                onPress={() => toggleCategory(category)}
                            />
                        ))
                    }

                </FilterSection>

                <View style={styles.actions}>
                    <AppButton
                        onAction={handleCancelFilters}
                        size="md"
                        variant="outline"
                        rounded="lg"
                        backgroundColor="error"
                        style={{ flex: 1 }}
                    >
                        <AppText variant="title" color="error">Cancelar</AppText>
                    </AppButton>
                    <AppButton
                        onAction={handleApplyFilters}
                        size="md"
                        rounded="lg"
                        fullwidth
                        variant="gradient"
                        style={{ flex: 2 }}
                    >
                        <AppText variant="title" color="onPrimary">Aplicar</AppText>
                    </AppButton>

                </View>

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
    },
    actions: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "stretch",
        gap: theme.spacing.sm
    }
})