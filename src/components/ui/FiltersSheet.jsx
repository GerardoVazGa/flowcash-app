import { BottomSheetView } from "@gorhom/bottom-sheet";
import { View, Text, StyleSheet } from "react-native";

export function FiltersSheet({filters, setFilters}) {
    return(
        <BottomSheetView style={styles.container}>
            <Text>Filters</Text>
        </BottomSheetView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})

