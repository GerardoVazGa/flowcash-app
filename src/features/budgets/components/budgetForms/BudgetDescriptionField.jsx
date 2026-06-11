import { FormTextArea } from "@components/forms/FormTextArea";
import { useTheme } from "@hooks/useTheme";
import { StyleSheet } from "react-native";

export function BudgetDescriptionField({ name }) {
    const { theme } = useTheme()
    const styles = getStyles(theme)

    return (
        <FormTextArea 
            name={name}
            label="Descripción"
            placeholder="Ej. Compras semanales, streaming..."
            numberOfLines={4}
            style={styles.textarea}
            asBottomSheetInput={true}
        />
    )
}

const getStyles = (theme) => StyleSheet.create({
    textarea: {
        width: "100%"
    }
})