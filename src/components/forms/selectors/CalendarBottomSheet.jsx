import { AppIcon } from "@components/ui/AppIcon";
import { AppText } from "@components/ui/AppText";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useTheme } from "@hooks/useTheme";
import { generateMarkedDates } from "@utils/date/generateMarkedDates";
import { getMinDateString } from "@utils/date/getMinDateString";
import { getTodayString } from "@utils/date/getToday";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";

export function CalendarBottomSheet({
    sheetRef,
    selectedDate,
    endDate,
    allowFutureDates = false,
    onSelectDay
}) {
    const snapPoints = useMemo(() => ["75%"], [])
    const { theme } = useTheme()
    const styles = getStyles(theme)

    const maxDate = useMemo(() => {
        if(allowFutureDates) return undefined

        return getTodayString()
    }, [allowFutureDates])

    const minDate = useMemo(() => getMinDateString(), [])

    const markedDates = useMemo(() => {
        if(!selectedDate) return {}

        if(!endDate) {
            return {
                [selectedDate]: {
                    selected: true,
                    disableTouchEvent: true,
                }
            }
        }

        return generateMarkedDates(selectedDate, endDate, theme)

    },  [selectedDate, endDate, theme])

    const handleSelectDate = (day) => {
        onSelectDay(day.dateString)
        sheetRef.current?.dismiss()
    }

    return (
        <BottomSheetModal
            ref={sheetRef}
            snapPoints={snapPoints}
            enablePanDownToClose
            enableDynamicSizing = {false}
            stackBehavior="push"
        >
            <View style={styles.container}>
                <AppText variant="title" color="text">Selecciona una fecha</AppText>
                
                <Calendar
                    current={selectedDate || getTodayString()}
                    onDayPress={handleSelectDate}
                    markedDates={markedDates}
                    markingType={endDate ? "period" : "simple"}
                    enableSwipeMonths = {true}
                    hideExtraDays = {true}
                    renderArrow={(direction) => (
                        <AppIcon 
                            name={direction === "left" ? "chevron-back" : "chevron-forward"}
                            size={20}
                            color={theme.colors.primary}
                        />
                    )}
                    maxDate={maxDate}
                    minDate={minDate}
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
                        selectedDayBackgroundColor:
                            theme.colors.primary,
                        selectedDayTextColor:
                            theme.colors.onPrimary,
                        textDisabledColor:
                            `${theme.colors.textVariant}50`
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