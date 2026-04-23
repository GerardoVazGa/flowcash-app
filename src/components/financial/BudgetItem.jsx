import { StyleSheet, View } from "react-native";
import THEME from "../../constants/theme";
import { AppIcon } from "../ui/AppIcon";
import { AppText } from "../ui/AppText";
import { AppButton } from "../ui/AppButton";
import { ProgressBar } from "../ui/ProgressBar";
import { IconButton } from "../ui/IconButton";
import { CATEGORY_ICONS } from "../../constants/categoryIcon";
import { budgetStatus } from "../../utils/budgetStatus";



export function BudgetItem({showDelete = true, onDelete, budget}) {
    const currentTheme = THEME.light
    const styles = getStyles(currentTheme)

    const budgetWithIcon = {...budget, icon: CATEGORY_ICONS[budget.category]}

    const {variant} = budgetStatus(budget.percent)

    const status = currentTheme.status[variant]
    const colorBar = currentTheme.colors[status.bar]
    const backgroundColor = currentTheme.colors[status.bg]
    const textColor = currentTheme.colors[status.text]
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AppIcon 
                    name={budgetWithIcon.icon}
                    size={24} 
                    background="primaryContainer" 
                    color = "onPrimary" 
                    style={styles.icon}
                />
                <View style={styles.info}>
                    <AppText variant="title">{budgetWithIcon.category}</AppText>
                    <AppText variant="label" style={styles.period}> {budgetWithIcon.period}</AppText>
                </View>
                <View style={styles.amount}>
                    <AppText variant="body"> $ {budgetWithIcon.spent} </AppText>
                    <AppText variant="body">de $ {budgetWithIcon.limit}</AppText>
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
            <ProgressBar color={colorBar} percent={budgetWithIcon.percent}/>
            <View style={styles.footer}>
                <AppText 
                    variant="body" 
                    style={
                        [
                            styles.percentUsed,
                            {
                                backgroundColor: backgroundColor || currentTheme.colors.incomeContainer,
                                color: textColor || currentTheme.colors.incomeStrong
                            }
                        ]
                    }
                > 
                    {budgetWithIcon.percent}% usado
                </AppText>
                <AppText 
                    variant="body"
                > 
                    {
                        budgetWithIcon.isOverLimit 
                        ? "Limite excedido por $ " + Math.abs(budgetWithIcon.remaining)
                        : `Quedan $ ${budgetWithIcon.remaining}`
                    }
                </AppText>
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