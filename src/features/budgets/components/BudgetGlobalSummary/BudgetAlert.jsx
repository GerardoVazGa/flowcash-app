import { StyleSheet, View } from "react-native";
import { useTheme } from "../../../../hooks/useTheme";
import { AppIcon } from "../../../../components/ui/AppIcon";
import { AppText } from "../../../../components/ui/AppText";

export function BudgetAlert({value}) {
    const {
        theme
    } = useTheme()

    const styles = getStyles(theme)
    return (
        <View style={styles.container}>
            <AppIcon 
                size={12}
                name="calendar-outline"
                color="textVariant"
            />
            <AppText variant="body" color="textVariant" >
                {value}
            </AppText>
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: theme.colors.surfaceLow,
        borderRadius: theme.radius.full,
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.xs,
        justifyContent: "center",
        alignItems: "center",
        gap: theme.spacing.xs,
        maxWidth: 140,
    }
})