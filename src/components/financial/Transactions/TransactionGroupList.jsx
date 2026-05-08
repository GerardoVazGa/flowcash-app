import { SectionList, StyleSheet, View } from "react-native";
import { AppText } from "../../ui/AppText";
import { TransactionItem } from "./TransactionItem";
import { useTheme } from "../../../hooks/useTheme";

export function TransactionGroupList({transactions}) {
    const { theme } = useTheme()
    const styles = getStyles(theme)
    return (
        <SectionList 
            sections={transactions}
            keyExtractor={(item) => item.id.toString()}
            renderSectionHeader={({section}) => (
                <View style={styles.sectionHeader}>
                    <AppText variant="headline">{section.header}</AppText>
                </View>
            )}
            renderItem={({item}) => (
                <TransactionItem transaction={item} variant="dense"/>
            )}
            ItemSeparatorComponent={() => (
                <View style={styles.separator}/>
            )}
        />
    )
}

const getStyles = (theme) => StyleSheet.create({
    content: {
        paddingHorizontal: theme.spacing.lg,
        paddingBottom: theme.spacing.xl,
    },
    sectionHeader: {
        marginBottom: theme.spacing.md,
        marginTop: theme.spacing.lg
    },
    separator: {
        height: theme.spacing.sm,
    }
})