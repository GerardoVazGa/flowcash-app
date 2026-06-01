import { useFormField } from "@hooks/forms/useFormField"
import { useTheme } from "@hooks/useTheme"
import { useFormContext } from "react-hook-form"
import { FormField } from "./FormField"
import { AppInput } from "@components/ui/AppInput"
import { createAmountInputVariants } from "@constants/amountInputVariant"
import { AppText } from "@components/ui/AppText"
import { parseAmount } from "@utils/parsers/parseAmount"

export function FormAmountInput({
    name, 
    label, 
    currency, 
    placeholder,
    variant = "display",
    labelStyle,
    containerStyle,
    inputStyle
}) {
    const { control } = useFormContext()

    const { value, onChange, onBlur, error } = useFormField(control, name)

    const { theme } = useTheme()
    
    const variants = createAmountInputVariants(theme)

    const variantStyle = variants[variant] ?? variants.display

    const handleChange = (text) => {
        const parsedValue = parseAmount(text)
        onChange(parsedValue)
    }

    return (
        <FormField
            label={label}
            error={error}
            labelStyle={[variantStyle.label, labelStyle]}
        >
            <AppInput 
                value={value ?? "0.00"}
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
            />
        </FormField>
    )
}