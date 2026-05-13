import { ScrollView, StyleSheet, View } from "react-native";
import { AppText } from "../../../components/ui/AppText";
import { BudgetGlobalSummary } from "../components/BudgetGloabalSummary/BudgetGlobalSummary";
import { useTheme } from "../../../hooks/useTheme";

export function BudgetsScreen() {
    const { theme } = useTheme()
    const styles = getStyles(theme)
    return (
        <ScrollView style = {styles.container}>
            <BudgetGlobalSummary />
        </ScrollView>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        padding: theme.spacing.md
    }
})