import { BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { AppText } from "../../ui/AppText";
import { AppButton } from "../../ui/AppButton";
import { useTheme } from "../../../hooks/useTheme";
import { FilterOption } from "./FilterOption";
import { CategoryOption } from "./CategoryOption";
import { PeriodFilter } from "./PeriodFilter";
import { DEFAULT_FILTERS, TYPE_OPTIONS, CATEGORY_OPTIONS } from "../../../constants/filters";
import { useFiltersTransactionContext } from "../../../context/FiltersTransactionContext";

export function FiltersSheet({ onClose }) {
    const { theme } = useTheme()
    const styles = getStyles(theme)
    const {draftFilters, applyType, applyFilters, cleanFilters, cancelFilters, toggleCategory } = useFiltersTransactionContext()

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
                <AppText variant="title">Filtrar Movimientos</AppText>
                <Pressable onPress={handleCleanFilter}>
                    <AppText variant="title" color="error">Limpiar</AppText>
                </Pressable>
            </View>

            <BottomSheetScrollView
                style={styles.scroll}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <AppText variant="label" color="textVariant">Tipo</AppText>

                <View style={styles.type}>
                    {TYPE_OPTIONS.map((option) => (
                        <FilterOption
                            key={option.value}
                            title={option.label}
                            iconName={option.icon}
                            onPress={() => applyType(option.value)}
                            selected={draftFilters.type === option.value}
                        />
                    ))}
                </View>

                <AppText variant="label" color="textVariant">Periodo</AppText>

                <View style={styles.period}>
                    <AppText variant="title" color="textVariant">Rapido</AppText>
                    <PeriodFilter />
                </View>

                <AppText variant="label" color="textVariant">Categoría</AppText>

                <View style={styles.categories}>
                    {CATEGORY_OPTIONS.map(category => (
                        <CategoryOption 
                            key={category.value}
                            title={category.label}
                            selected={draftFilters.category.includes(category.value)}
                            onPress={() => toggleCategory(category.value)}
                        />
                    ))}
                </View>
            </BottomSheetScrollView>

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
    type: {
        gap: theme.spacing.sm
    },
    period: {
        gap: theme.spacing.md,
        marginBottom: theme.spacing.sm
    },
    categories: {
        gap: theme.spacing.sm
    },
    actions: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "stretch",
        gap: theme.spacing.sm
    }
})

