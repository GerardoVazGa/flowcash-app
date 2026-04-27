import { StyleSheet } from "react-native";
import { View } from "react-native";
import { AppText } from "../ui/AppText";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Stat } from "./MetricCard";
import { AppIcon } from "../ui/AppIcon";
import { useTheme } from "../../hooks/useTheme.js";

export function BalanceCard({totalBalance}) {
    const { theme } = useTheme()
    const styles = getStyles(theme)

    return (
        <LinearGradient 
            colors={theme.gradients.primary.colors} 
            start={theme.gradients.primary.start}
            end={theme.gradients.primary.end}
            locations={theme.gradients.primary.locations}
            style={styles.card}
        >
            <View style = {styles.balanceContainer}>
                <AppText variant="label" color="onPrimary">Balance Total</AppText>
                <AppText variant="headline" color="onPrimary" style={styles.balanceAmount}> {totalBalance} </AppText>
            </View>
            <AppIcon name="wallet-outline" size={34} style={styles.icon}
                background="primaryContainer" color = "onPrimary"
            />
        </LinearGradient>
    )
}

const getStyles = (theme) => StyleSheet.create({
    card: {
        padding: theme.spacing.lg,
        borderRadius: theme.radius.xl,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        borderRadius: theme.radius.full,
        padding: theme.spacing.sm,
        outlineColor: theme.colors.outline,
        outlineWidth: theme.spacing.xs
    },
    balanceAmount: {
        marginVertical: theme.spacing.md
    }
})