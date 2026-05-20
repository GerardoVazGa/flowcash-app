import { useMemo } from "react"
import { formatCurrency } from "@utils/formatters/formatCurrency.js"
import { filterTransactions } from "../utils/filters/filterTransactions.js"
import { sortTransactionsByDate } from "../utils/sorting/sortTransactionsByDate.js"
import { groupTransactionsByDate } from "../utils/grouping/groupTransactionsBydate.js"
import { calculateIncomes } from "../utils/calculations/calculateIncomes.js"
import { calculateExpenses } from "../utils/calculations/calculateExpenses.js"
import { calculateBalance } from "../utils/calculations/calculateBalance.js"
import { useRawTransactions } from "./useRawTransactions.js"


export const useTransactions = (filters) => {
    const  { rawTransactions: transactions } = useRawTransactions()

    const filteredTransactions = useMemo(() => {
        return filterTransactions(transactions, filters)
    }, [transactions, filters])

    const sortedTransactions = useMemo(() => {
        return sortTransactionsByDate(filteredTransactions)
    }, [filteredTransactions])

    const groupedTransactions = useMemo(() => {
        return groupTransactionsByDate(sortedTransactions)
    }, [sortedTransactions])

    const incomes = useMemo(() => {
        return calculateIncomes(filteredTransactions)
    }, [filteredTransactions])

    const expenses = useMemo(() => {
        return calculateExpenses(filteredTransactions)
    }, [filteredTransactions])

    const totalBalance = calculateBalance(incomes, expenses)

    

    return {
        transactions: groupedTransactions,
        incomes: formatCurrency(incomes),
        expenses: formatCurrency(expenses),
        totalBalance: formatCurrency(totalBalance)
    }
}