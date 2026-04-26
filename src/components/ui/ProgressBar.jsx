import { StyleSheet, View } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useEffect } from "react";

export function ProgressBar({percent = 10, color, isVisible = true}) {
    const {theme} = useTheme()
    const progress = useSharedValue(0)

    const styles = getStyles(theme)

    const safePercent = Math.min(Math.max(percent, 0), 100)

    useEffect(() => {
        if (isVisible) {
            progress.value = withTiming(safePercent, {duration: 2000})
        }

        return () => {
            progress.value = 0
        }
    }, [isVisible, safePercent])

    const animatedStyle = useAnimatedStyle(() => {
        return {
            width: `${progress.value}%`
        }
    })
    return (
        <View style={styles.track}>
            <Animated.View 
                style={
                    [
                        styles.progressFill,
                        animatedStyle,
                        { 
                            backgroundColor: color || theme.colors.income
                        }
                    ]
                }
            >
            </Animated.View>
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