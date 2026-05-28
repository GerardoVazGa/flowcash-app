import { useTheme } from "@hooks/useTheme";
import { IconButton } from "./IconButton";
import { StyleSheet } from "react-native";

export function FABButton ({icon, onPress}) {
    const { theme } = useTheme()
    const styles = getStyles(theme)

    return (
        <IconButton 
            icon={icon}
            onPress={onPress}
            style={styles.fab}
            size="xl"
        />
    )
}

const getStyles = (theme) => StyleSheet.create({
    fab: {
        position: "absolute",
        right: theme.spacing.lg,
        bottom: 65,
        shadowColor: theme.colors.shadow,
        shadowOffset: theme.shadows.shadowOffset,
        shadowOpacity: theme.shadows.shadowOpacity,
        shadowRadius: theme.shadows.shadowRadius,
        zIndex: 999,
        elevation: 10
    }
})