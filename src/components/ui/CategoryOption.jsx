import { Pressable, StyleSheet, View } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { AppText } from "./AppText";
import { AppIcon } from "./AppIcon";

export function CategoryOption({title, selected, onPress}) {
    const { theme } = useTheme()
    const styles = getStyles(theme, selected)

    return (
        <Pressable
            onPress={onPress}
            style={styles.container}
        >
            <AppText 
                variant="title"
                color={selected ? "text": "textVariant"}
            >
                {title}
            </AppText>

            <View style={styles.check}>
                {selected && <AppIcon name="checkmark" size={18} color="onPrimary"/>}
            </View>
        </Pressable>
    )
}

const getStyles = (theme, selected) => StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: theme.spacing.sm,
        paddingHorizontal: theme.spacing.md,
        backgroundColor: selected ? `${theme.colors.primary}10` : "transparent",
        borderRadius: theme.radius.md,
        borderColor: selected ? `${theme.colors.primary}40` : "transparent",
        borderWidth: 1
    },
    check: {
        overflow: "hidden",
        width: theme.spacing.lg,
        height: theme.spacing.lg,
        borderRadius: theme.radius.sm,
        borderColor: selected ? theme.colors.primary : theme.colors.surfaceHighest,
        backgroundColor: selected ? theme.colors.primary : theme.colors.surfaceLow,
        borderWidth: selected ? 2 : 1,
        justifyContent: "center",
        alignItems: "center"
    }

})