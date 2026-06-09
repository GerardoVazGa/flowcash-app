import { useFormField } from "@hooks/forms/useFormField"
import { useTheme } from "@hooks/useTheme"
import { useFormContext } from "react-hook-form"
import { FormField } from "./FormField"
import { AppInput } from "@components/ui/AppInput"
import { createAmountInputVariants } from "@constants/amountInputVariant"
import { AppText } from "@components/ui/AppText"
import { parseAmount } from "@utils/parsers/parseAmount"
import { useMemo, useState } from "react"

export function FormAmountInput({
    name, 
    label, 
    currency, 
    placeholder,
    variant = "display",
    labelStyle,
    containerStyle,
    inputStyle,
    asBottomSheetInput = false
}) {
    const { control } = useFormContext()

    const { value, onChange, onBlur, error } = useFormField(control, name)

    const [displayValue, setDisplayValue] = useState("")

    const { theme } = useTheme()
    
    const variants = useMemo(() => createAmountInputVariants(theme), [theme])

    const variantStyle = variants[variant] ?? variants.display

    const handleChange = (text) => {
        const parsedValue = parseAmount(text)
        if(parsedValue !== displayValue) {
            setDisplayValue(parsedValue)
        }
        onChange(parsedValue)
    }

    return (
        <FormField
            label={label}
            error={error}
            labelStyle={[variantStyle.label, labelStyle]}
        >
            <AppInput 
                value={displayValue}
                onChangeText={handleChange}
                placeholder={placeholder}
                leftComponent={
                    currency && (
                        <AppText 
                            variant={variantStyle.currencyVariant} 
                            color="primary"
                        >
                            {currency}
                        </AppText>
                    )
                }
                containerStyle={
                    [variantStyle.container, containerStyle]
                }
                style={[variantStyle.input, inputStyle]}
                keyboardType="decimal-pad"
                asBottomSheetInput={asBottomSheetInput}
            />
        </FormField>
    )
}