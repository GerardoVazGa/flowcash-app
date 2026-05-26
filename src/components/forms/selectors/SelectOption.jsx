import { useTheme } from "@hooks/useTheme"
import { StyleSheet } from "react-native"
import { View } from "react-native/types_generated/index"

export function SelectOption({label, icon, selected, onPress}) {
    const { theme } = useTheme()
    const styles = getStyles(theme)

    return(
        <Pressable
            onPress={onPress}
        >
            <View
                style = {[
                    styles.container,
                    selected && {backgroundColor: `${theme.colors.primary}10`}
                ]}
            >
                {icon && 
                    <AppIcon 
                        name={icon} 
                        size={18} 
                        color={selected ? "primary": "textVariant"}
                        background={selected ? "primaryContainer": "surfaceHigh"}
                    />
                }

                <AppText 
                    variant="body" 
                    color={selected ? "text": "textVariant"}
                >
                    {label}
                </AppText>

                {selected && <AppIcon name="checkmark" size={18} color="text" />}
            </View>

        </Pressable>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing.sm,
        paddingVertical: theme.spacing.md,
        paddingHorizontal: theme.spacing.lg
    }
})