import { StyleSheet, View } from "react-native";
import THEME from "../../constants/theme";

const currentTheme = THEME.light

export function ProgressBar({percent = 10, color}) {
    const safePercent = Math.min(Math.max(percent, 0), 100)

    return (
        <View style={styles.track}>
            <View 
                style={
                    [
                        styles.progressFill,
                        {
                            width: `${safePercent}%`, 
                            backgroundColor: color || currentTheme.colors.income
                        }
                    ]
                }
            >
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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