import { StyleSheet, View } from "react-native"
import { useTheme } from "@hooks/useTheme"
import { AppText } from "@components/ui/AppText"

export function FormField({label, error, children}) {
    const { theme } = useTheme()
    const styles = getStyles(theme)

    return (
        <View style={styles.field}>
            {label && <AppText variant="label">{label}</AppText>}

            {children}

            {!!error && <AppText variant="error">{error}</AppText>}
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    field: {
        gap: theme.spacing.xs
    }
})