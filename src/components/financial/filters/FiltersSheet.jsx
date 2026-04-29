import { BottomSheetView } from "@gorhom/bottom-sheet";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { AppText } from "../../ui/AppText";
import { useTheme } from "../../../hooks/useTheme";
import { FilterOption } from "./FilterOption";
import { CategoryOption } from "./CategoryOption";

export function FiltersSheet({filters, setFilters}) {
    const {theme} = useTheme()
    const styles = getStyles(theme)

    const handleCleanFilter = () => setFilters({})

    const toggleCategory = (category) => {
        setFilters((prev) => {
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
        <BottomSheetView style={styles.container}>
            <View style={styles.header}>
                <AppText variant="title">Filtrar Movimientos</AppText>
                <Pressable onPress={handleCleanFilter}>
                    <AppText variant="title" color="error">Limpiar</AppText>
                </Pressable>
            </View>

            <AppText variant="label" color="textVariant">Periodo</AppText>

            <View>
                <FilterOption
                    title="Todo el historial"
                    subtitle="Todos los registros"
                    iconName="list-outline"
                    selected={filters.period.type === "all"}
                    onPress={() =>
                        setFilters((p) => ({
                        ...p,
                        period: { type: "all" }
                        }))
                    }
                />

                <FilterOption
                    title="Por mes"
                    subtitle="Por mes"
                    iconName="calendar-outline"
                    selected={filters.period.type === "month"}
                    onPress={() =>
                        setFilters((p) => ({
                        ...p,
                        period: { type: "month" }
                        }))
                    }
                />
                


            </View>

            <AppText variant="label" color="textVariant">Categoría</AppText>

            <View>
                <CategoryOption 
                    title="comida"
                    selected={filters.category.includes("comida")}
                    onPress={() => toggleCategory('comida')}
                />

                <CategoryOption 
                    title="trabajo"
                    selected={filters.category.includes("trabajo")}
                    onPress={() => toggleCategory('trabajo')}
                />
            </View>


        </BottomSheetView>
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
    }
})

