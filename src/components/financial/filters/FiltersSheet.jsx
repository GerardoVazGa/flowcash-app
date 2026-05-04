import { BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { AppText } from "../../ui/AppText";
import { useTheme } from "../../../hooks/useTheme";
import { FilterOption } from "./FilterOption";
import { CategoryOption } from "./CategoryOption";
import { PeriodFilter } from "./PeriodFilter";
import { useFilters } from "../../../context/FiltersContext";

export function FiltersSheet() {
    const {theme} = useTheme()
    const styles = getStyles(theme)
    const {draftFilters, setDraftFilters} = useFilters()

    const handleCleanFilter = () => setFilters({})

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
    return(
        <BottomSheetScrollView style={styles.container}>
            <View style={styles.header}>
                <AppText variant="title">Filtrar Movimientos</AppText>
                <Pressable onPress={handleCleanFilter}>
                    <AppText variant="title" color="error">Limpiar</AppText>
                </Pressable>
            </View>

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
    )

}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: theme.spacing.lg,
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
        gap: theme.spacing.md
    },
})

