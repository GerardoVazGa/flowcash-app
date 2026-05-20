import { Pressable, StyleSheet } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { MONTHS_SHORT } from "../../../constants/periodFilters";
import { View } from "react-native";
import { AppText } from "../../ui/AppText";

export function MonthsCeil({
    month,
    year,
    selected,
    isDisabled,
    isCurrentMonth,
    hasData,
    onPress
}) {
    const {theme} = useTheme()
    const styles = getStyles(theme, selected)

    return (
        <Pressable
            style={
                [
                    styles.container,
                    isDisabled && styles.ceilDisabled,
                    isCurrentMonth && styles.currentCeil,
                    !hasData && !isDisabled && styles.ceilEmpty
                ]
            }
            onPress={() => {
                if(!isDisabled) onPress(month)
            }}
            android_ripple={isDisabled ? undefined : {
                color: `${theme.colors.primaryContainer}33`
            }}
        >
            {isCurrentMonth && <View style={styles.currentDot}/>}

            <AppText 
                variant="title" 
                color={(isDisabled || !hasData) ? "textVariant" : selected ? "primary": "text"}
            >
                {MONTHS_SHORT[month]}
            </AppText>

            <View style={[styles.activeDot, (!hasData || isDisabled) && styles.activityDotHidden]}/>
        </Pressable>
    )
}

const getStyles = (theme, selected) => StyleSheet.create({
    container: {
        alignItems: "center",
        position: "relative",
        gap: theme.spacing.xs,
        paddingVertical: theme.spacing.xs,
        paddingHorizontal: theme.spacing.md,
        backgroundColor: selected ? `${theme.colors.primary}18` : theme.colors.surfaceLow,
        borderRadius: theme.radius.lg,
        borderColor: selected ? `${theme.colors.primary}44` : theme.colors.outline,
        borderWidth: selected ? 2 : 1
    },
    currentCeil : {
        backgroundColor: `${theme.colors.primary}10`
    },
    ceilDisabled: {
        opacity: 0.3
    },
    ceilEmpty: {
        opacity: 0.5
    },
    currentDot: {
        position: "absolute",
        top: 5,
        right: 5,
        width: theme.spacing.sm,
        height: theme.spacing.sm,
        borderRadius: theme.radius.full,
        backgroundColor: theme.colors.primaryContainer
    },
    activeDot: {
        width: theme.spacing.sm,
        height: theme.spacing.sm,
        borderRadius: theme.radius.full,
        backgroundColor: theme.colors.primary
    },
    activityDotHidden: {
      opacity: 0,
    },
})