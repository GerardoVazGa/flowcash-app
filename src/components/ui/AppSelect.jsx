import { useTheme } from "@hooks/useTheme"
import { Pressable, StyleSheet, View } from "react-native"
import { AppIcon } from "./AppIcon"
import { AppText } from "./AppText"

export function AppSelect({
    value,
    onPress,
    placeholder,
    icon
}) {
    const { theme } = useTheme()
    const styles = getStyles(theme)
    return (
        <Pressable 
            onPress={onPress}
        >
            <View style={styles.container}>
                {icon && <AppIcon name={icon} size={18} color="textVariant" background="surfaceLow"/>}
                <AppText variant="body">{value || placeholder}</AppText>

                <AppIcon name="chevron-down" size={18} color="textVariant" />
            </View>
        </Pressable>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        gap: theme.spacing.sm,
        backgroundColor: theme.colors.surfaceLow,
        borderWidth: 1,
        borderRadius: theme.radius.xl,
        paddingHorizontal: theme.spacing.lg,
        paddingVertical: theme.spacing.md
    }
})