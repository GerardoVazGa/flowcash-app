import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useTheme } from "@hooks/useTheme";
import { useMemo } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SelectOption } from "./SelectOption";

export function SelectorBottomSheet({sheetRef, options, selected, onSelect, title}) {
    const snapPoints = useMemo(() => ["75%"], [])
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
            enablePanDownToClose
            enableDynamicSizing = {false}
            stackBehavior="push"
            style={styles.container}
        >
            <View style={styles.container}>

                {
                    title && <AppText variant="title" color="text">{title}</AppText>
                }

                <FlatList
                    data={options}
                    keyExtractor={(item) => item.value}
                    renderItem={({ item }) => (
                        <SelectOption
                            label={item.label}
                            icon={item.icon}
                            selected={item.value === selected}
                            onPress={() => handleDismiss(item.value)}
                        />
                    )}
                    contentContainerStyle={styles.content}
                />
            </View>
        </BottomSheetModal>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: theme.spacing.md,
        paddingHorizontal: theme.spacing.sm
    },
    content: {
        paddingVertical: theme.spacing.sm,
        gap: theme.spacing.sm
    }
})