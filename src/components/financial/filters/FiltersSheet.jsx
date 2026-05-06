import { BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { AppText } from "../../ui/AppText";
import { AppButton } from "../../ui/AppButton";
import { useTheme } from "../../../hooks/useTheme";
import { FilterOption } from "./FilterOption";
import { CategoryOption } from "./CategoryOption";
import { PeriodFilter } from "./PeriodFilter";
import { useFilters } from "../../../context/FiltersContext";
import { DEFAULT_FILTERS } from "../../../constants/filters";
import { set } from "date-fns";

export function FiltersSheet({ onClose }) {
    const { theme } = useTheme()
    const styles = getStyles(theme)
    const { draftFilters, setDraftFilters, setFilters, filters } = useFilters()

    const handleApplyFilters = () => {
        setFilters(draftFilters)
        onClose()
    }

    const handleCancelFilters = () => {
        setDraftFilters(filters)
        onClose()
    }

    const handleCleanFilter = () => {
        setDraftFilters(DEFAULT_FILTERS)
    }

    const toggleCategory = (category) => {
        setDraftFilters((prev) => {
            const categoryExists = prev.category.includes(category)

            return {
                ...prev,
                category: categoryExists
                    ? prev.category.filter((categ) => categ !== category)
                    : [...prev.category, category]
            }
        })
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
                <AppText variant="label" color="textVariant">Periodo</AppText>

                <View style={styles.period}>
                    <AppText variant="title" color="textVariant">Rapido</AppText>
                    <PeriodFilter />
                </View>

                <AppText variant="label" color="textVariant">Categoría</AppText>

                <View>
                    <CategoryOption
                        title="comida"
                        selected={draftFilters.category.includes("comida")}
                        onPress={() => toggleCategory('comida')}
                    />

                    <CategoryOption
                        title="trabajo"
                        selected={draftFilters.category.includes("trabajo")}
                        onPress={() => toggleCategory('trabajo')}
                    />
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
                    <AppText variant="title">Cancelar</AppText>
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
    period: {
        gap: theme.spacing.md,
        marginBottom: theme.spacing.sm
    },
    actions: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "stretch",
        gap: theme.spacing.sm
    }
})

