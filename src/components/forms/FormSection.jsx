import { StyleSheet, View } from "react-native";
import { AppText } from "@components/ui/AppText";
import { useTheme } from "@hooks/useTheme";


export function FormSection({
    title,
    children
}) {
    const { theme } = useTheme()
    const styles = getStyles(theme)

    return (
        <View style={styles.container}>
            {title && (
                <AppText
                    variant="title"
                    color="text"
                >
                    {title}
                </AppText>
            )}

            {children}
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        gap: theme.spacing.md
    }
})