import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { useMemo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AppIcon } from "./AppIcon";
import { AppText } from "./AppText";
import { useTheme } from "@hooks/useTheme";

export function OptionsBottomSheet({sheetRef, options = []}) {
    const snapPoints = useMemo(() => ["25%"], [])

    const {theme} = useTheme()
    const styles = getStyles(theme)

    return (
        <BottomSheetModal
            ref={sheetRef}
            snapPoints={snapPoints}
            enablePanDownToClose
            enableDynamicSizing={false}
            stackBehavior="push"
            keyboardBehavior="interactive"
            keyboardBlurBehavior="restore"
        >
            <BottomSheetView
                style={styles.container}
            >
                {options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.option}
                        onPress={() => {
                            option.onPress()
                            sheetRef.current?.dismiss()
                        }}
                    >
                        <AppIcon 
                            name={option.icon}
                            size={20}
                            color={option.destructive ? "error" : "text"}
                        />
                        <AppText 
                            variant="title"
                            color={option.destructive ? "error" : "text"}
                        >
                            {option.label}
                        </AppText>
                    </TouchableOpacity>
                ))}

            </BottomSheetView>

        </BottomSheetModal>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: theme.spacing.lg,
        paddingVertical: theme.spacing.md,
        gap: theme.spacing.sm,
    },
    option: {
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing.md,
        paddingVertical: theme.spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.outline,
    },

})