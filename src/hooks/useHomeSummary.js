import { useMemo } from "react"
import { transactionsService } from "../services/transactionsService.js"
import { budgetsService } from "../services/budgetsServices.js"
import { calculateIncomes } from "../utils/transactions/calculateIncomes.js"
import { calculateExpenses } from "../utils/transactions/calculateExpenses.js"
import { calculateBalance } from "../utils/transactions/calculateBalance.js"
import { sortTransactionsByDate } from "../utils/transactions/sortTransactionsByDate.js"
import { formatCurrency } from "../utils/formatters/formatCurrency.js"
import { mapBudgetsWithMetrics } from "../utils/budgets/mapBudgetsWithMetrics.js"

export const useHomeSummary = () => {
    const transactions = transactionsService().getTransactions()

    const budgets = budgetsService().getBudgets()

    const incomes = useMemo(() => calculateIncomes(transactions), [transactions])

    const expenses = useMemo(() => calculateExpenses(transactions), [transactions])

    const balance = calculateBalance(incomes, expenses)

    const recentTransactions = useMemo(() => {

        return sortTransactionsByDate(transactions).slice(0, 5)

    }, [transactions])

    const recentBudgets = useMemo(() => {

        return mapBudgetsWithMetrics(budgets).slice(0, 3)
    }, [budgets])

    return {
        incomes: formatCurrency(incomes),
        expenses: formatCurrency(expenses),
        totalBalance: formatCurrency(balance),
        recentTransactions,
        recentBudgets
    }
}