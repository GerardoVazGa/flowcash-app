import { useFormField } from "@hooks/forms/useFormField"
import { FormField } from "./FormField"
import { AppSelect } from "@components/ui/AppSelect"
import { useTheme } from "@hooks/useTheme"
import { CalendarBottomSheet } from "./selectors/CalendarBottomSheet"
import { useMemo, useRef } from "react"
import { Keyboard, StyleSheet } from "react-native"
import { useFormContext } from "react-hook-form"

export function FormDateField({
    label,
    name,
    placeholder = "Seleccione una fecha",
}) {
    const calendarSheetRef = useRef(null)

    const { control } = useFormContext()

    const { value, onChange, onBlur, error } = useFormField(control, name)

    const { theme } = useTheme()
    const styles = getStyles(theme)

    const formattedDate = useMemo(() => {
        if(!value) return ""

        const [year, month, day] = value.split("-").map(Number)

        return Intl.DateTimeFormat("es-MX", {
            day: "numeric",
            month: "long",
            year: "numeric"
        }).format(new Date(year, month - 1, day))
    }, [value])

    const displayDateValue = useMemo(() => {
        return formattedDate || placeholder
    }, [formattedDate, placeholder])

    const openSheet = () => {
        Keyboard.dismiss()
        calendarSheetRef.current?.present()
    }

    return(
        <FormField
            label={label}
            error={error}
        >
            <AppSelect 
                value={displayDateValue}
                placeholder={placeholder}
                onPress={openSheet}
                icon="calendar-outline"
            />

            <CalendarBottomSheet 
                sheetRef={calendarSheetRef}
                selectedDate={value}
                onSelectDay={onChange}
            />

        </FormField>
    )
}

const getStyles = (theme) => StyleSheet.create({})