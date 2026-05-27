import { Controller, useFormContext } from "react-hook-form";
import { AppInput } from "@components/ui/AppInput";
import { FormField } from "./FormField";


export function FormInput({
    name,
    label,
    placeholder,
    keyboardType,
    leftComponent,
    rightComponent,
    style
}) {
    const { control } = useFormContext()

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
                        leftComponent={leftComponent}
                        rightComponent={rightComponent}
                        style={style}
                    />
                </FormField>
            )}
        >

        </Controller>
    )
}