import { Pressable, StyleSheet, View } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { AppIcon } from "./AppIcon";
import { AppText } from "./AppText";

export function FilterOption({title, subtitle, iconName, onPress, selected}) {
    const { theme } = useTheme()

    const styles = getStyles(theme, selected)
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <View style={styles.left}>
                <AppIcon 
                    name={iconName} 
                    size={18} 
                    color={selected ? "onPrimary": "textVariant"}
                    background={selected ? "primaryContainer": "surfaceHigh"}
                    style={styles.icon}
                />
                <View>
                    <AppText 
                        variant="title" 
                        color={selected ? "text": "textVariant"}
                    >
                            {title}
                        </AppText>
                    {subtitle && <AppText variant="body" color="textVariant">{subtitle}</AppText>}
                </View>
            </View>

            <View style={styles.right}>
                <View style={styles.radio}>
                    {selected && <View style={styles.radioInner}/>}
                </View>
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
        borderRadius: theme.radius.lg,
        borderColor: selected ? `${theme.colors.primary}40` : theme.colors.outline,
        borderWidth: 1
        
    },
    left: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing.sm
    },
    right: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    icon: {
        borderRadius: theme.radius.md,
        padding: theme.spacing.sm
    },
    radio: {
        height: theme.spacing.lg,
        width: theme.spacing.lg,
        borderRadius: theme.radius.full,
        borderWidth: selected ? 2 : 1,
        borderColor: selected ? theme.colors.primary : theme.colors.outline,
        backgroundColor: theme.colors.surfaceLow,
        justifyContent: "center",
        alignItems: "center"
    },
    radioInner: {
        height: theme.spacing.md,
        width: theme.spacing.md,
        borderRadius: theme.radius.full,
        backgroundColor: theme.colors.primary
    }
})