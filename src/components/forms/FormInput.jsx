import { Controller } from "react-hook-form";
import { AppInput } from "@components/ui/AppInput";
import { FormField } from "./FormField";


export function FormInput({
    control,
    name,
    label,
    placeholder,
    keyboardType
}) {
    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: {
                    value,
                    onChange
                },
                fieldState: {
                    error
                }

            }) => (
                <FormField
                    label={label}
                    error={error?.message}
                >
                    <AppInput
                        value={value}
                        onChangeText={onChange}
                        placeholder={placeholder}
                        keyboardType={keyboardType}
                    />
                </FormField>
            )}
        >

        </Controller>
    )
}