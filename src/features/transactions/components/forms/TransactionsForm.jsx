import { FormHeader } from "@components/forms/FormHeader";
import { FormSection } from "@components/forms/FormSection";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useTheme } from "@hooks/useTheme";
import { FormProvider, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { TransactionAmountField } from "./TransactionAmountField";
import { TransactionTypeField } from "./TransactionTypeField";
import { TransactionCategoryField } from "./TransactionCategoryField";

export function TransactionsForm() {
    const form = useForm()

    const { theme } = useTheme()
    const styles = getStyles(theme)

    return (
        <FormProvider {...form}>
            <View style={styles.wrapper}>
                <FormHeader 
                    title="Nueva Transacción" 
                    submitLabel="Guardar"
                />

                <BottomSheetScrollView
                    style={styles.scroll}
                    contentContainerStyle={styles.content}
                >
                    <FormSection style={styles.amountSection}>
                        <TransactionAmountField name="amount" currency="MXN" />
                    </FormSection>

                    <FormSection>
                        <TransactionTypeField name="type" />
                    </FormSection>

                    <View style={styles.details}>

                        <FormSection>
                            <TransactionCategoryField name="category" />
                        </FormSection>

                    </View>

                </BottomSheetScrollView>

                
            </View>

        </FormProvider>
    )
}

const getStyles = (theme) => StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingBottom: theme.spacing.md
    },
    scroll: {
        flex: 1
    },
    content: {
        gap: theme.spacing.md,
        paddingHorizontal: theme.spacing.sm
    },
    amountSection: {
        marginBottom: theme.spacing.sm
    },
    details: {
        padding: theme.spacing.md,
        gap: theme.spacing.md,
        width: "100%",
    }
})