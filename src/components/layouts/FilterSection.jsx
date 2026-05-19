import { AppText } from "@components/ui/AppText"
import { useTheme } from "@hooks/useTheme"
import { StyleSheet, View } from "react-native"

export function FilterSection({title, children}) {
    const { theme } = useTheme()
    const styles = getStyles(theme)

    return (
        <View style={styles.container}>
            <AppText variant="label" color="textVariant">{title}</AppText>
            {children}
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        gap: theme.spacing.md
    }
})