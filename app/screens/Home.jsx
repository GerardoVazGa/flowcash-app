import { View, Text, ScrollView, StyleSheet} from "react-native";
import { Section } from "../../components/layouts/Section.jsx";
import { AppButton } from "../../components/ui/AppButton.jsx";
import { AppText } from "../../components/ui/AppText.jsx";
import { AppIcon } from "../../components/ui/AppIcon.jsx";
import { BalanceCard } from "../../components/financial/BalanceCard.jsx";
import { MetricCard } from "../../components/financial/MetricCard.jsx";
import { COLORS } from "../../consonants/colors.js";
import { SPACING, RADIUS } from "../../consonants/layout.js";

export function Home(){

    return (
        <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.content}
        >
            <BalanceCard/>
            
            
            {/* <AppButton text="Click me" onAction={() => alert("Click")} styles={styles} size="sm" rounded="lg"/> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    content: {
        padding: SPACING.lg,
        gap: SPACING.lg,
        paddingBottom: SPACING.xl
    },
    icon: {
        borderRadius: RADIUS.full,
        padding: SPACING.sm,
    }
})


