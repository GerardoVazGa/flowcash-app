import { StyleSheet, View } from "react-native";
import THEME from "../../constants/theme";
import { AppIcon } from "../ui/AppIcon";
import { AppText } from "../ui/AppText";
import { AppButton } from "../ui/AppButton";
import { ProgressBar } from "../ui/ProgressBar";
import { IconButton } from "../ui/IconButton";



export function BudgetItem({showDelete = true, onDelete}) {
    const currentTheme = THEME.light
    const styles = getStyles(currentTheme)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AppIcon 
                    name="wallet-outline" 
                    size={24} 
                    background="primaryContainer" 
                    color = "onPrimary" 
                    style={styles.icon}
                />
                <View style={styles.info}>
                    <AppText variant="title">Entretenimiento</AppText>
                    <AppText variant="label" style={styles.period}>Mensual</AppText>
                </View>
                <View style={styles.amount}>
                    <AppText variant="body"> $1000 </AppText>
                    <AppText variant="body">de $2000</AppText>
                </View>

                {showDelete && (
                    <IconButton 
                        icon="trash-outline" 
                        size="sm" 
                        background="" 
                        color="onError" 
                        onPress={onDelete}
                    />
                )}

            </View>
            <ProgressBar />
            <View style={styles.footer}>
                <AppText 
                    variant="body" 
                    style={
                        [
                            styles.percentUsed,
                            {
                                backgroundColor: currentTheme.colors.incomeContainer,
                                color: currentTheme.colors.incomeStrong
                            }
                        ]
                    }
                > 
                    93% usado
                </AppText>
                <AppText variant="body">quedan $ 130.00</AppText>
            </View>
        </View>
    )
}


const getStyles = (currentTheme) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            overflow: "hidden",
            flexDirection: "column",
            alignItems: "center",
            gap: currentTheme.spacing.sm,
            padding: currentTheme.spacing.md,
            borderRadius: currentTheme.radius.xl,
            backgroundColor: currentTheme.colors.surface,

            shadowColor: currentTheme.shadows.shadowColor,
            shadowOffset: currentTheme.shadows.shadowOffset,
            shadowOpacity: currentTheme.shadows.shadowOpacity,
            shadowRadius: currentTheme.shadows.shadowRadius,
            elevation: currentTheme.shadows.elevation

        },
        header: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: currentTheme.spacing.sm,
            width: "100%",
            marginBottom: currentTheme.spacing.sm
        },
        info: {
            flex: 1,
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: currentTheme.spacing.xs
        },
        period: {
            paddingHorizontal: currentTheme.spacing.sm,
            paddingVertical: currentTheme.spacing.xs,
        },
        amount: {
            flexDirection: "column",
            alignItems: "flex-end",
            gap: currentTheme.spacing.sm
        },
        icon: {
            borderRadius: currentTheme.radius.md,
            padding: currentTheme.spacing.sm
        },
        footer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%"
        },
        percentUsed: {
            paddingVertical: currentTheme.spacing.xs,
            paddingHorizontal: currentTheme.spacing.sm,
            borderRadius: currentTheme.radius.md
        }
    })
}