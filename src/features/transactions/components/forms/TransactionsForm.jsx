import { FormHeader } from "@components/forms/FormHeader";
import { FormSection } from "@components/forms/FormSection";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useTheme } from "@hooks/useTheme";
import { FormProvider, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { TransactionAmountField } from "./TransactionAmountField";
import { TransactionTypeField } from "./TransactionTypeField";
import { TransactionCategoryField } from "./TransactionCategoryField";
import { TransactionDateField } from "./TransactionDateField";
import { TransactionDescriptionField } from "./TransactionDescriptionField";
import { AppButton } from "@components/ui/AppButton";
import { AppText } from "@components/ui/AppText";
import { zodResolver } from "@hookform/resolvers/zod";
import { transactionSchema } from "@features/transactions/schema/transactionSchema";
import { TRANSACTION_TYPE } from "@features/transactions/constants/transactionType";
import { getToday, getTodayString } from "@utils/date/getToday";
import { TransactionAccountField } from "./TransactionAccountField";

export function TransactionsForm({onCloseSheet}) {
    const form = useForm({
        resolver: zodResolver(transactionSchema),
        defaultValues: {
            amount: 0,
            type: TRANSACTION_TYPE.EXPENSE,
            category: "",
            date: getTodayString(),
            description: "",
            accountId: null
        }
    })

    const { theme } = useTheme()
    const styles = getStyles(theme)

    const onSubmit = (data) => {
        console.log(data)
        onCloseSheet()
    }

    return (
        <FormProvider {...form}>
            <View style={styles.wrapper}>
                <FormHeader 
                    title="Nueva Transacción" 
                    submitLabel="Guardar"
                    onClose={onCloseSheet}
                    onSubmit={form.handleSubmit(onSubmit)}
                />

                <BottomSheetScrollView
                    style={styles.scroll}
                    contentContainerStyle={styles.content}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
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

                        <FormSection>
                            <TransactionDateField name="date" />
                        </FormSection>

                        <FormSection>
                            <TransactionAccountField name="accountId" />
                        </FormSection>

                        <FormSection>
                            <TransactionDescriptionField name="description" />
                        </FormSection>
                    </View>



                </BottomSheetScrollView>

                <View style={styles.actions}>
                    <AppButton 
                        variant="gradient" 
                        onAction={form.handleSubmit(onSubmit)}
                        rounded="md"
                        size="md"
                    >
                        <AppText variant="title" color="onPrimary">Guardar</AppText>
                    </AppButton>

                </View>


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
        paddingHorizontal: theme.spacing.md
    },
    amountSection: {
        marginBottom: theme.spacing.sm
    },
    details: {
        padding: theme.spacing.md,
        gap: theme.spacing.md,
        width: "100%",
    },
    actions: {
        padding: theme.spacing.md,
        borderTopWidth: 1,
        borderTopColor: theme.colors.outline
    }
})