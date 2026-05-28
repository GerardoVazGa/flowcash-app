import { AppText } from "@components/ui/AppText"
import { IconButton } from "@components/ui/IconButton.jsx"
import { useTheme } from "@hooks/useTheme"
import { StyleSheet, View } from "react-native"
import { AppButton } from "@components/ui/AppButton"

export function FormHeader({title, onClose, onSubmit, submitLabel, loading}) {
    const { theme } = useTheme()

    const styles = getStyles(theme)

    return (
        <View style={styles.container}>
            <View style = {styles.side}>
                <IconButton 
                    icon="close" 
                    onPress={onClose}
                    colorIcon="primary"
                    background="transparent"
                    iconSize={24}
                />
            </View>

            <View style={styles.center}>
                <AppText 
                    variant="titleMedium" 
                    color="primary"
                >
                    {title}
                </AppText>
            </View>

            <View style={styles.side}>
                <AppButton 
                    variant="text"
                    onAction={onSubmit}
                >
                    <AppText 
                        variant="label" 
                        color="primary"
                    >
                        {submitLabel}
                    </AppText>
                </AppButton>
            </View>
        </View>
    )

}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.sm,
        marginBottom: theme.spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.outline
    },
    side: {
        alignItems: "center",
        justifyContent: "center"

    },
    center: {
        flex: 1,
        alignItems: "center"
    }
})