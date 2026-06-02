import { AppIcon } from "@components/ui/AppIcon"
import { AppText } from "@components/ui/AppText"
import { useTheme } from "@hooks/useTheme"
import { Pressable, StyleSheet } from "react-native"
import { View } from "react-native"

export function SelectOption({label, icon, selected, onPress}) {
    const { theme } = useTheme()
    const styles = getStyles(theme)

    return(
        <Pressable
            onPress={onPress}
            style = {selected && {
                    borderColor: theme.colors.primary, 
                    borderWidth: 1,
                    borderRadius: theme.radius.md,
                }
            }
        >
            <View
                style = {[
                    styles.container,
                    selected && {
                        backgroundColor: `${theme.colors.primary}10`,
                        borderColor: theme.colors.primary
                    }
                ]}
            >
                <View style={styles.left}>
                    {icon && 
                        <AppIcon 
                            name={icon} 
                            size={18} 
                            color={selected ? "onPrimary": "textVariant"}
                            background={selected ? "primaryContainer": "surfaceHigh"}
                            style={styles.icon}
                        />
                    }

                    <AppText 
                        variant="body" 
                        color={selected ? "text": "textVariant"}
                    >
                        {label}
                    </AppText>
                </View>

                {selected && <AppIcon name="checkmark" size={18} color="text" />}
            </View>

        </Pressable>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: theme.spacing.md,
        paddingHorizontal: theme.spacing.lg
    },
    left: {
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing.md
    },
    icon: {
        borderRadius: theme.radius.md,
        padding: theme.spacing.sm
    }
})