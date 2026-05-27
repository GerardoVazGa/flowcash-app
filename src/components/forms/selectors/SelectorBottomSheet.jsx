import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useTheme } from "@hooks/useTheme";
import { useMemo } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SelectOption } from "./selectOption";

export function SelectorBottomSheet({sheetRef, options, selected, onSelect}) {
    const snapPoints = useMemo(() => ["50%", "75%"], [])
    const {theme} = useTheme()
    const styles = getStyles(theme)

    const handleDismiss = (value) => {
        onSelect(value)
        sheetRef.current?.dismiss()
    }

    return (
        <BottomSheetModal
            ref={sheetRef}
            snapPoints={snapPoints}
            style={styles.container}
        >
            <FlatList 
                data = {options}
                keyExtractor={(item) => item.value}
                renderItem={({item}) => (
                    <SelectOption 
                        label={item.label}
                        icon={item.icon}
                        selected={item.value === selected}
                        onPress={() => handleDismiss(item.value)}
                    />
                )}
            />
        </BottomSheetModal>
    )
}

const getStyles = (theme) => StyleSheet.create({

})