import { StyleSheet } from "react-native";
import { View } from "react-native";
import { AppText } from "../ui/AppText";
import { COLORS, GRADIENTS } from "../../consonants/colors";
import { SPACING, RADIUS } from "../../consonants/layout";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Stat } from "./MetricCard";
import { AppIcon } from "../ui/AppIcon";

export function BalanceCard() {
    const [balance, setBalance] = useState(0)
    return (
        <LinearGradient 
            colors={GRADIENTS.light.primary.colors} 
            start={GRADIENTS.light.primary.start}
            end={GRADIENTS.light.primary.end}
            locations={GRADIENTS.light.primary.locations}
            style={styles.card}
        >
            <View style = {styles.balanceContainer}>
                <AppText variant="label" color="onPrimary">Balance Total</AppText>
                <AppText variant="headline" color="onPrimary" style={styles.balanceAmount}> $124,560.85 </AppText>
            </View>
            <AppIcon name="wallet-outline" size={34} style={styles.icon}
                background="primaryContainer" color = "onPrimary"
            />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: SPACING.lg,
        borderRadius: RADIUS.xl,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        borderRadius: RADIUS.full,
        padding: SPACING.sm,
        outlineColor: COLORS.light.outline,
        outlineWidth: SPACING.xs
    },
    balanceAmount: {
        marginVertical: SPACING.md
    }
})