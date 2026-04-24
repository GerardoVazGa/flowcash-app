import { StyleSheet, View } from "react-native";
import { useTheme } from "../../hooks/useTheme";

export function ProgressBar({percent = 10, color}) {
    const {theme} = useTheme()

    const styles = getStyles(theme)

    const safePercent = Math.min(Math.max(percent, 0), 100)

    return (
        <View style={styles.track}>
            <View 
                style={
                    [
                        styles.progressFill,
                        {
                            width: `${safePercent}%`, 
                            backgroundColor: color || theme.colors.income
                        }
                    ]
                }
            >
            </View>
        </View>
    )
}

const getStyles = (currentTheme) => StyleSheet.create({
    track: {
        overflow: "hidden",
        width: "100%",
        height: currentTheme.spacing.sm,
        backgroundColor: currentTheme.colors.surfaceHighest,
        borderRadius: currentTheme.radius.full
    },
    progressFill: {
        height: "100%",
        borderRadius: currentTheme.radius.full
    }
})