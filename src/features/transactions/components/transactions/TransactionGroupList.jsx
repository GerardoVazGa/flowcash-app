import { SectionList, StyleSheet, View } from "react-native";
import { AppText } from "../../ui/AppText";
import { TransactionItem } from "./TransactionItem";
import { useTheme } from "../../../hooks/useTheme";
import { useCallback, useMemo } from "react";

export function TransactionGroupList({transactions}) {
    const { theme } = useTheme()
    const styles = useMemo(() => getStyles(theme), [theme])

    const renderItem = useCallback(({item}) => (
        <TransactionItem transaction={item} variant="dense"/>
    ), [])

    const renderSectionHeader = useCallback(({section}) => (
        <View style={styles.sectionHeader}>
            <AppText variant="headline">{section.header}</AppText>
        </View>
    ), [styles])

    const keyExtractor = useCallback((item) => item.id.toString(), []) 

    const ItemSeparatorComponent = useCallback(() => (
        <View style={styles.separator}/>
    ), [styles])

    return (
        <SectionList 
            sections={transactions}
            keyExtractor={keyExtractor}
            renderSectionHeader={renderSectionHeader}
            renderItem={renderItem}
            ItemSeparatorComponent={ItemSeparatorComponent}
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