import { FormHeader } from "@components/forms/FormHeader";
import { FormSection } from "@components/forms/FormSection";
import { BUDGETS_PERIODS } from "@features/budgets/constants/budgetPeriod";
import { budgetSchema } from "@features/budgets/schema/budgetSchema";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "@hooks/useTheme";
import { FormProvider, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { BudgetLimitField } from "./BudgetLimitField";
import { calculatePeriodDates } from "@features/budgets/utils/period/calculatePeriodDates";
import { BudgetCategoryField } from "./BudgetCategoryField";
import { BudgetAccountField } from "./BudgetAccountField";
import { BudgetPeriodField } from "./BudgetPeriodField";
import { BudgetDescriptionField } from "./BudgetDescriptionField";
import { AppButton } from "@components/ui/AppButton";
import { AppText } from "@components/ui/AppText";

export function BudgetsForm({ onClose }) {
    const form = useForm({
        resolver: zodResolver(budgetSchema),
        defaultValues: {
            limit: 0,
            description: "",
            category: "",
            periodType: BUDGETS_PERIODS.MONTHLY,
            accountId: null
        }
    })

    const { theme } = useTheme()
    const styles = getStyles(theme)

    const onSubmit = (data) => {
        const { periodType, ...rest } = data
        const {startDate, endDate} = calculatePeriodDates(data.periodType)
        
        const budget = {
            ...rest,
            period: {
                type: periodType,
                startDate,
                endDate
            }
        }

        console.log("Budget data:", budget)

        onClose()
    }
    
    return (
        <FormProvider {...form}>
            <View style={styles.wrapper}>
                <FormHeader 
                    title="Nuevo Presupuesto" 
                    onClose={onClose} 
                    submitLabel="Guardar"
                    onSubmit={form.handleSubmit(onSubmit)}
                />

                <BottomSheetScrollView
                    style={styles.scroll}
                    contentContainerStyle={styles.content}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <FormSection style={styles.limitSection}>
                        <BudgetLimitField name="limit" currency="MXN" />
                    </FormSection>

                    <View style={styles.details}>
                        <FormSection>
                            <BudgetCategoryField name="category" />
                        </FormSection>

                        <FormSection>
                            <BudgetAccountField name="accountId" />
                        </FormSection>

                        <FormSection>
                            <BudgetPeriodField name="periodType" />
                        </FormSection>

                        <FormSection>
                            <BudgetDescriptionField name="description" />
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
    limitSection: {
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