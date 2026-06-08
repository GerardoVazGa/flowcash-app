import { useFormField } from "@hooks/forms/useFormField"
import { useTheme } from "@hooks/useTheme"
import { useFormContext } from "react-hook-form"
import { FormField } from "./FormField"
import { AppInput } from "@components/ui/AppInput"
import { StyleSheet } from "react-native"

export function FormTextArea({
    name, 
    label,
    placeholder, 
    numberOfLines = 4,
    containerStyle,
    style,
    labelStyle

}) {
    const  { theme } =useTheme()

    const { control } = useFormContext()

    const { value, onChange, onBlur, error } = useFormField(control, name)

    return (
        <FormField
            label={label}
            error={error}
            labelStyle={labelStyle}
        >
            <AppInput 
                value={value}
                onChangeText={onChange}
                placeholder={placeholder}
                multiline={true}
                numberOfLines={numberOfLines}
                style={style}
                containerStyle={containerStyle}

            />

        </FormField>
    )
}