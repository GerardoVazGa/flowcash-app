import { StyleSheet, View } from "react-native";
import { useTheme } from "../../../../hooks/useTheme"
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { AppText } from "../../../../components/ui/AppText";
import { ProgressRing } from "../../../../components/ui/ProgressRing";
import { BudgetRing } from "./BudgetRing";
import { BudgetSummary } from "./BudgetSummary";
import { formatCurrency } from "../../../../utils/formatters/formatCurrency";
import { BudgetAlert } from "./BudgetAlert";
import { BudgetStatItem } from "./BudgetStatItem";

export function BudgetGlobalSummary({ remaining = 70, percent = 30, totalExeceeded, limit = 100, spent = 30 }) {

    const { theme } = useTheme()
    const styles = getStyles(theme)

    const valueAlert = "7d restantes"

    return (
        <View style={styles.container}>
            <BudgetRing percent={percent} state="AT_RISK"/>
            <View style={styles.summary}>
                <View style = {{flex: 2}}>
                    <BudgetSummary spent={formatCurrency(spent)} limit={formatCurrency(limit)} periodType="Mensual" />
                </View>
                <View style={{flex: 1}}>
                    <BudgetAlert value={valueAlert} />
                </View>
            </View>
            <View style = {styles.separator}/>
            <View style={styles.stats}>
                <BudgetStatItem label="Restante" value={formatCurrency(remaining)} />
                <BudgetStatItem label="Presupuesto" value={formatCurrency(limit)} />
            </View>
        </View>
    )

}

const getStyles = (theme) => StyleSheet.create({
    container: {
        backgroundColor: theme.colors.surface,
        borderRadius: theme.radius.lg,
        padding: theme.spacing.lg,
        gap: theme.spacing.md,
        alignItems: "center",
    },
    summary: {
        flexDirection: "row",
        gap: theme.spacing.sm,
        justifyContent: "center",
        width: "100%",
        
    },
    stats: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    separator: {
        width: "100%",
        height: 1,
        backgroundColor: theme.colors.outline
    }
})