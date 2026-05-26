import { useController } from "react-hook-form"

export const useFormField = (control, name) => {
    const {
        field,
        formState
    } = useController({control, name})

    const { value, onChange, onBlur } = field
    const { error } = formState

    return {
        value,
        onChange,
        onBlur,
        error: error?.message
    }
}