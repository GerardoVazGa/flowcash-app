import { AppText } from "@components/ui/AppText";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useTheme } from "@hooks/useTheme";
import App from "App";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";

export function CalendarBottomSheet({
    sheetRef,
    selectedDate,
    onSelectDay
}) {
    const snapPoints = useMemo(() => ["50%", "75%"], [])
    const { theme } = useTheme()
    const styles = getStyles(theme)

    const handleSelectDate = (day) => {
        onSelectDay(day.dateString)
        sheetRef.current?.dismiss()
    }

    return (
        <BottomSheetModal
            ref={sheetRef}
            snapPoints={snapPoints}
            enablePanDownToClose
        >
            <View style={styles.container}>
                <AppText variant="title" color="text">Selecciona una fecha</AppText>
                
                <Calendar
                    current={selectedDate}
                    onDayPress={handleSelectDate}
                    theme={{
                        backgroundColor: theme.colors.surface,
                        calendarBackground:
                            theme.colors.surface,
                        dayTextColor:
                            theme.colors.text,
                        monthTextColor:
                            theme.colors.text,
                        todayTextColor:
                            theme.colors.primary,
                        arrowColor:
                            theme.colors.primary,
                        selectedDayBackgroundColor:
                            theme.colors.primary,
                        selectedDayTextColor:
                            theme.colors.onPrimary,
                        textDisabledColor:
                            theme.colors.textVariant
                    }}
                />
            </View>

        </BottomSheetModal>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: theme.spacing.md,
        paddingHorizontal: theme.spacing.lg,
        gap: theme.spacing.sm
    }
})