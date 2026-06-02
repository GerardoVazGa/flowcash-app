import { FormHeader } from "@components/forms/FormHeader";
import { FormInput } from "@components/forms/FormInput";
import { FormSection } from "@components/forms/FormSection";
import { AppText } from "@components/ui/AppText";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useTheme } from "@hooks/useTheme";
import { FormProvider, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { TransactionAmountField } from "./TransactionAmountField";
import { TransactionTypeField } from "./TransactionTypeField";

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

                    <FormSection style={styles.toggle}>
                        <TransactionTypeField name="type" />
                    </FormSection>

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
        gap: theme.spacing.md
    },
    amountSection: {
        marginBottom: theme.spacing.sm
    },
    toggle: {
        paddingHorizontal: theme.spacing.sm
    }
})